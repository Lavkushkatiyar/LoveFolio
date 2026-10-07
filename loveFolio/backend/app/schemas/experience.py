from pydantic import BaseModel, ConfigDict

class ExperienceCreate(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: str 
    role: str
    company: str
    period: str
    location: str
    description: str
    bullets: list[str]



class ExperienceResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    role: str
    company: str
    period: str
    location: str
    description: str
    bullets: list[str]