# AI-Powered Enterprise Knowledge & Workflow Platform — Comprehensive Implementation Guide

> A single document that walks you from idea → MVP → production-ready system using Java (Spring Boot), Python (AI), Node/Nest/Express, React/Next.js/Angular, Flutter (mobile/desktop), vector DBs (Pinecone/Weaviate/Milvus), Supabase/Postgres/MySQL and ORMs. Includes tech choices, architecture patterns, file structure, API sketches, AI pipeline, infra, security, testing, deployment, and finishing checklist.

---

## 1. Project Summary (elevator pitch)

Build a secure, multi-tenant **Knowledge & Workflow Platform** for enterprises that combines:
- A centralized knowledge base for documents, SOPs, code and meetings
- Semantic search & conversational access to *your* company data (private LLM assistant)
- Workflow automation (approvals, tasks, onboarding templates)
- Integrations (Slack/Teams, Google Drive, Office 365, GitHub, WhatsApp)
- Multi-platform clients: responsive web (React/Next), admin panel (Angular), mobile + desktop (Flutter)

This shows enterprise architecture, modern AI stacks (LangChain + vector DBs), and full-stack engineering skills.

---

## 2. Core Goals & Success Criteria

**Goals**
- Build a secure, multi-tenant, production-capable system with clear separation of concerns.
- Integrate an AI assistant that can answer questions from uploaded documents and project data.
- Demonstrate microservices, async workers, CI/CD, monitoring, and multi-platform clients.

**Success criteria (how recruiters/companies will judge it):**
- Working demo with private-doc Q&A (LangChain -> embeddings -> Pinecone/Weaviate)
- Role-based auth & multi-tenancy
- Clean public marketing site and a polished dashboard/demo flows
- Clear README, deployment scripts (Docker/Kubernetes/Helm), automated tests, and CI

---

## 3. Users & Roles

- **Super Admin** — manage tenants, global configs
- **Organization Admin** — manage users, roles, integrations
- **Manager** — create workflows, approvals, view analytics
- **Employee** — upload docs, ask AI, follow tasks
- **Service/Integration Bots** — GitHub/Calendar/Slack connectors

---

## 4. High-Level Architecture (Microservices)

```
+------------------------+      +---------------------------+       +-------------------------+
|   Clients              |      |   API Gateway / Edge      |       |   Service Mesh (Istio)  |
|                        |      |                           |       |                         |
|  [Web: Next.js]        | ---> |  [Kong / Spring Cloud]    | --+-> |  [Auth Service] (Keycloak)|
|  [Admin: Angular]      |      |  - Rate Limiting          |   |   +-------------------------+
|  [Mobile: Flutter]     |      |  - SSL Termination        |   |
+------------------------+      |  - Routing                |   +-> |  [Core Business Svc]    |
                                +-------------+-------------+   |   |  (Spring Boot / Java)   |
                                              |                 |   +-----------+-------------+
                                     (GraphQL / REST)           |               |
                                              |                 +-> |  [Ingestion Worker]     |
                                              v                 |   |  (Go / Python)          |
                                +-------------+--------------+  |   +-----------+-------------+
                                |  Aggregation / BFF Layer   |  |               |
                                |  (Apollo GraphQL / NestJS) |  +-> |  [AI Model Service]     |
                                +-------------+--------------+      |  (Python / FastAPI)     |
                                              |                     +-----------+-------------+
                                     (gRPC Internal)                            |
                                              |                     +-----------v-------------+
                                              +-------------------> |  Event Bus (Kafka)      |
                                                                    +-----------+-------------+
```

**Architectural Patterns**
*   **Microservices**: Decoupled services by domain (Auth, Core, AI, Ingestion). Benefits: Scale teams independenty, choose best lang for job (Python for AI, Java for Logic, Go for Speed).
*   **BFF (Backend For Frontend)**: A dedicated `NestJS` or `GraphQL` layer that aggregates data from multiple microservices so the frontend makes only 1 call.
*   **Event-Driven**: Services communicate asynchronously via `Kafka` or `RabbitMQ`. e.g., "Doc Uploaded" event -> triggers "Ingestion Service".
*   **Service Mesh**: Use `Istio` or `Linkerd` to handle service-to-service mTLS, retry logic, and observability without dirtying code.
*   **CQRS (Optional)**: Separate the "Write" model (Relational DB) from the "Read" model (Elasticsearch/Vector DB) for high performance.

