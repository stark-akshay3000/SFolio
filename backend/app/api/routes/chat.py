from fastapi import APIRouter
from app.models.chat import ChatRequest, ChatResponse
from app.services.llm_service import generate_reply

router = APIRouter()

@router.post("/", response_model=ChatResponse)
async def chat(req: ChatRequest):
    reply = await generate_reply(req.message, req.history)
    return {"reply": reply}