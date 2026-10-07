from uuid import uuid4

from sqlalchemy import JSON
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.types import Integer, String, Text

from app.db.base import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[str] = mapped_column(
        Integer, primary_key=True, index=True, default=uuid4
    )
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    date: Mapped[str] = mapped_column(String(50), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    bullet_intro: Mapped[str] = mapped_column(Text, nullable=False)
    bullets: Mapped[list[str]] = mapped_column(JSON, nullable=False)
    demo_url: Mapped[str | None] = mapped_column(String(200), nullable=True)
    github_url: Mapped[str | None] = mapped_column(String(200), nullable=True)
    image_url: Mapped[str | None] = mapped_column(String(200), nullable=True)
    featured_image_url: Mapped[str | None] = mapped_column(String(200), nullable=True)
    tech_stack: Mapped[list[str]] = mapped_column(JSON, nullable=False)
    more_tech_count: Mapped[str | None] = mapped_column(String(100), nullable=True)
    highlights: Mapped[list[str]] = mapped_column(JSON, nullable=False)
    completedModules: Mapped[list[str] | None] = mapped_column(JSON, nullable=True)
