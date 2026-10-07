from uuid import uuid4

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import String

from app.db.base import Base


class Skill(Base):
    __tablename__ = "skills"
    id: Mapped[str] = mapped_column(String(36), primary_key=True,default=str(uuid4()))
    name: Mapped[str] = mapped_column(String(100))
    iconKey: Mapped[str] = mapped_column(String(100))
    category: Mapped[str] = mapped_column(String(100))
