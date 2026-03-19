# MileSplit API - Track & Field Backend

A Python FastAPI backend for the MileSplit track and field platform. This API provides endpoints for managing athletes, race results, events, teams, and news.

## Features

- **Athlete Management** - Create and manage athlete profiles with personal bests
- **Race Results** - Track and query race results
- **Event Calendar** - Manage track meets and events
- **Team Tracking** - Track team records and statistics
- **News Feed** - Publish and retrieve track & field news

## Tech Stack

- **Framework:** FastAPI
- **Server:** Uvicorn
- **Database:** SQLite (with SQLAlchemy ORM)
- **Language:** Python 3.8+

## Installation

1. **Create a virtual environment:**
```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

## Running the Server

```bash
uvicorn app.main:app --reload
```

The API will be available at:
- **Base URL:** http://localhost:8000
- **Interactive Docs:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

## API Endpoints

### Athletes
- `GET /api/athletes` - Get all athletes
- `GET /api/athletes/{id}` - Get specific athlete
- `POST /api/athletes` - Create new athlete
- `GET /api/athletes/leaderboard/top10` - Get top 10 athletes

### Race Results
- `GET /api/results` - Get all results
- `GET /api/results/recent` - Get recent results
- `GET /api/results/{id}` - Get specific result
- `POST /api/results` - Create new result

### Calendar
- `GET /api/calendar` - Get all events
- `GET /api/calendar/upcoming` - Get upcoming events
- `GET /api/calendar/{id}` - Get specific event
- `POST /api/calendar` - Create new event

### Teams
- `GET /api/teams` - Get all teams
- `GET /api/teams/rankings` - Get team rankings
- `GET /api/teams/{id}` - Get specific team
- `POST /api/teams` - Create new team

### News
- `GET /api/news` - Get all news
- `GET /api/news/latest` - Get latest news
- `GET /api/news/{id}` - Get specific article
- `POST /api/news` - Create new article

## Project Structure

```
milesplit-api/
├── app/
│   ├── main.py              # Application entry point
│   ├── models/
│   │   ├── __init__.py
│   │   └── athlete.py       # Database models
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── athletes.py
│   │   ├── results.py
│   │   ├── calendar.py
│   │   ├── teams.py
│   │   └── news.py
│   ├── schemas/
│   │   └── __init__.py      # Pydantic schemas
│   ├── database/
│   │   ├── __init__.py
│   │   └── db.py            # Database configuration
│   └── __init__.py
├── requirements.txt         # Python dependencies
├── SETUP.md                # Setup instructions
└── milesplit.db            # SQLite database (created at runtime)
```

## Development

### Adding a New Endpoint

1. Create a new router in `app/routes/`
2. Define Pydantic schemas in `app/schemas/`
3. Include the router in `app/main.py`

Example:
```python
from fastapi import APIRouter

router = APIRouter(prefix="/api/endpoint", tags=["endpoint"])

@router.get("/")
async def get_data():
    return {"data": "value"}
```

## Testing the API

Use FastAPI's interactive documentation at http://localhost:8000/docs to test endpoints, or use curl:

```bash
# Get all athletes
curl http://localhost:8000/api/athletes

# Create new athlete
curl -X POST http://localhost:8000/api/athletes \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","school":"HS","grade":12,"events":["1600m"]}'
```

## Next Steps

- Implement database persistence instead of mock data
- Add user authentication
- Add filtering and pagination
- Implement data validation
- Add comprehensive error handling
- Deploy to production

---

Built with ❤️ for the track and field community
