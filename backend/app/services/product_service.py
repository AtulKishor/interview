from uuid import UUID

from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate

def create_product(db: Session, payload: ProductCreate) -> Product:
    existing = db.scalar(
        select(Product).where(
            Product.sku == payload.sku
        )
    )
    if existing:
        raise HTTPException(
            status_code=409,
            detail="SKU already exists"
        )

    product = Product(**payload.model_dump())
    db.add(product)
    db.commit()
    db.refresh(product)
    return product

def get_products(db: Session) -> list[Product]:
    return db.scalars(select(Product)).all()

def get_product(db: Session, product_id: UUID) -> Product:
    product = db.get(Product, product_id)
    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )
    return product

def update_product(db: Session, product_id: UUID, payload: ProductUpdate) -> Product:
    product = get_product(db, product_id)
    updates = payload.model_dump(exclude_unset=True)
    if "sku" in updates:
        existing = db.scalar(
            select(Product).where(
                Product.sku == updates["sku"],
                Product.id != product_id
            )
        )
        if existing:
            raise HTTPException(status_code=409, detail="SKU already exists")

    for key, value in updates.items():
        setattr(product, key, value)
    db.commit()
    db.refresh(product)
    return product

def delete_product(db: Session, product_id: UUID) -> None:
    product = get_product(db, product_id)
    db.delete(product)
    db.commit()
