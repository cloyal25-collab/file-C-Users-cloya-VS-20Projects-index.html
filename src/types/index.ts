export interface Athlete {
  id: string
  name: string
  school: string
  grade: number
  events: string[]
  personalBests: Record<string, string>
  rank: number
}

export interface Race {
  id: string
  name: string
  date: string
  location: string
  distance: string
  time: string
  athleteId: string
}

export interface Event {
  id: string
  name: string
  date: string
  location: string
  description: string
}

export interface Team {
  id: string
  name: string
  athletes: Athlete[]
  wins: number
  losses: number
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  author: string
  date: string
  image?: string
}
