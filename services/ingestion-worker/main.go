package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	amqp "github.com/rabbitmq/amqp091-go"
)

type Task struct {
	DocumentID int    `json:"document_id"`
	FilePath   string `json:"file_path"`
}

type IngestRequest struct {
	DocumentID int                    `json:"document_id"`
	Text       string                 `json:"text"`
	Metadata   map[string]interface{} `json:"metadata"`
}

func failOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func updateStatus(documentID int, status string) {
	backendURL := os.Getenv("CORE_BACKEND_URL")
	if backendURL == "" {
		backendURL = "http://core-backend:8080"
	}

	url := fmt.Sprintf("%s/api/internal/documents/%d/status", backendURL, documentID)
	payload := map[string]string{"status": status}
	jsonPayload, _ := json.Marshal(payload)

	// Retry logic for status update
	for i := 0; i < 3; i++ {
		resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonPayload))
		if err == nil {
			resp.Body.Close()
			log.Printf("Updated status for doc %d to %s", documentID, status)
			return
		}
		log.Printf("Failed to update status (attempt %d): %v", i+1, err)
		time.Sleep(2 * time.Second)
	}
}

func sendToAiEngine(documentID int, text string, filePath string) error {
	aiEngineURL := os.Getenv("AI_ENGINE_URL")
	if aiEngineURL == "" {
		aiEngineURL = "http://ai-engine:8000"
	}

	ingestReq := IngestRequest{
		DocumentID: documentID,
		Text:       text,
		Metadata: map[string]interface{}{
			"source":      filePath,
			"ingested_at": time.Now().Format(time.RFC3339),
		},
	}

	jsonData, err := json.Marshal(ingestReq)
	if err != nil {
		return err
	}

	resp, err := http.Post(fmt.Sprintf("%s/ingest", aiEngineURL), "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != 200 {
		body, _ := ioutil.ReadAll(resp.Body)
		return fmt.Errorf("AI Engine returned status %d: %s", resp.StatusCode, string(body))
	}

	return nil
}

func extractText(filePath string) (string, error) {
	// For MVP: Treat everything as plain text if possible, or support simple formats
	// In a real scenario, use libraries for PDF/DOCX here or call a separate service.

	// Check if file exists
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		// Try prepending /app/uploads/ if relative
		altPath := filepath.Join("/app/uploads", filePath)
		if _, err := os.Stat(altPath); err == nil {
			filePath = altPath
		} else {
			return "", fmt.Errorf("file not found: %s", filePath)
		}
	}

	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return "", err
	}

	return string(content), nil
}

func main() {
	rabbitURL := os.Getenv("RABBITMQ_URL")
	if rabbitURL == "" {
		rabbitURL = "amqp://guest:guest@rabbitmq:5672/"
	}

	// Retry connection to RabbitMQ
	var conn *amqp.Connection
	var err error
	for i := 0; i < 10; i++ {
		conn, err = amqp.Dial(rabbitURL)
		if err == nil {
			break
		}
		log.Printf("Failed to connect to RabbitMQ, retrying in 5s... (%v)", err)
		time.Sleep(5 * time.Second)
	}
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	q, err := ch.QueueDeclare(
		"ingestion_tasks", // name
		true,              // durable
		false,             // delete when unused
		false,             // exclusive
		false,             // no-wait
		nil,               // arguments
	)
	failOnError(err, "Failed to declare a queue")

	err = ch.Qos(
		1,     // prefetch count
		0,     // prefetch size
		false, // global
	)
	failOnError(err, "Failed to set QoS")

	msgs, err := ch.Consume(
		q.Name, // queue
		"",     // consumer
		false,  // auto-ack
		false,  // exclusive
		false,  // no-local
		false,  // no-wait
		nil,    // args
	)
	failOnError(err, "Failed to register a consumer")

	forever := make(chan struct{})

	go func() {
		for d := range msgs {
			log.Printf("Received a task: %s", d.Body)

			var task Task
			err := json.Unmarshal(d.Body, &task)
			if err != nil {
				log.Printf("Error decoding JSON: %s", err)
				d.Nack(false, false) // dead letter?
				continue
			}

			updateStatus(task.DocumentID, "PROCESSING")

			text, err := extractText(task.FilePath)
			if err != nil {
				log.Printf("Error extracting text: %v", err)
				updateStatus(task.DocumentID, "FAILED")
				d.Nack(false, false)
				continue
			}

			err = sendToAiEngine(task.DocumentID, text, task.FilePath)
			if err != nil {
				log.Printf("Error sending to AI Engine: %v", err)
				updateStatus(task.DocumentID, "FAILED")
				d.Nack(false, true) // requeue?
				continue
			}

			updateStatus(task.DocumentID, "COMPLETED")
			log.Printf("Successfully processed document %d", task.DocumentID)
			d.Ack(false)
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
