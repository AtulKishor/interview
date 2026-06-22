from pydantic import BaseModel, Field
from uuid import UUID

class ProductCreate(BaseModel):
    name: str = Field(min_length=1)
    sku: str = Field(min_length=1)
    price: float = Field(gt=0)
    quantity: int = Field(ge=0)

class ProductUpdate(BaseModel):
    name: str | None = None
    sku: str | None = None
    price: float | None = Field(default=None, gt=0)
    quantity: int | None = Field(default=None, ge=0)

class ProductResponse(ProductCreate):
    id: UUID
    class Config:
        from_attributes = True