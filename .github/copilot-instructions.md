# MileSplit API - Track & Field Backend Instructions

## Project Overview
A Python FastAPI backend for the MileSplit track and field platform. Provides REST API endpoints for athlete management, race results, events, teams, and news.

**Features:**
- Athlete Management & Leaderboards
- Race Results Tracking
- Event Calendar
- Team Statistics
- News Feed

## Setup Progress

- [x] Create copilot-instructions.md
- [x] Switched to Python backend
- [ ] Install Python dependencies
- [ ] Create virtual environment
- [ ] Run development server
- [ ] Test API endpoints

## Tech Stack
- **Framework:** FastAPI
- **Server:** Uvicorn
- **Database:** SQLite + SQLAlchemy ORM
- **Language:** Python 3.8+
- **Package Manager:** pip

## Development Commands
- `python -m venv venv` - Create virtual environment
- `pip install -r requirements.txt` - Install dependencies
- `uvicorn app.main:app --reload` - Start development server
- Interactive docs: http://localhost:8000/docs

## Project Structure
```
milesplit-api/
├── app/
│   ├── main.py              # Application entry point
│   ├── models/              # Database models
│   ├── routes/              # API endpoints
│   │   ├── athletes.py
│   │   ├── results.py
│   │   ├── calendar.py
│   │   ├── teams.py
│   │   └── news.py
│   ├── schemas/             # Pydantic schemas
│   └── database/            # Database config
├── requirements.txt         # Python dependencies
├── README.md
└── SETUP.md
```
