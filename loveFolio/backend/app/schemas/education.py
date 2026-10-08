from pydantic import BaseModel, ConfigDict
import uuid

class EducationSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID| None = None
    degree: str
    institution: str
    period: str
    location: str
    grade: str
    description: str | None = None
