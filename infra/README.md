# Infrastructure Configuration

This directory contains the infrastructure configuration for the AI Enterprise Knowledge Platform.

## Directory Structure

- `k8s/`: Kubernetes manifests for deploying the application.
  - `infrastructure/`: Setup for database, message broker, and vector DB.
  - `services/`: Deployments and Services for the application microservices.
- `scripts/`: Helper scripts for deployment and management.

## Prerequisites

- Kubernetes Cluster (Minikube, EKS, GKE, AKS, etc.)
- kubectl configured
- Docker (to build images)

## Deploying

1. Use the provided script:
   ```bash
   ./scripts/deploy.sh
   ```

2. Or manually apply:
   ```bash
   kubectl apply -f k8s/infrastructure/
   # Wait for infra to be ready
   kubectl apply -f k8s/services/
   ```
