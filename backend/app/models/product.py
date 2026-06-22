import uuid
from sqlalchemy import String, Integer, Numeric
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base

class Product(Base):
    __tablename__ = "products"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4
    )
    name: Mapped[str] = mapped_column(
        String(255)
    )
    sku: Mapped[str] = mapped_column(
        String(100),
        unique=True
    )
    price: Mapped[float] = mapped_column(
        Numeric(10, 2)
    )
    quantity: Mapped[int] = mapped_column(
        Integer,
        default=0
    )