"""
Application configuration loaded from environment variables.

Why pydantic-settings:
Pydantic validates every env var at startup. If SUPABASE_URL is missing,
the app crashes immediately with a clear error instead of failing
silently in production when someone tries to query the database.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=False,
    )

    # App
    env: str = "development"
    secret_key: str
    cors_origins: List[str] = ["http://localhost:3000"]

    # Supabase
    supabase_url: str
    supabase_anon_key: str
    supabase_service_role_key: str  # server-side only, never expose to client

    # Database (direct Postgres connection for migrations/queries)
    database_url: str

    # Stripe
    stripe_secret_key: str
    stripe_webhook_secret: str

    # Twilio (SMS notifications)
    twilio_account_sid: str
    twilio_auth_token: str
    twilio_phone_number: str

    # SendGrid (email)
    sendgrid_api_key: str
    sendgrid_from_email: str = "orders@brasena.com"

    # Delivery APIs
    uber_direct_client_id: str = ""
    uber_direct_client_secret: str = ""
    doordash_developer_id: str = ""
    doordash_key_id: str = ""
    doordash_signing_secret: str = ""

    # Redis (for task queue)
    redis_url: str = "redis://localhost:6379"


# Single instance imported everywhere
# `from src.config import settings`
settings = Settings()
