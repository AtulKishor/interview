from fastapi import APIRouter, Depends
from sqlmodel import Session
from app.core.database import get_session

router = APIRouter(prefix="/dashboard", tags=["dashboard"])

@router.get("/status")
def status(session: Session = Depends(get_session)):
    return {"status": "ok"}