**Components**
- **Frontend**: Marketing (Next.js), App (React SPA), Admin (Angular), Mobile & Desktop (Flutter)
- **API Gateway / BFF**: NestJS for Node micro-frontends, or Spring Boot API Gateway for heavy JVM services
- **Core microservices**: Spring Boot (Java) for business logic, user management, workflow engine; **Ruby on Rails** for Admin APIs or rapid tools.
- **AI Service**: Python (FastAPI) hosting LangChain orchestrations, embeddings, and LLM calls
- **Vector DB**: Pinecone / Weaviate / Milvus for embeddings + similarity search
- **Primary DB (SQL)**: PostgreSQL (recommended) or MySQL; optionally Supabase for rapid dev and auth
- **Secondary DB (NoSQL)**: **MongoDB** for audit logs, complex JSON forms, and raw text storage
- **Message Broker**: RabbitMQ / Kafka / **Redis** for events and async tasks
- **Workers**: Celery (Python) or Spring Batch for ingestion, indexing, and long-running tasks
- **Storage**: Cloudinary (Recommended)
- **Observability**: Prometheus + Grafana + ELK (or OpenSearch) + Sentry

---

## 5. Recommended Tech Stack (primary + optional)

### Backend & Services
- **Core business services**: Java + Spring Boot (Spring Web, Spring Data JPA, Spring Security) OR **Ruby on Rails** (for rapid API development)
- **High-Performance Microservices**: **Go (Golang)** with Gin/Eco (for low-latency ingestion/indexing workers).
- **API Gateway / BFF**: NestJS (TypeScript) or Spring Cloud Gateway. **Kong** or **Traefik** for advanced traffic control.
- **Inter-Service Communication**: **gRPC** (Protobuf) for internal service-to-service calls (faster than REST).
- **Client API**: **GraphQL** (Apollo Federation) to stitch microservices into one graph for the frontend.
- **Auth / IAM**: Supabase Auth (Postgres-based) or Keycloak (OIDC), OAuth2, JWT
- **AI orchestration**: Python (FastAPI) + LangChain, Hugging Face Transformers, OpenAI API
- **Vector DB**: Pinecone (managed), Weaviate, or Milvus (self-hosted)
- **Message Broker**: RabbitMQ, Kafka (for scale), or **Redis Pub/Sub**. **NATS** is also a great lightweight option for microservices.
- **Workers & Automation**: **n8n** (recommended for visual workflows & integrations), Celery (Python), Spring Batch, Sidekiq (Ruby), or **Temporal.io** (for durable, reliable workflow orchestration).
- **Storage**: Cloudinary
- **Databases**: 
  - **Relational**: PostgreSQL (primary), MySQL optional, **CockroachDB** (for distributed SQL).
  - **NoSQL**: **MongoDB** (for flexible logs), **Cassandra / ScyllaDB** (for massive write-heavy logs).
  - **Cache/Queue**: **Redis** (session store, caching).
- **ORMs**: Hibernate / JPA (Java), Prisma or TypeORM (Node), SQLAlchemy (Python), ActiveRecord (Ruby), **GORM** (Go).

### Microservices Infrastructure (The "Glue")
- **Service Discovery**: **Consul** or **Eureka** (if not using K8s native discovery).
- **Service Mesh**: **Istio** or **Linkerd** (for mTLS, observability, traffic splitting).
- **Configuration**: **Spring Cloud Config** or **Etcd**.
- **Change Data Capture**: **Debezium** (to sync PostgreSQL changes to Vector DB automatically).
- **Feature Flags**: **Unleash** or **LaunchDarkly** (to toggle features without redeploying).

### Frontend
- **Marketing Site**: Next.js (React) — SSR/SEO
- **Web App / Dashboard**: React with Vite or Create React App (or Angular for admin)
- **Component Libraries**: Tailwind CSS + Headless UI, Material-UI, Ant Design
- **State Management**: Redux Toolkit or React Query / Tanstack Query
- **Real-time**: WebSockets or Socket.io (NestJS)

### Mobile & Desktop
- **Flutter** for cross-platform mobile & desktop builds (or React Native if preferred)
- **Electron / Tauri** (if choosing web-based desktop alternative)

