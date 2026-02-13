from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import json
import pika
from typing import List, Optional
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_community.vectorstores import Pinecone, Weaviate
from langchain.chains import RetrievalQA
from langchain.text_splitter import RecursiveCharacterTextSplitter
from dotenv import load_dotenv
import weaviate
import time

load_dotenv()

app = FastAPI(title="AI Engine", version="1.0.0")

# Initialize Vector Store Config
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENV = os.getenv("PINECONE_ENV")
INDEX_NAME = "enterprise-knowledge-index"

WEAVIATE_URL = os.getenv("WEAVIATE_URL", "http://weaviate:8080")
VECTOR_STORE_TYPE = "pinecone" if PINECONE_API_KEY else "weaviate"

print(f"Using Vector Store: {VECTOR_STORE_TYPE}")

# RabbitMQ Defaults
RABBITMQ_URL = os.getenv("RABBITMQ_URL", "amqp://guest:guest@rabbitmq:5672/")
QUEUE_NAME = "ingestion_tasks"

# --- GOOGLE GEMINI CONFIG ---
def get_google_config():
    """Get Google API Key from env."""
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
         raise Exception("GOOGLE_API_KEY not found in environment variables.")
    
    # Simple check
    embeddings = GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001", google_api_key=api_key)
    return embeddings, api_key

def get_llm(api_key: str):
    return ChatGoogleGenerativeAI(model="models/gemini-2.0-flash", google_api_key=api_key, temperature=0, convert_system_message_to_human=True)

# -------------------------------

class HealthResponse(BaseModel):
    status: str
    service: str

class ProcessRequest(BaseModel):
    document_id: int
    file_path: str

class ProcessResponse(BaseModel):
    message: str
    task_id: str

class IngestRequest(BaseModel):
    document_id: int
    text: str
    metadata: dict

class QueryRequest(BaseModel):
    query: str
    top_k: int = 3

class QueryResponse(BaseModel):
    answer: str
    sources: List[dict]

@app.get("/health", response_model=HealthResponse)
async def health():
    return {"status": "up", "service": "ai-engine"}

def publish_task(document_id: int, file_path: str):
    try:
        connection = pika.BlockingConnection(pika.URLParameters(RABBITMQ_URL))
        channel = connection.channel()
        channel.queue_declare(queue=QUEUE_NAME, durable=True)

        message = {
            "document_id": document_id,
            "file_path": file_path
        }
        
        channel.basic_publish(
            exchange='',
            routing_key=QUEUE_NAME,
            body=json.dumps(message),
            properties=pika.BasicProperties(
                delivery_mode=2,
            ))
        print(f" [x] Sent ingestion task for document {document_id}")
        connection.close()
    except Exception as e:
        print(f"Failed to publish task: {e}")
        raise e

@app.post("/process", response_model=ProcessResponse)
async def process_document(request: ProcessRequest):
    if not request.file_path:
        raise HTTPException(status_code=400, detail="File path is required")
        
    try:
        publish_task(request.document_id, request.file_path)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to queue task: {str(e)}")
    
    return {
        "message": "Document ingestion queued successfully",
        "task_id": f"doc-{request.document_id}"
    }

@app.post("/ingest")
async def ingest_document(request: IngestRequest):
    try:
        print(f"Ingesting document {request.document_id} (Length: {len(request.text)})")

        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len
        )
        texts = text_splitter.split_text(request.text)
        
        metadatas = []
        for i in range(len(texts)):
            meta = request.metadata.copy()
            meta["chunk_id"] = i
            meta["text"] = texts[i]
            metadatas.append(meta)
        
        # Get embeddings config
        embeddings, _ = get_google_config()
        
        if VECTOR_STORE_TYPE == "pinecone":
             Pinecone.from_texts(
                texts=texts,
                embedding=embeddings,
                metadatas=metadatas,
                index_name=INDEX_NAME
            )
        else:
            try:
                import weaviate
                client = weaviate.Client(url=WEAVIATE_URL)
                
                vectorstore = Weaviate(
                    client=client,
                    index_name="Document",
                    text_key="text",
                    embedding=embeddings,
                    by_text=False
                )
                vectorstore.add_texts(texts, metadatas)
            except Exception as e:
                print(f"Weaviate ingestion error: {e}")
                raise e
            
        return {"message": f"Successfully ingested {len(texts)} chunks"}
        
    except Exception as e:
        print(f"Ingestion error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/query", response_model=QueryResponse)
async def query_knowledge_base(request: QueryRequest):
    try:
        embeddings, api_key = get_google_config()
        
        vectorstore = None
        if VECTOR_STORE_TYPE == "pinecone":
            vectorstore = Pinecone.from_existing_index(
                index_name=INDEX_NAME, 
                embedding=embeddings
            )
        else:
            client = weaviate.Client(url=WEAVIATE_URL)
            vectorstore = Weaviate(
                client=client,
                index_name="Document",
                text_key="text",
                embedding=embeddings,
                by_text=False
            )
        
        llm = get_llm(api_key)
        
        qa_chain = RetrievalQA.from_chain_type(
            llm=llm,
            chain_type="stuff",
            retriever=vectorstore.as_retriever(search_kwargs={"k": request.top_k}),
            return_source_documents=True
        )
        
        result = qa_chain.invoke({"query": request.query})
        
        answer = result["result"]
        source_docs = result["source_documents"]
        
        sources = []
        for doc in source_docs:
            sources.append({
                "content": doc.page_content[:200] + "...",
                "metadata": doc.metadata
            })
            
        return {
            "answer": answer,
            "sources": sources
        }
        
    except Exception as e:
        print(f"Query error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "AI Engine is running"}
