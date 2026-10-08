from uuid import uuid4

from sqlalchemy import JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base

class Experience(Base):
    __tablename__ = "experiences"
    id: Mapped[str] = mapped_column(
        String, primary_key=True, index=True, default=lambda: str(uuid4()))
    role: Mapped[str] = mapped_column(String(100), nullable=False)
    company: Mapped[str] = mapped_column(String(100), nullable=False)
    period: Mapped[str] = mapped_column(String(100), nullable=False)
    location: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    bullets: Mapped[list[str]] = mapped_column(JSON, nullable=False)