### DevOps
- **Containerization**: Docker, docker-compose
- **Orchestration**: Kubernetes (EKS/GKE/AKS) + Helm
- **CI/CD**: GitHub Actions / GitLab CI / Jenkins
- **Secrets**: HashiCorp Vault / Kubernetes secrets
- **Monitoring**: Prometheus + Grafana; logs via ELK or OpenSearch
- **Error tracking**: Sentry

### Testing & QA
- **Unit**: JUnit (Java), pytest (Python), Jest (JS)
- **Integration**: Testcontainers (Java), Playwright/Cypress (E2E)
- **Security scans**: Snyk, OWASP ZAP

---

## 6. Data Model & Example Schemas

### Key Entities (simplified)
- **Tenant**: id, name, plan, settings
- **User**: id, tenant_id, email, role, hashed_password, metadata
- **Document**: id, tenant_id, owner_id, title, mime_type, storage_url, metadata
- **Embedding**: id, document_id, chunk_id, vector (stored in vector DB)
- **Workflow**: id, tenant_id, name, steps (JSON)
- **Task**: id, workflow_id, assignee_id, status, due_date
- **AuditLog**: id, actor_id, action, target, timestamp

> Use relational DB for transactional data and vector DB for embeddings. Keep vector metadata linking back to `document_id`.

---

## 7. Document Ingestion & AI Pipeline (Detailed)

**Goal:** Convert uploaded files into searchable chunks and embeddings, then enable a conversational retriever.

**Steps:**
1. **Upload**: User uploads document → file stored in Cloudinary, metadata stored in SQL.
2. **Preprocessing**: Worker pulls file, extracts text (PDF, DOCX, PPTX, HTML, code). Use `pdfplumber`, `python-docx`, `textract`.
3. **Chunking**: Split text into semantic chunks (e.g., 300–800 tokens) with overlap.
4. **Embeddings**: Use OpenAI embeddings or local model (SentenceTransformers) to create vectors.
5. **Store vectors**: Insert vectors into Pinecone/Weaviate/Milvus with metadata (tenant_id, document_id, chunk_id).
6. **Indexing**: Optionally index document text in Elasticsearch/OpenSearch for boolean search and highlighting.
7. **Retriever**: Query vector DB for nearest neighbors per user query.
8. **RAG / Chain**: Use LangChain to assemble retrieved chunks into a prompt and call an LLM for answer generation. Use a summarize + answer chain pattern and include citation metadata.

**Important:** Always use a **retriever + reranker** pattern and attach source links/`document_id` to responses for traceability.

---

## 8. API Contracts (sample)

### Auth
- `POST /auth/signup` — register (tenant optional)
- `POST /auth/login` — returns JWT & refresh token
- `POST /auth/refresh` — refresh

### Documents
- `POST /v1/documents` — multipart upload (returns document_id)
- `GET /v1/documents/{id}` — metadata
- `DELETE /v1/documents/{id}`

### AI
- `POST /v1/ai/query` — body: { tenant_id, user_id, query, top_k }
  - returns: { answer, sources: [{document_id, chunk_id, score}], trace }
- `GET /v1/ai/conversations/{id}` — conversation history

### Workflows & Tasks
- `POST /v1/workflows` — create workflow
- `POST /v1/workflows/{id}/start` — start workflow
- `POST /v1/tasks/{id}/complete` — complete task

---

## 9. Security & Compliance Checklist

- Multi-tenant data isolation (tenant_id on all records & vector metadata)
- Auth: OIDC/JWT + refresh tokens; Role-based access control
- Encryption: Encrypted Cloudinary storage, TLS in transit; DB encryption at rest
- Secrets: Vault or K8s secrets with RBAC
- Audit logs for document access & AI queries
- Rate limiting & request quotas per tenant
- Data retention & deletion flows (GDPR-like features)
- Scanning uploaded files for malware
- LLM safety: filter PII leakage, redact sensitive fields, and include governance on model use

---

## 10. Reliability, Scalability & Performance

- Use **worker queue** (RabbitMQ/Kafka + Celery or Spring workers) for ingestion and heavy tasks.
- **Cache** frequent queries with Redis.
- Keep vector DB & embeddings async; store embedding status on document record.
- Horizontal scale stateless services behind a load balancer.
- Use autoscaling in Kubernetes.
- Use read replicas for DB heavy-read loads.

