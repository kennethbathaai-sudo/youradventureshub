import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const continent = searchParams.get('continent')
  const difficulty = searchParams.get('difficulty')
  const featured = searchParams.get('featured')
  const limit = parseInt(searchParams.get('limit') || '50')
  const search = searchParams.get('search')

  let query = supabase
    .from('adventures')
    .select('*')
    .limit(limit)

  if (category) {
    query = query.eq('category', category)
  }
  if (continent) {
    query = query.eq('location_continent', continent.replace('-', ' '))
  }
  if (difficulty) {
    query = query.eq('difficulty', difficulty)
  }
  if (featured === 'true') {
    query = query.eq('featured', true)
  }
  if (search) {
    query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%,location_country.ilike.%${search}%`)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    count: data?.length || 0,
    adventures: data || []
  })
}
