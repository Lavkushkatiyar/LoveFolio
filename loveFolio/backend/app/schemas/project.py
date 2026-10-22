
import uuid

from typing import TypeAlias
from pydantic import BaseModel, ConfigDict


class TextSegments(BaseModel):
    text: str
    bold: bool = False


Bullet: TypeAlias = str | list[TextSegments]


class ProjectSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID | None = None
    title: str
    category: str
    date: str
    summary: str
    bullet_intro: str
    bullets: list[Bullet]
    demo_url: str | None
    github_url: str | None
    image_url: str | None
    featured_image_url: str | None
    tech_stack: list[str]
    more_tech_count: str | None
    highlights: list[str]
    completedModules: list[str] | None
