from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas import Athlete, AthleteCreate

router = APIRouter(prefix="/api/athletes", tags=["athletes"])

# Mock data for demonstration
mock_athletes = [
    {
        "id": 1,
        "name": "Sarah Chen",
        "school": "Lincoln High",
        "grade": 12,
        "events": ["1600m", "4x400m"],
        "personal_bests": {"1600m": "4:52.30", "4x400m": "3:28.45"},
        "rank": 1,
        "created_at": "2026-01-01T00:00:00"
    },
    {
        "id": 2,
        "name": "Emma Rodriguez",
        "school": "Central Prep",
        "grade": 11,
        "events": ["800m", "1600m"],
        "personal_bests": {"800m": "2:08.15", "1600m": "4:53.15"},
        "rank": 2,
        "created_at": "2026-01-01T00:00:00"
    },
    {
        "id": 3,
        "name": "Jessica Park",
        "school": "Washington High",
        "grade": 12,
        "events": ["1600m", "3200m"],
        "personal_bests": {"1600m": "4:54.02", "3200m": "10:15.33"},
        "rank": 3,
        "created_at": "2026-01-01T00:00:00"
    }
]

@router.get("/", response_model=List[dict])
async def get_athletes():
    """Get all athletes"""
    return mock_athletes

@router.get("/{athlete_id}", response_model=dict)
async def get_athlete(athlete_id: int):
    """Get a specific athlete by ID"""
    for athlete in mock_athletes:
        if athlete["id"] == athlete_id:
            return athlete
    raise HTTPException(status_code=404, detail="Athlete not found")

@router.post("/", response_model=dict)
async def create_athlete(athlete: AthleteCreate):
    """Create a new athlete"""
    new_athlete = {
        "id": len(mock_athletes) + 1,
        "name": athlete.name,
        "school": athlete.school,
        "grade": athlete.grade,
        "events": athlete.events,
        "personal_bests": {},
        "rank": len(mock_athletes) + 1,
        "created_at": "2026-03-18T00:00:00"
    }
    mock_athletes.append(new_athlete)
    return new_athlete

@router.get("/leaderboard/top10", response_model=List[dict])
async def get_top_athletes():
    """Get top 10 athletes by rank"""
    return sorted(mock_athletes, key=lambda x: x["rank"])[:10]
