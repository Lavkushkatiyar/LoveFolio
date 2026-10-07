from pydantic import BaseModel, ConfigDict


class SkillCreate(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    iconKey: str
    category: str

class SkillResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: str
    name: str
    iconKey: str
    category: str

    