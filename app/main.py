from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import athletes, results, calendar, teams, news

app = FastAPI(
    title="MileSplit API",
    description="Track & Field Hub API",
    version="1.0.0"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(athletes.router)
app.include_router(results.router)
app.include_router(calendar.router)
app.include_router(teams.router)
app.include_router(news.router)

@app.get("/")
async def root():
    return {
        "message": "Welcome to MileSplit API",
        "version": "1.0.0",
        "docs": "/docs",
        "endpoints": {
            "athletes": "/athletes",
            "results": "/results",
            "calendar": "/calendar",
            "teams": "/teams",
            "news": "/news"
        }
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="127.0.0.1",
        port=8000,
        reload=True
    )
