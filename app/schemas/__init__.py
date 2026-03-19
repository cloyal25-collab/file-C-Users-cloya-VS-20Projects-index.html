from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class AthleteBase(BaseModel):
    name: str
    school: str
    grade: int
    events: List[str]

class AthleteCreate(AthleteBase):
    pass

class Athlete(AthleteBase):
    id: int
    personal_bests: dict[str, str]
    rank: int
    created_at: datetime

    class Config:
        from_attributes = True

class RaceBase(BaseModel):
    name: str
    date: datetime
    location: str
    distance: str

class RaceCreate(RaceBase):
    athlete_id: int
    time: str

class Race(RaceBase):
    id: int
    athlete_id: int
    time: str
    created_at: datetime

    class Config:
        from_attributes = True

class EventBase(BaseModel):
    name: str
    date: datetime
    location: str
    description: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class TeamBase(BaseModel):
    name: str
    school: str

class TeamCreate(TeamBase):
    pass

class Team(TeamBase):
    id: int
    athletes: List[Athlete]
    wins: int
    losses: int
    created_at: datetime

    class Config:
        from_attributes = True

class NewsArticleBase(BaseModel):
    title: str
    content: str
    author: str

class NewsArticleCreate(NewsArticleBase):
    pass

class NewsArticle(NewsArticleBase):
    id: int
    published_at: datetime
    created_at: datetime

    class Config:
        from_attributes = True
