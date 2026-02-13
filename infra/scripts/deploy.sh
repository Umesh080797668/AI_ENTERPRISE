#!/bin/bash
set -e

# Base directory relative to this script
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Deploying secrets..."
if [ -f "$BASE_DIR/k8s/secrets.yaml" ]; then
    kubectl apply -f "$BASE_DIR/k8s/secrets.yaml"
else
    echo "Warning: secrets.yaml not found. Using secrets-template.yaml (PLEASE UPDATE SECRETS FOR PRODUCTION)"
    kubectl apply -f "$BASE_DIR/k8s/secrets-template.yaml"
fi

echo "Deploying infrastructure (Postgres, Redis, RabbitMQ, Weaviate)..."
kubectl apply -f "$BASE_DIR/k8s/infrastructure/"

echo "Waiting for infrastructure to be somewhat ready (sleeping 10s)..."
sleep 10

echo "Deploying Services..."
kubectl apply -f "$BASE_DIR/k8s/services/"

echo "Deployment complete."
echo "Check status with: kubectl get pods"
