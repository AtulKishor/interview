from uuid import UUID
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.schemas.product import (
    ProductCreate,
    ProductUpdate,
    ProductResponse
)
from app.services import product_service

router = APIRouter(prefix="/products", tags=["Products"])


@router.post(
    "",
    response_model=ProductResponse,
    status_code=status.HTTP_201_CREATED
)
def create_product(payload: ProductCreate, db: Session = Depends(get_db)):
    return product_service.create_product(db, payload)


@router.get(
    "",
    response_model=list[ProductResponse]
)
def get_products(db: Session = Depends(get_db)):
    return product_service.get_products(db)


@router.get(
    "/{product_id}",
    response_model=ProductResponse
)
def get_product(product_id: UUID, db: Session = Depends(get_db)):
    return product_service.get_product(db, product_id)


@router.put(
    "/{product_id}",
    response_model=ProductResponse
)
def update_product(product_id: UUID, payload: ProductUpdate, db: Session = Depends(get_db)):
    return product_service.update_product(db, product_id, payload)


@router.delete(
    "/{product_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_product(product_id: UUID, db: Session = Depends(get_db)):
    product_service.delete_product(db, product_id)

