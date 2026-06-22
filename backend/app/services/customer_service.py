from sqlmodel import Session, select
from app.models.customer import Customer
from app.schemas.customer import CustomerCreate
from datetime import datetime
from uuid import UUID


def create_customer(session: Session, customer_in: CustomerCreate) -> Customer:
    customer = Customer(**customer_in.dict())
    session.add(customer)
    session.commit()
    session.refresh(customer)
    return customer


def get_customers(session: Session):
    return session.exec(select(Customer)).all()


def get_customer(session: Session, customer_id: UUID):
    return session.get(Customer, customer_id)


def update_customer(session: Session, customer_id: UUID, data: dict):
    customer = get_customer(session, customer_id)
    if not customer:
        return None
    for k, v in data.items():
        setattr(customer, k, v)
    session.add(customer)
    session.commit()
    session.refresh(customer)
    return customer


def delete_customer(session: Session, customer_id: UUID):
    customer = get_customer(session, customer_id)
    if not customer:
        return False
    session.delete(customer)
    session.commit()
    return True
