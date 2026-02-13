import requests
import time
import os

BASE_URL = "http://localhost:8081/api/v1"
AUTH_URL = f"{BASE_URL}/auth"
DOC_URL = f"{BASE_URL}/documents"

EMAIL = "test_imantha@example.com"
PASSWORD = "password123"

def get_token():
    print("Authenticating...")
    # Try Register - ignore errors as user might exist
    requests.post(f"{AUTH_URL}/register", json={
        "firstname": "Test",
        "lastname": "User",
        "email": EMAIL,
        "password": PASSWORD
    })
    
    # Authenticate
    resp = requests.post(f"{AUTH_URL}/authenticate", json={
        "email": EMAIL,
        "password": PASSWORD
    })
    
    if resp.status_code != 200:
        raise Exception(f"Auth failed: {resp.text}")
        
    return resp.json()['token']

def upload_doc(token):
    print("Uploading document...")
    headers = {"Authorization": f"Bearer {token}"}
    
    # Create a dummy file
    with open("test_upload.txt", "w") as f:
        f.write("This is a test document to verify the OpenAI integration and Vector DB ingestion.\n" * 10)
        
    files = {'file': ('test_upload.txt', open('test_upload.txt', 'rb'), 'text/plain')}
    resp = requests.post(f"{DOC_URL}/upload", headers=headers, files=files)
    
    if resp.status_code != 200:
        raise Exception(f"Upload failed: {resp.text}")
        
    return resp.json()['id']

def check_status(token, doc_id):
    print(f"Checking status for doc {doc_id}...")
    headers = {"Authorization": f"Bearer {token}"}
    
    for i in range(30): # Wait up to 60 seconds (30 * 2)
        resp = requests.get(f"{DOC_URL}/{doc_id}", headers=headers)
        if resp.status_code != 200:
            print(f"Error getting status: {resp.text}")
            continue
            
        status = resp.json().get('status')
        print(f"Polling {i}: Status = {status}")
        
        if status == 'COMPLETED':
            print("SUCCESS: Ingestion completed!")
            return True
        elif status == 'FAILED':
            print("FAILURE: Ingestion marked as FAILED.")
            return False
            
        time.sleep(2)
        
    print("TIMEOUT: Document processing took too long.")
    return False

if __name__ == "__main__":
    try:
        token = get_token()
        doc_id = upload_doc(token)
        check_status(token, doc_id)
    except Exception as e:
        print(f"Test failed: {e}")
