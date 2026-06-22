def create(order: OrderCreate, session: Session = Depends(get_session)):
def list_orders(session: Session = Depends(get_session)):
def read_order(order_id: int, session: Session = Depends(get_session)):
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from uuid import UUID
from sqlmodel import Session
from app.schemas.order import OrderCreate, OrderRead
from app.services.order_service import create_order, get_orders, get_order
from app.core.database import get_session

router = APIRouter(prefix="/orders", tags=["orders"])


@router.post("/", response_model=OrderRead)
def create(order: OrderCreate, session: Session = Depends(get_session)):
    return create_order(session, order)


@router.get("/", response_model=List[OrderRead])
def list_orders(session: Session = Depends(get_session)):
    return get_orders(session)


@router.get("/{order_id}", response_model=OrderRead)
def read_order(order_id: UUID, session: Session = Depends(get_session)):
    db = get_order(session, order_id)
    if not db:
        raise HTTPException(status_code=404, detail="Order not found")
    return db