---

## 11. Dev Experience & Repo Structure

**Monorepo recommended** (for a portfolio: easier to show everything together)

```
/monorepo-root
  /infra               # k8s, helm, terraform (optional)
  /services
    /auth-service      # Spring Boot or Supabase setup
    /api-gateway       # NestJS or Spring Cloud Gateway
    /core-service      # Spring Boot — business logic
    /ai-service        # Python FastAPI (langchain + embeddings)
    /worker            # celery / python worker or Java worker
  /web
    /marketing         # Next.js
    /app               # React (CRA/Vite) app
    /admin             # Angular app
  /mobile              # Flutter project
  /scripts             # helper scripts (db migrations, seed)
  /docs                # architecture docs, runbooks
  docker-compose.yml
  README.md
```

**Developer shortcuts**
- Use `docker-compose` for local dev (Postgres, Redis, Pinecone local alternative, Cloudinary).
- Use `Makefile` and npm scripts to make dev commands simple.

---

## 12. CI / CD & Environment Strategy

- Branching: `main` (production), `develop` (staging), feature branches.
- CI: GitHub Actions pipeline for lint/test/build; push images to Docker registry.
- CD: ArgoCD or GitOps-style deployment (Helm charts). For simpler portfolio, use Docker Compose + deploy to a small VPS or platform like Render/Vercel/Heroku.
- Environment variables per environment; store secrets in Vault or cloud secret manager.

---

## 13. Testing Strategy

- **Unit tests** for services and models
- **Integration tests** using Testcontainers (Postgres, Redis, Elasticsearch)
- **E2E** tests with Playwright/Cypress for major flows: auth, upload, query, workflow
- **AI tests**: deterministic tests mocking embeddings and LLM responses; smoke tests against real model for staging
- **Load tests**: use k6 or Gatling to test ingestion & query throughput

---

## 14. Observability & Incident Response

- **Tracing**: OpenTelemetry + Jaeger
- **Metrics**: Prometheus + Grafana dashboards (requests, errors, queue lengths, embedding latencies)
- **Logs**: centralized with ELK or OpenSearch
- **Error tracking**: Sentry for exceptions
- **Runbooks**: for common failure modes (queue backpressure, vector DB down, model rate limits)

---

## 15. MVP Scope (what to build first)

**MVP features (minimum to demo a convincing product):**
1. Auth + multi-tenant signup
2. Document upload & storage
3. Async ingestion → chunking → embeddings → store in vector DB
4. Conversational AI: ask questions and return answers with sources
5. Basic dashboard to upload documents & view query history
6. Deploy marketing site + demo user flow

> Skip workflows, deep integrations, and advanced analytics for MVP — add later.

---

## 16. Implementation Flow / Step-by-step (developer tasks without time estimates)

### Setup & Foundations
1. Create monorepo with folders and baseline README.
2. Add Docker Compose with Postgres, Redis, MinIO, and a simple Python/Java service.
3. Implement Auth (Supabase or Keycloak). Wire JWT into frontend.

### Core Backend
4. Implement Core API (Spring Boot): users, tenants, documents metadata.
5. Implement document upload to Cloudinary.

### AI Pipeline
6. Build Python FastAPI service with endpoints to trigger ingestion.
7. Implement workers to extract text, chunk, and produce embeddings.
8. Wire embeddings to Pinecone/Weaviate and store metadata in Postgres.
9. Implement `POST /v1/ai/query` to fetch nearest chunks and call LLM using LangChain.

### Frontend
10. Build a simple React app to authenticate and upload documents.
11. Add chat UI to send queries and render answers + sources.

### Polish
12. Add role-based UI elements, tenant isolation checks in backend.
13. Add monitoring, basic logging, error handling.
14. Create demo scripts and seed data to show flows.

---

## 17. Additional Useful Libraries & Tools (Expanded)

**Java/Spring (Microservices)**:
*   **Spring Cloud**: Everything you need for config, discovery (Eureka), and circuit breakers.
*   **Resilience4j**: Fault tolerance library (Circuit Breaker, Rate Limiter).
*   **Micrometer**: Metrics collection for Prometheus.
*   **MapStruct**: High-performance Java bean mapping.

**Go (Golang)**:
*   **Gin / Echo**: Fast web frameworks.
*   **GORM**: The developer-friendly ORM library.
*   **Viper**: Complete configuration solution.
*   **Watermill**: Building event-driven applications easily.

