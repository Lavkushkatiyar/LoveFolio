from pydantic import BaseModel, ConfigDict


class ProfileResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    name: str
    title: str
    subtitle: str
    avatar_url: str
    email: str
    phone: str
    location: str
    github: str
    linkedin: str
    verified_skills_count: int
    professional_projects: int
    dsa_solved_count: str


class ProfileUpdate(BaseModel):
    name: str | None = None
    title: str | None = None
    subtitle: str | None = None
    avatar_url: str | None = None
    email: str | None = None
    phone: str | None = None
    location: str | None = None
    github: str | None = None
    linkedin: str | None = None
    verified_skills_count: int | None = None
    professional_projects: int | None = None
    dsa_solved_count: str | None = None
