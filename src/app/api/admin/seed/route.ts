import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { ADVENTURES } from '@/lib/seed'

export async function POST() {
  // Clear existing adventures
  await supabase.from('adventures').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  // Insert all adventures
  const adventuresToInsert = ADVENTURES.map(a => ({
    title: a.title,
    description: a.description,
    category: a.category,
    location_continent: a.location.continent,
    location_country: a.location.country,
    location_region: a.location.region,
    difficulty: a.difficulty,
    duration: a.duration,
    price_min: a.price_min,
    price_max: a.price_max,
    provider: a.provider,
    provider_url: a.provider_url,
    image_url: a.image_url,
    featured: a.featured,
  }))

  const { data, error } = await supabase
    .from('adventures')
    .insert(adventuresToInsert)
    .select()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ 
    message: 'Seed completed', 
    inserted: data?.length || 0 
  })
}
