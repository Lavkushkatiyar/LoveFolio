from pydantic import BaseModel, ConfigDict



class EducationSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str
    degree: str
    institution: str
    period: str
    location: str
    grade: str
    description: str | None = None