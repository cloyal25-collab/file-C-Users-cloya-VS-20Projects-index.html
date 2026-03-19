from fastapi import APIRouter
from typing import List

router = APIRouter(prefix="/api/teams", tags=["teams"])

# Mock data
mock_teams = [
    {
        "id": 1,
        "name": "Lincoln High",
        "school": "Lincoln High School",
        "athletes": 24,
        "wins": 8,
        "losses": 2,
        "win_percentage": 80.0
    },
    {
        "id": 2,
        "name": "Central Prep",
        "school": "Central Preparatory Academy",
        "athletes": 22,
        "wins": 7,
        "losses": 3,
        "win_percentage": 70.0
    },
    {
        "id": 3,
        "name": "Washington High",
        "school": "Washington High School",
        "athletes": 20,
        "wins": 6,
        "losses": 4,
        "win_percentage": 60.0
    },
    {
        "id": 4,
        "name": "Roosevelt High",
        "school": "Roosevelt High School",
        "athletes": 18,
        "wins": 5,
        "losses": 5,
        "win_percentage": 50.0
    }
]

@router.get("/", response_model=List[dict])
async def get_teams():
    """Get all teams"""
    return sorted(mock_teams, key=lambda x: x["win_percentage"], reverse=True)

@router.get("/rankings", response_model=List[dict])
async def get_team_rankings():
    """Get team rankings by wins"""
    return sorted(mock_teams, key=lambda x: x["wins"], reverse=True)

@router.get("/{team_id}", response_model=dict)
async def get_team(team_id: int):
    """Get a specific team"""
    for team in mock_teams:
        if team["id"] == team_id:
            return team
    return {"error": "Team not found"}

@router.post("/", response_model=dict)
async def create_team(team: dict):
    """Create a new team"""
    new_team = {
        "id": len(mock_teams) + 1,
        "wins": 0,
        "losses": 0,
        "win_percentage": 0.0,
        **team
    }
    mock_teams.append(new_team)
    return new_team
