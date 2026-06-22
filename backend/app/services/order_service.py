from sqlmodel import Session, select
from app.models.order import Order
from app.models.order_item import OrderItem
from app.models.product import Product
from app.schemas.order import OrderCreate
from decimal import Decimal
from uuid import UUID


def create_order(session: Session, order_in: OrderCreate) -> Order:
    order = Order(customer_id=order_in.customer_id, total_amount=Decimal(0))
    session.add(order)
    session.commit()
    session.refresh(order)
    total = Decimal(0)
    for it in order_in.items:
        product = session.get(Product, it.product_id)
        unit_price = product.price if product is not None else Decimal(0)
        subtotal = unit_price * it.quantity
        oi = OrderItem(order_id=order.id, product_id=it.product_id, quantity=it.quantity, unit_price=unit_price, subtotal=subtotal)
        session.add(oi)
        total += subtotal
    order.total_amount = total
    session.add(order)
    session.commit()
    session.refresh(order)
    return order


def get_orders(session: Session):
    return session.exec(select(Order)).all()


def get_order(session: Session, order_id: UUID):
    order = session.get(Order, order_id)
    if not order:
        return None
    # attach items
    items = session.exec(select(OrderItem).where(OrderItem.order_id == order.id)).all()
    order.items = items
    return order
