from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.education import router as education_router
from app.api.experience import router as experience_router
from app.api.profile import router as profile_router
from app.api.project import router as project_router
from app.api.skill import router as skill_router

app = FastAPI(name="backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profile_router, tags=["Profiles"])
app.include_router(skill_router, tags=["Skills"])
app.include_router(experience_router, tags=["Experiences"])
app.include_router(education_router, tags=["Educations"])
app.include_router(project_router, tags=["Projects"])


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/health")
def healthcheck():
    return {"status": "ok"}
