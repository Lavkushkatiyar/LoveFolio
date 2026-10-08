from uuid import uuid4

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import Integer, String, Text

from app.db.base import Base
import uuid

class Profile(Base):
    __tablename__ = "profiles"

    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=lambda: str(uuid4()))

    name: Mapped[str] = mapped_column(String(100))
    title: Mapped[str] = mapped_column(String(150))
    subtitle: Mapped[str] = mapped_column(Text())

    avatar_url: Mapped[str | None] = mapped_column(Text())
    email: Mapped[str | None] = mapped_column(String(255))
    phone: Mapped[str | None] = mapped_column(String(30))
    location: Mapped[str | None] = mapped_column(String(150))

    github: Mapped[str | None] = mapped_column(Text())
    linkedin: Mapped[str | None] = mapped_column(Text())

    verified_skills_count: Mapped[int] = mapped_column(Integer())
    professional_projects: Mapped[int] = mapped_column(Integer())
    dsa_solved_count: Mapped[str] = mapped_column(String(50))
