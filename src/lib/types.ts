export const CATEGORIES = [
  { id: 'hiking', name: 'Hiking & Trekking', icon: '🥾', slug: 'hiking', count: 10 },
  { id: 'running', name: 'Running & Races', icon: '🏃', slug: 'running', count: 8 },
  { id: 'diving', name: 'Diving & Snorkeling', icon: '🤿', slug: 'diving', count: 9 },
  { id: 'skydiving', name: 'Skydiving', icon: '🪂', slug: 'skydiving', count: 5 },
  { id: 'climbing', name: 'Climbing', icon: '🧗', slug: 'climbing', count: 5 },
  { id: 'wildlife', name: 'Wildlife & Safari', icon: '🦁', slug: 'wildlife', count: 9 },
  { id: 'water', name: 'Water Sports', icon: '🏄', slug: 'water', count: 9 },
  { id: 'cycling', name: 'Cycling', icon: '🚴', slug: 'cycling', count: 3 },
  { id: 'extreme', name: 'Extreme Sports', icon: '🔥', slug: 'extreme', count: 12 },
  { id: 'flying', name: 'Flying Experiences', icon: '✈️', slug: 'flying', count: 5 },
  { id: 'skiing', name: 'Skiing & Snowboarding', icon: '⛷️', slug: 'skiing', count: 3 },
  { id: 'unique', name: 'Unique Stays', icon: '🏨', slug: 'unique', count: 6 },
]

export const CONTINENTS = [
  'Africa', 'Antarctica', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'
]

export interface Location {
  continent: string
  country: string
  region: string
}

export interface Adventure {
  id: string
  title: string
  description: string
  category: string
  location: Location
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme'
  duration: string
  price_min: number
  price_max: number
  provider: string
  provider_url: string
  image_url: string
  featured: boolean
}
