from sqlalchemy import Column, Integer, String, DateTime, Float, ForeignKey, Table, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

# Association table for many-to-many relationship between athletes and events
athlete_event = Table(
    'athlete_event',
    Base.metadata,
    Column('athlete_id', Integer, ForeignKey('athlete.id')),
    Column('event_id', Integer, ForeignKey('event.id'))
)

class Athlete(Base):
    __tablename__ = "athlete"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    school = Column(String)
    grade = Column(Integer)
    rank = Column(Integer)
    personal_bests = Column(String)  # JSON string
    created_at = Column(DateTime, default=datetime.utcnow)
    
    races = relationship("Race", back_populates="athlete")
    team_id = Column(Integer, ForeignKey("team.id"))
    team = relationship("Team", back_populates="athletes")

class Race(Base):
    __tablename__ = "race"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    date = Column(DateTime)
    location = Column(String)
    distance = Column(String)
    time = Column(String)
    athlete_id = Column(Integer, ForeignKey("athlete.id"))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    athlete = relationship("Athlete", back_populates="races")

class Event(Base):
    __tablename__ = "event"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    date = Column(DateTime)
    location = Column(String)
    description = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)

class Team(Base):
    __tablename__ = "team"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    school = Column(String)
    wins = Column(Integer, default=0)
    losses = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    athletes = relationship("Athlete", back_populates="team")

class NewsArticle(Base):
    __tablename__ = "news_article"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(Text)
    author = Column(String)
    published_at = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
