from groq import Groq
from app.core.config import settings
from app.utils.prompt import SYSTEM_PROMPT

client = Groq(api_key=settings.GROQ_API_KEY)

async def generate_reply(message: str, history: list):
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    for msg in history:
        messages.append({
            "role": msg.role,
            "content": msg.content
        })

    messages.append({
        "role": "user",
        "content": message
    })

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant", 
        messages=messages,
        temperature=0.7,
    )

    return response.choices[0].message.content