import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://hsoxzizegvidgzovkdzm.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhzb3h6aXplZ3ZpZGd6b3ZrZHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4Mzg5NjMsImV4cCI6MjA4ODQxNDk2M30.L9j5OJ_U8Hb5WjmB1SEnfjhqqir2q2cule3rKXj6RmE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface Profile {
  id: string
  email: string
  name: string
  avatar_url?: string
  bucket_list: string[]
  created_at: string
}

export interface Adventure {
  id: string
  title: string
  description: string
  category: string
  location_continent: string
  location_country: string
  location_region: string
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme'
  duration: string
  price_min: number
  price_max: number
  provider: string
  provider_url: string
  image_url: string
  featured: boolean
}

export interface Review {
  id: string
  adventure_id: string
  user_id: string
  user_name: string
  rating: number
  comment: string
  created_at: string
}
