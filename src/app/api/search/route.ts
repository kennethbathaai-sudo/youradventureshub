import { NextRequest, NextResponse } from 'next/server'
import { searchAdventures, ADVENTURES } from '@/lib/seed'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const q = searchParams.get('q') || ''
  const limit = parseInt(searchParams.get('limit') || '20')

  if (!q) {
    return NextResponse.json({ results: [], total: 0 })
  }

  const results = searchAdventures(q).slice(0, limit)

  return NextResponse.json({
    query: q,
    total: results.length,
    results
  })
}
