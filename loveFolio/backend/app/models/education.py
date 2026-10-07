from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Education(Base):
    __tablename__ = "education"
    id: Mapped[str] = mapped_column(String, primary_key=True, index=True)
    degree: Mapped[str] = mapped_column(String)
    institution: Mapped[str] = mapped_column(String)
    period: Mapped[str] = mapped_column(String)
    location: Mapped[str] = mapped_column(String)
    grade: Mapped[str] = mapped_column(String)
    description: Mapped[str] = mapped_column(String)
