import uuid
from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base

class Customer(Base):
    __tablename__ = "customers"

    id: Mapped[uuid.UUID] = mapped_column(
        primary_key=True,
        default=uuid.uuid4
    )
    full_name: Mapped[str] = mapped_column(
        String(255)
    )
    email: Mapped[str] = mapped_column(
        String(255),
        unique=True
    )
    phone: Mapped[str] = mapped_column(
        String(20)
    )