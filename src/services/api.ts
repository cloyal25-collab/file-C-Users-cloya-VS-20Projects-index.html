import { Athlete, Race, Event, Team, NewsArticle } from '../types'

// Mock data - in production, this would call real APIs
const mockAthletes: Athlete[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    school: 'Lincoln High',
    grade: 12,
    events: ['1600m', '4x400m'],
    personalBests: { '1600m': '4:52.30', '4x400m': '3:28.45' },
    rank: 1
  },
  {
    id: '2',
    name: 'Emma Rodriguez',
    school: 'Central Prep',
    grade: 11,
    events: ['800m', '1600m'],
    personalBests: { '800m': '2:08.15', '1600m': '4:53.15' },
    rank: 2
  }
]

export const athleteService = {
  async getAthletes(): Promise<Athlete[]> {
    // In production: return fetch('/api/athletes').then(r => r.json())
    return new Promise(resolve => setTimeout(() => resolve(mockAthletes), 500))
  },

  async getAthleteById(id: string): Promise<Athlete | null> {
    const athlete = mockAthletes.find(a => a.id === id)
    return new Promise(resolve => setTimeout(() => resolve(athlete || null), 300))
  }
}

export const raceService = {
  async getRaces(): Promise<Race[]> {
    return new Promise(resolve => setTimeout(() => resolve([]), 500))
  }
}

export const eventService = {
  async getEvents(): Promise<Event[]> {
    return new Promise(resolve => setTimeout(() => resolve([]), 500))
  }
}

export const teamService = {
  async getTeams(): Promise<Team[]> {
    return new Promise(resolve => setTimeout(() => resolve([]), 500))
  }
}

export const newsService = {
  async getArticles(): Promise<NewsArticle[]> {
    return new Promise(resolve => setTimeout(() => resolve([]), 500))
  }
}
