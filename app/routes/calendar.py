from fastapi import APIRouter
from typing import List
from datetime import datetime

router = APIRouter(prefix="/api/calendar", tags=["calendar"])

# Mock data
mock_events = [
    {
        "id": 1,
        "date": "2026-03-20T09:00:00",
        "name": "Spring Invitational",
        "location": "Lincoln High Track",
        "description": "Annual spring track meet with teams from across the state"
    },
    {
        "id": 2,
        "date": "2026-03-27T09:00:00",
        "name": "Regional Championships",
        "location": "Central Park",
        "description": "Regional qualifying meet"
    },
    {
        "id": 3,
        "date": "2026-04-03T09:00:00",
        "name": "State Qualifiers",
        "location": "Downtown Stadium",
        "description": "Final chance to qualify for state championships"
    },
    {
        "id": 4,
        "date": "2026-04-10T09:00:00",
        "name": "State Championships",
        "location": "Olympic Park",
        "description": "State-level competition"
    }
]

@router.get("/", response_model=List[dict])
async def get_calendar():
    """Get all calendar events"""
    return sorted(mock_events, key=lambda x: x["date"])

@router.get("/upcoming", response_model=List[dict])
async def get_upcoming_events(limit: int = 10):
    """Get upcoming calendar events"""
    sorted_events = sorted(mock_events, key=lambda x: x["date"])
    return sorted_events[:limit]

@router.get("/{event_id}", response_model=dict)
async def get_calendar_event(event_id: int):
    """Get a specific calendar event"""
    for event in mock_events:
        if event["id"] == event_id:
            return event
    return {"error": "Event not found"}

@router.post("/", response_model=dict)
async def create_event(event: dict):
    """Create a new calendar event"""
    new_event = {
        "id": len(mock_events) + 1,
        **event
    }
    mock_events.append(new_event)
    return new_event
