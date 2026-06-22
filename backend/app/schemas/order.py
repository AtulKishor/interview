from pydantic import BaseModel
from typing import List, Optional
from uuid import UUID
from decimal import Decimal
from datetime import datetime


class OrderItemCreate(BaseModel):
    product_id: UUID
    quantity: int


class OrderCreate(BaseModel):
    customer_id: UUID
    items: List[OrderItemCreate]


class OrderItemRead(OrderItemCreate):
    id: UUID
    unit_price: Decimal
    subtotal: Decimal


class OrderRead(BaseModel):
    id: UUID
    customer_id: UUID
    total_amount: Decimal
    created_at: datetime
    items: List[OrderItemRead] = []

    class Config:
        orm_mode = True
