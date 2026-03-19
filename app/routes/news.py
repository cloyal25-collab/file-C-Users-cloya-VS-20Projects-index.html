from fastapi import APIRouter
from typing import List

router = APIRouter(prefix="/api/news", tags=["news"])

# Mock data
mock_news = [
    {
        "id": 1,
        "title": "Sarah Chen Breaks State Record in Mile",
        "content": "Lincoln High standout Sarah Chen set a new state record in the indoor mile with a time of 4:52.30, breaking the previous record of 4:54.15.",
        "author": "Sports Editor",
        "published_at": "2026-03-16T10:30:00",
        "created_at": "2026-03-16T10:30:00"
    },
    {
        "id": 2,
        "title": "Spring Invitational Draws Top Programs",
        "content": "Over 500 athletes from 30 schools are set to compete in this year's Spring Invitational, featuring some of the nation's top high school runners.",
        "author": "Event Reporter",
        "published_at": "2026-03-14T14:15:00",
        "created_at": "2026-03-14T14:15:00"
    },
    {
        "id": 3,
        "title": "New Training Program Shows Promise",
        "content": "Several teams report improved performance after implementing new high-altitude training methods developed by collegiate coaches.",
        "author": "Coach Insights",
        "published_at": "2026-03-12T09:00:00",
        "created_at": "2026-03-12T09:00:00"
    },
    {
        "id": 4,
        "title": "Regional Rankings Updated",
        "content": "After last weekend's competitions, regional rankings have been updated for all events. Sarah Chen and Emma Rodriguez maintain their top spots.",
        "author": "Rankings Editor",
        "published_at": "2026-03-10T16:45:00",
        "created_at": "2026-03-10T16:45:00"
    }
]

@router.get("/", response_model=List[dict])
async def get_news():
    """Get all news articles"""
    return sorted(mock_news, key=lambda x: x["published_at"], reverse=True)

@router.get("/latest", response_model=List[dict])
async def get_latest_news(limit: int = 5):
    """Get latest news articles"""
    return sorted(mock_news, key=lambda x: x["published_at"], reverse=True)[:limit]

@router.get("/{article_id}", response_model=dict)
async def get_news_article(article_id: int):
    """Get a specific news article"""
    for article in mock_news:
        if article["id"] == article_id:
            return article
    return {"error": "Article not found"}

@router.post("/", response_model=dict)
async def create_news_article(article: dict):
    """Create a new news article"""
    from datetime import datetime
    new_article = {
        "id": len(mock_news) + 1,
        "published_at": datetime.utcnow().isoformat(),
        "created_at": datetime.utcnow().isoformat(),
        **article
    }
    mock_news.append(new_article)
    return new_article