**Python/AI**:
*   **LangChain**: The "Spring Boot" of LLM apps.
*   **SentenceTransformers**: For generating embeddings locally.
*   **Pydantic**: Critical for data validation in FastAPI.
*   **Celery / Dramatiq**: Distributed task queues.

**Node/Nest/Frontend**:
*   **Apollo Server**: GraphQL implementation.
*   **BullMQ**: Reliable Redis-based queue for Node.
*   **Zod / Yup**: Schema validation.
*   **TanStack Query**: Async state management for React.

**DevOps / Infrastructure**:
*   **Terraform**: Use this instead of manual clicking (Infrastructure as Code).
*   **Helm**: The "Package Manager" for Kubernetes applications.
*   **Kustomize**: Template-free Kubernetes configuration customization.
*   **ArgoCD**: GitOps continuous delivery tool for Kubernetes.
*   **Lens**: The best IDE for viewing Kubernetes clusters.


---

## 18. Productization & Portfolio Tips (how to show it to recruiters)

- Produce a 3–5 minute demo video showing:
  - Uploading a doc
  - Asking the AI a question and showing the source citation
  - Workflow approval example (if implemented)
- Create a short case study README with architecture diagram, trade-offs, and what you learned.
- Open-source core modules (e.g., `ai-service`) with clear README so employers can run it locally.
- Deploy a public marketing site (Next.js) with screenshots and a link to a demo (or sandbox account).
- Write a blog post explaining your RAG approach and privacy controls — recruiters read technical blogs.

---

## 19. How to "End" the Project (deliverable checklist)

**Deliverables to consider finalizing**
- Public GitHub repo(s) with code, clear README, and contribution instructions
- Docker Compose + scripts to run locally with seeded demo data
- Helm charts / manifests for Kubernetes deployment
- Demo video + architecture doc
- Test suite and CI pipeline configured
- Postman collection or OpenAPI spec
- Project summary for LinkedIn & resume (concise bullets + link)

**Post-launch / Maintenance**
- Add observability alerts and runbook documents
- Keep dependencies up to date and security-scan regularly
- Gather user feedback and iterate (improve retrieval quality, add integrations)

---

## 20. Potential Extensions (Detailed Implementation)

These features take the project from "good" to "hired immediately".

