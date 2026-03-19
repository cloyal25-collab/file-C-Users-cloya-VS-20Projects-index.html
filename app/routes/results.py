from fastapi import APIRouter
from typing import List
from datetime import datetime

router = APIRouter(prefix="/api/results", tags=["results"])

# Mock data
mock_results = [
    {
        "id": 1,
        "date": "2026-03-15T14:30:00",
        "event": "State Championships - 1600m",
        "winner": "Sarah Chen",
        "time": "4:52.30",
        "location": "Downtown Stadium"
    },
    {
        "id": 2,
        "date": "2026-03-10T13:00:00",
        "event": "Regional Meet - 4x400m",
        "winner": "Lincoln High Relay",
        "time": "3:28.45",
        "location": "Central Park"
    },
    {
        "id": 3,
        "date": "2026-03-05T15:15:00",
        "event": "Invitational - 800m",
        "winner": "Marcus Johnson",
        "time": "1:53.22",
        "location": "Washington High Track"
    }
]

@router.get("/", response_model=List[dict])
async def get_results():
    """Get all race results"""
    return mock_results

@router.get("/recent", response_model=List[dict])
async def get_recent_results(limit: int = 10):
    """Get recent race results"""
    return sorted(mock_results, key=lambda x: x["date"], reverse=True)[:limit]

@router.get("/{result_id}", response_model=dict)
async def get_result(result_id: int):
    """Get a specific race result"""
    for result in mock_results:
        if result["id"] == result_id:
            return result
    return {"error": "Result not found"}

@router.post("/", response_model=dict)
async def create_result(result: dict):
    """Create a new race result"""
    new_result = {
        "id": len(mock_results) + 1,
        **result
    }
    mock_results.append(new_result)
    return new_result
