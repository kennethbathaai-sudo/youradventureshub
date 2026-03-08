import { NextRequest, NextResponse } from 'next/server'
import { CATEGORIES } from '@/lib/types'
import { ADVENTURES } from '@/lib/seed'

export async function GET() {
  // Add counts to categories
  const categoriesWithCount = CATEGORIES.map(cat => ({
    ...cat,
    count: ADVENTURES.filter(a => a.category === cat.slug).length,
    adventures: ADVENTURES.filter(a => a.category === cat.slug).slice(0, 4)
  }))

  return NextResponse.json({ categories: categoriesWithCount })
}
