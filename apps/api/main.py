"""
Brasena API - Main Entry Point
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.config import settings
from src.routers import auth, products, orders, vendors, delivery, admin

app = FastAPI(
    title="Brasena API",
    version="0.1.0",
    description="Backend API for the Brasena bulk meat marketplace platform.",
    docs_url="/docs" if settings.env != "production" else None,
)

# ─── CORS ──────────────────────────────────────────────
# Allow requests from the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Routers ───────────────────────────────────────────
app.include_router(auth.router,     prefix="/api/v1/auth",     tags=["Auth"])
app.include_router(products.router, prefix="/api/v1/products",  tags=["Products"])
app.include_router(orders.router,   prefix="/api/v1/orders",    tags=["Orders"])
app.include_router(vendors.router,  prefix="/api/v1/vendors",   tags=["Vendors"])
app.include_router(delivery.router, prefix="/api/v1/delivery",  tags=["Delivery"])
app.include_router(admin.router,    prefix="/api/v1/admin",     tags=["Admin"])


@app.get("/health")
async def health_check():
    """Quick health check for load balancers and monitoring."""
    return {"status": "ok", "version": "0.1.0"}
