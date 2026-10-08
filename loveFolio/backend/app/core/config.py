from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings loaded from environment variables."""

    DEBUG: bool | None = None
    DATABASE_URL: str = "sqlite+aiosqlite:///portfolio.db"
    ADMIN_KEY: str = "MY_ADMIN_KEY"
    CORS_ORIGINS: str = "http://localhost:5173"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
