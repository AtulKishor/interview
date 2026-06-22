from fastapi import FastAPI
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.core.logger import logger
from app.api.products import router as product_router

app = FastAPI(
    title=settings.APP_NAME,
    description="A Production-Ready Containerized Inventory & Order Management System"
)

app.include_router(product_router)

@app.get("/health")
def health():
    logger.info(f"App health check called.")
    return {"status": "healthy"}

@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    logger.error(f"Global error occured. Error: {exc}")
    return JSONResponse(
        status_code=500,
        content={
            "error":"Internal server error"
        }
    )
