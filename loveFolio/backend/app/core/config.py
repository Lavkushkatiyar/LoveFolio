
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    DEBUG: bool | None = None
    DATABASE_URL: str = "sqlite+aiosqlite:///portfolio.db"
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
