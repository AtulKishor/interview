from pydantic import BaseModel
from typing import Optional
from uuid import UUID
from datetime import datetime


class CustomerCreate(BaseModel):
    full_name: str
    email: Optional[str] = None
    phone: Optional[str] = None


class CustomerRead(CustomerCreate):
    id: UUID
    created_at: datetime

    class Config:
        orm_mode = True
