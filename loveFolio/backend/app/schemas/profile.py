from pydantic import BaseModel, ConfigDict


class ProfileStats(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    verified_skills_count: int
    professional_projects: int
    dsa_solved_count: str

class ProfileResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name:str
    title: str
    subtitle: str
    avatar_url: str
    email: str
    phone: str
    location: str
    github: str
    linkedin: str
    stats : ProfileStats


    