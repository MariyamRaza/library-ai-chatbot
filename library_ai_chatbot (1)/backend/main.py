from fastapi import FastAPI
from pydantic import BaseModel
import openai

app = FastAPI()
openai.api_key = "YOUR_API_KEY"

class Query(BaseModel):
    question: str

@app.post("/chat")
def chat(data: Query):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a library assistant."},
            {"role": "user", "content": data.question}
        ]
    )
    answer = response["choices"][0]["message"]["content"]
    return {"reply": answer}
