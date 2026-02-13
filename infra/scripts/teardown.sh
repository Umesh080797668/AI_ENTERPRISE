#!/bin/bash
set -e

# Base directory relative to this script
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Deleting Services..."
kubectl delete -f "$BASE_DIR/k8s/services/" --ignore-not-found

echo "Deleting Infrastructure..."
kubectl delete -f "$BASE_DIR/k8s/infrastructure/" --ignore-not-found

echo "Deleting Secrets..."
kubectl delete secret app-secrets --ignore-not-found

echo "Teardown complete."
