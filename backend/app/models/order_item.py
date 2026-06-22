import uuid
from sqlalchemy import ForeignKey, Integer, Numeric
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base

class OrderItem(Base):
    __tablename__ = "order_items"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4
    )
    order_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("orders.id")
    )
    product_id: Mapped[uuid.UUID] = mapped_column(
        ForeignKey("products.id")
    )
    quantity: Mapped[int] = mapped_column(
        Integer
    )
    unit_price: Mapped[float] = mapped_column(
        Numeric(10, 2)
    )
    subtotal: Mapped[float] = mapped_column(
        Numeric(10, 2)
    )