### 1. Slack/Teams Bot Integration
**Description**: Allow users to ask the AI questions directly inside Slack or MS Teams.
*   **How it works**: A user types `@KnowledgeBot How do I request leave?`. The bot sends the text to your API, your API retrieves docs + answers with LLM, and the bot replies in the thread.
*   **How to Implement**:
    *   Use **BotKit** or **Slack Bolt** (Node.js/Python).
    *   Create a dedicated endpoint in your API: `POST /v1/integrations/slack/events`.
    *   On receiving a mention event, trigger an async job (don't keep Slack waiting).
    *   The worker calls your `AI Service`, then posts the result back to Slack using the `chat.postMessage` API.

### 2. Auto-SOP Generator from Meetings
**Description**: Upload a recorded meeting (mp3/mp4), and the system generates a Standard Operating Procedure (SOP) document.
*   **How it works**: Audio is transcribed to text (Whisper). The transcript is fed to an LLM with a prompt like "Extract action items and steps from this text and format as an SOP". The result is saved as a new Document.
*   **How to Implement**:
    *   **Transcribe Service**: Use OpenAI Whisper API or run `whisper` locally in a Python worker.
    *   **Prompt Engineering**: "You are an expert technical writer. Convert this transcript into a step-by-step guide."
    *   **Storage**: Save the resulting markdown/text as a new entry in your `Documents` table and vector index it immediately.

### 3. Data Loss Prevention (DLP) & PII Filtering
**Description**: Automatically detect and redact sensitive info (Credit Cards, SSNs) before it hits the LLM.
*   **How it works**: Before the user query goes to OpenAI, or before a document is indexed, it passes through a regex/NER (Named Entity Recognition) filter.
*   **How to Implement**:
    *   **Library**: Use **Microsoft Presidio** (Python) or simple Regex patterns.
    *   **Middleware**: Create a pre-processing step in your implementation pipeline.
    *   **Logic**: If `PII_DETECTED`, replace with `[REDACTED]` or block the request entirely.

### 4. Enterprise Compliance (Audit & Analytics)
**Description**: A dashboard showing "Who asked what" and "Which documents are most popular".
*   **How it works**: Every API call is logged to a high-volume store (MongoDB/ClickHouse). Aggregation jobs run nightly to calculate stats.
*   **How to Implement**:
    *   **Storage**: Use **MongoDB** to store `QueryLogs` { user_id, prompt, timestamp, source_docs_used }.
    *   **Visualization**: Use a library like **Recharts** or **Nivo** in the Admin Panel to show "Top searched topics" or "Zero-result queries" (gap analysis).

### 5. On-Premise Deployment (Self-Hosted)
**Description**: Instructions on how a company can run this on their own servers (no public cloud).
*   **How it works**: Replace SaaS dependencies (OpenAI, Pinecone, Cloudinary) with local open-source equivalents.
*   **How to Implement**:
    *   **LLM**: Use **Ollama** or **LocalAI** to run Llama 3/Mistral locally.
    *   **Vectors**: Switch from Pinecone to **Milvus** or **Postgres (pgvector)** running in Docker.
    *   **Storage**: Use **MinIO** instead of Cloudinary.
    *   **Packaging**: Provide a master `docker-compose.yml` that spins up *everything*.

---

## 21. Risks & Mitigations (How to Solve)

### 1. PII Leakage from LLM
*   **Risk**: Employees accidentally upload a doc with customer passwords, and the LLM repeats it.
*   **How to solve**:
    *   **Pre-processing**: Implement the DLP filter mentioned in Extensions.
    *   **Warning UI**: Display a clear banner "Do not upload sensitive data".
    *   **Private Models**: Use Azure OpenAI (enterprise agreement) or self-hosted models where data is not trained on.

### 2. Cost of LLMs (Bill Shock)
*   **Risk**: A loop in code or heavy usage spikes a $500 monthly bill.
*   **How to solve**:
    *   **Quotas**: Implement daily/monthly token limits per tenant in your DB. Check this limit before calling the API.
    *   **Caching**: Hash the prompt + doc_ids. If the exact same question is asked, return the cached answer from Redis (save money + latency).
    *   **Tiered Models**: Use cheaper models (GPT-3.5-Turbo or Haiku) for summarization and expensive ones (GPT-4) only for complex unique reasoning.

### 3. Vector DB Scaling Limits
*   **Risk**: Putting all tenants in one index causes slow searches or hitting limits.
*   **How to solve**:
    *   **Metadata Filtering**: ALWAYS filter by `tenant_id` in the vector query.
    *   **Namespacing**: Use Pinecone/Weaviate "namespaces" to physically separate tenant data within one index.
    *   **Sharding**: For huge tenants, create a dedicated index.

### 4. Hallucinations (Wrong Answers)
*   **Risk**: The AI confidently answers "Yes" when the document says "No".
*   **How to solve**:
    *   **Citation Enforcement**: Force the LLM to format the answer as "Answer [Source ID]". If it can't cite, it should say "I don't know".
    *   **Thresholding**: If the vector search similarity score is low (e.g., < 0.75), do not even call the LLM. Just return "No relevant documents found."
    *   **System Prompt**: Harshly instruct the model: "Answer ONLY based on the provided context. Do not use outside knowledge."

---

## 22. Quick-start checklist (first files to create)

- `README.md` (project overview + quick run)
- `docker-compose.yml` for dev
- `services/auth-service` skeleton
- `services/core-service` skeleton (Spring Boot)
- `services/ai-service` skeleton (FastAPI)
- `web/marketing` Next.js starter
- `web/app` React starter with auth and upload flow
- `mobile` Flutter starter with login + file upload

---

## 23. Final Notes & Next Steps I can help with

I can also produce any of the following ready-to-use artifacts on demand (pick one or more):
- Full **architecture diagram** (SVG/PNG)
- Starter **monorepo scaffold** with Docker Compose and sample endpoints
- Complete **AI service** (Python + LangChain) that runs locally and indexes files to Pinecone (or FAISS)
- **Spring Boot** skeleton with tenant-aware auth & user management
- **React + Next.js** frontend scaffold with auth + upload + chat UI
- **CI workflow** (GitHub Actions) template for build/test/deploy

---

*End of document.*

