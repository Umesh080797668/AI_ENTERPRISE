# Build stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

COPY . .

# Generate go.sum and download deps
RUN go mod tidy
RUN go mod download

RUN go build -o ingestion-worker main.go

# Run stage
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/ingestion-worker .

CMD ["./ingestion-worker"]
