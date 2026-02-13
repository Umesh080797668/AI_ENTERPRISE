package com.enterprise.ai.core.service;

import com.enterprise.ai.core.model.Document;
import com.enterprise.ai.core.model.DocumentStatus;
import com.enterprise.ai.core.model.User;
import com.enterprise.ai.core.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import java.util.Map;
import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class DocumentService {

    private final DocumentRepository repository;
    private final RestTemplate restTemplate;
    
    // We will mount a volume to /app/uploads in Docker
    @Value("${app.upload.dir:/app/uploads}")
    private String uploadDir;

    @Value("${application.ai-engine.url}")
    private String aiEngineUrl;

    public Document uploadDocument(MultipartFile file, User user) throws IOException {
        validateFile(file);

        // Create directory if not exists
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Generate unique filename to avoid collisions
        String originalFilename = file.getOriginalFilename();
        String uniqueFilename = UUID.randomUUID().toString() + "_" + originalFilename;
        Path filePath = uploadPath.resolve(uniqueFilename);

        // Save file
        Files.copy(file.getInputStream(), filePath);

        // Save metadata
        Document document = Document.builder()
                .filename(originalFilename)
                .contentType(file.getContentType())
                .filePath(filePath.toString())
                .size(file.getSize())
                .status(DocumentStatus.PENDING)
                .uploadedBy(user)
                .uploadedAt(LocalDateTime.now())
                .build();

        Document savedDoc = repository.save(document);

        // Trigger AI processing asynchronously
        try {
            triggerAiProcessing(savedDoc);
        } catch (Exception e) {
            // Log error but don't fail the upload
            System.err.println("Failed to trigger AI processing: " + e.getMessage());
        }

        return savedDoc;
    }

    private void validateFile(MultipartFile file) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("File is empty");
        }
        
        long maxSize = 10 * 1024 * 1024; // 10MB
        if (file.getSize() > maxSize) {
            throw new IllegalArgumentException("File size exceeds 10MB limit");
        }

        String contentType = file.getContentType();
        if (contentType == null || 
           (!contentType.equals("application/pdf") && 
            !contentType.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document") &&
            !contentType.equals("text/plain"))) {
            throw new IllegalArgumentException("Unsupported file type. Allowed: PDF, DOCX, TXT");
        }
    }

    private void triggerAiProcessing(Document document) {
        String url = aiEngineUrl + "/process";
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        // callback_url logic could be added here if we want the AI engine to call back a specific URL

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("document_id", document.getId());
        requestBody.put("file_path", document.getFilePath());

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);
        
        // Fire and forget (or handle response if needed)
        restTemplate.postForObject(url, request, String.class);
        
        // Optimistically set to PROCESSING, although AI engine might queue it
        document.setStatus(DocumentStatus.PROCESSING);
        repository.save(document);
    }

    public List<Document> getUserDocuments(Long userId) {
        return repository.findAllByUploadedBy_Id(userId);
    }
    
    public void updateDocumentStatus(Long documentId, DocumentStatus status) {
        repository.findById(documentId).ifPresent(doc -> {
            doc.setStatus(status);
            repository.save(doc);
        });
    }

    public Document getDocument(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
    }
}
