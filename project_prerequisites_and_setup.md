# Project Prerequisites & Setup Guide

This document outlines everything you need to have in place *before* starting the "AI-Powered Enterprise Knowledge & Workflow Platform" project, along with step-by-step instructions on how to set them up.

## 1. Prerequisites (What you need)

### A. Development Environment (Software)
Ensure these are installed on your local machine:
1.  **Code Editor**: VS Code (recommended) or IntelliJ IDEA (for Java).
2.  **Runtime Environments**:
    *   **Java JDK 17+**: For Spring Boot services.
    *   **Python 3.10+**: For the AI service (LangChain/FastAPI).
    *   **Node.js (LTS version)**: For React/Next.js/NestJS.
    *   **Ruby 3.x** (if using Rails): For specific backend components.
    *   **Flutter SDK**: For mobile/desktop apps.
3.  **Containerization**: Docker Desktop or Rancher Desktop (must support `docker-compose`).
4.  **Version Control**: Git.
5.  **CLI Tools**:
    *   Cloudinary CLI (optional).
    *   `kubectl` & `helm` (for Kubernetes deployment later).
    *   `psql` (PostgreSQL client) or a GUI tool like DBeaver.

### B. Accounts & API Keys (Services)
You will need accounts for these services (free tiers are usually sufficient for dev):
1.  **OpenAI API** (or Azure OpenAI): For LLM and embeddings. *Requires credit card.*
2.  **Pinecone / Weaviate Cloud**: For the Vector Database.
3.  **Supabase** (Optional but recommended): For easy Auth & Postgres database hosting.
4.  **Cloudinary** (Free Tier): For storage (documents).
5.  **GitHub / GitLab**: For hosting your repository and CI/CD.

### C. Knowledge Base (Required Skills)
You should have a basic understanding of:
*   **REST APIs**: Methods, status codes, headers.
*   **Docker**: How to write a `Dockerfile` and `docker-compose.yml`.
*   **Async Programming**: Promises/Async-Await (JS), Threads/CompletableFuture (Java).
*   **Basic AI Concepts**: What embeddings, vectors, and context windows are.

---

## 2. Setting Up Your Environment (How to do it)

### Step 1: Install Languages & Runtimes

*   **Java**: Download JDK 17+ from [Adoptium](https://adoptium.net/).
    *   Verify: `java -version`
*   **Node.js**: Download from [nodejs.org](https://nodejs.org/).
    *   Verify: `node -v` and `npm -v`
*   **Python**: Download from [python.org](https://www.python.org/).
    *   Verify: `python3 --version`
*   **Ruby**: Use rbenv or RVM (Mac/Linux) or RubyInstaller (Windows).
    *   Verify: `ruby -v`
*   **Flutter**: Follow instructions at [flutter.dev](https://flutter.dev/docs/get-started/install).
    *   Verify: `flutter doctor`

### Step 2: Configure Docker

1.  Install **Docker Desktop**.
2.  Start Docker and ensure the engine is running.
3.  Verify in terminal: `docker ps` (should list processes or be empty, no errors).
4.  Increase memory limit to at least 4GB in Docker settings if running multiple services (Java + AI + DBs).

### Step 3: API Key Management

*   **OpenAI**: Go to [platform.openai.com](https://platform.openai.com/api-keys), create a secret key.
    *   *Security Note*: NEVER commit this to Git. Save it in a `.env` file later.
*   **Pinecone**: Sign up at [pinecone.io](https://www.pinecone.io/), create a "Starter" index (Dimension: 1536 for OpenAI `text-embedding-ada-002`). Get the API Key and Environment name.

### Step 4: Database Prep (Local)

You don't need Supabase immediately if you use Docker. We will set up local versions using `docker-compose`.
*   **Redis**: For caching/queues.
*   **PostgreSQL**: For core data.
*   **MongoDB**: For logs/unstructured data.


---

## 3. Initial Project Setup

Now that you have the tools, here is how to start the actual project structure.

### 1. Initialize the Monorepo
Create a root folder and initialize git.

```bash
mkdir enterprise-knowledge-platform
cd enterprise-knowledge-platform
git init
```

### 2. Create Directory Structure
Organization is key. Create these folders:

```bash
mkdir services infra web mobile scripts docs
mkdir services/core-backend services/ai-engine services/integrations
mkdir web/dashboard web/landing
```

### 3. Setup The Environment File
Create a `.env` file in the root to store your secrets (add this file to `.gitignore`).

```env
# Database Credentials
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
POSTGRES_DB=main_db

# MongoDB
MONGO_URI=mongodb://admin:password@localhost:27017

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# AI Keys
OPENAI_API_KEY=sk-your-key-here
PINECONE_API_KEY=your-pinecone-key
PINECONE_ENV=gcp-starter

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Create the Docker Compose File
Create `docker-compose.yml` in the root to spin up your infrastructure components (Postgres, Redis, MongoDB).

*(Refer to the main Implementation Guide for the section on Docker Compose details)*

---

**You are now ready to start coding according to the "Implementation Steps" in the main guide!**
