# AI-Powered Enterprise Knowledge & Workflow Platform

A secure, multi-tenant knowledge and workflow platform designed for enterprises, integrating centralized knowledge bases, AI-powered semantic search, and workflow automation.

## Project Overview

This platform aims to combine:
- **Centralized Knowledge Base**: For documents, SOPs, code, and meeting notes.
- **AI Assistant**: Private LLM assistant for semantic search and conversational access to company data.
- **Workflow Automation**: Tools for approvals, tasks, and onboarding templates.
- **Integrations**: Connectors for Slack/Teams, Google Drive, Office 365, GitHub, etc.
- **Multi-Platform Support**: Web (React/Next.js/Angular) and Mobile/Desktop (Flutter).

## Architecture

The system follows a microservices architecture:
- **Frontend**: Next.js (Web), Angular (Admin), Flutter (Mobile/Desktop)
- **API Gateway**: NestJS / Spring Cloud Gateway
- **Core Services**: Spring Boot (Java)
- **AI Engine**: Python (FastAPI, LangChain)
- **Ingestion Workers**: Go / Python
- **Databases**: PostgreSQL (Core), MongoDB (Logs/Forms), Redis (Cache), Vector DB (Pinecone/Weaviate)

## Getting Started

### Prerequisites
- Docker & Docker Compose
- Java 17+ (for backend services)
- Node.js (LTS) (for web/gateway)
- Python 3.10+ (for AI service)

### Setup
1.  Clone the repository.
2.  Copy `.env.example` to `.env` and configure your API keys.
3.  Start the infrastructure using Docker Compose:
    ```bash
    docker-compose up -d
    ```

## Directory Structure
- `services/`: Backend microservices (Core, AI, Integrations)
- `web/`: Frontend applications (Dashboard, Landing)
- `mobile/`: Mobile application (Flutter)
- `infra/`: Infrastructure configuration (K8s, Terraform)
- `scripts/`: various utility scripts
- `docs/`: Documentation
