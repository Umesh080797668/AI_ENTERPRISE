import requests
import time
import os

BASE_URL = "http://localhost:8081/api/v1"
TEST_USER = {
    "firstname": "Test",
    "lastname": "User",
    "email": "test.user@example.com",
    "password": "password123"
}

def register():
    print("Registering user...")
    try:
        url = f"{BASE_URL}/auth/register"
        response = requests.post(url, json=TEST_USER)
        if response.status_code == 200:
            print("Registration successful")
            return response.json().get("token")
        elif response.status_code == 403: # Maybe user exists?
            print("User might already exist, trying login...")
            return  login()
        else:
            print(f"Registration failed: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"Registration exception: {e}")
        return None

def login():
    print("Logging in...")
    try:
        url = f"{BASE_URL}/auth/authenticate"
        payload = {
            "email": TEST_USER["email"],
            "password": TEST_USER["password"]
        }
        response = requests.post(url, json=payload)
        if response.status_code == 200:
            print(f"Login successful.")
            return response.json().get("token")
        else:
            print(f"Login failed: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"Login exception: {e}")
        return None

def upload_document(token):
    print("Uploading document...")
    if not token:
        print("No token provided, skipping upload.")
        return None

    try:
        url = f"{BASE_URL}/documents/upload"
        headers = {"Authorization": f"Bearer {token}"}
        
        # Create a dummy file
        with open("test_doc.txt", "w") as f:
            f.write("This is a test document for end-to-end testing of the AI platform.")
            
        with open("test_doc.txt", "rb") as f:
            files = {"file": ("test_doc.txt", f, "text/plain")}
            response = requests.post(url, headers=headers, files=files)
            
        if response.status_code == 200:
            doc_id = response.json().get("id")
            print(f"Upload successful. Document ID: {doc_id}")
            return doc_id
        else:
            print(f"Upload failed: {response.status_code} - {response.text}")
            return None
            
    except Exception as e:
        print(f"Upload exception: {e}")
        return None
    finally:
        if os.path.exists("test_doc.txt"):
            os.remove("test_doc.txt")

def check_status(token, doc_id):
    print(f"Checking status for document {doc_id}...")
    if not doc_id:
        return

    url = f"{BASE_URL}/documents/{doc_id}"
    headers = {"Authorization": f"Bearer {token}"}
    
    for _ in range(10): # Poll for 10 seconds
        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                status = response.json().get("status")
                print(f"Current status: {status}")
                if status == "COMPLETED" or status == "FAILED":
                    return status
            else:
                print(f"Failed to get status: {response.status_code}")
        except Exception as e:
            print(f"Status check exception: {e}")
            
        time.sleep(2)
        
    print("Timeout waiting for status update.")

if __name__ == "__main__":
    token = register()
    if not token:
        print("Registration failed, attempting login directly...")
        token = login()
        
    if token:
        print(f"Got token: {token[:10]}...")
        doc_id = upload_document(token)
        if doc_id:
            print(f"Document uploaded with ID: {doc_id}")
            check_status(token, doc_id)
        else:
            print("Document upload failed.")
    else:
        print("Could not authenticate.")
