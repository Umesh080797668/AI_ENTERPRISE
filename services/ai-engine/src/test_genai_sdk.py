import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = "models/gemini-embedding-001"
text = "Hello world"
try:
    result = genai.embed_content(model=model, content=text, output_dimensionality=1536)
    print(f"Direct SDK Dimension: {len(result['embedding'])}")
except Exception as e:
    print(f"Error with output_dimensionality: {e}")
    # Try without
    result = genai.embed_content(model=model, content=text)
    print(f"Default Dimension: {len(result['embedding'])}")
