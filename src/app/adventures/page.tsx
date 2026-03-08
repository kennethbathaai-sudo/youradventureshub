'use client'

import { useState } from 'react'
import Link from 'next/link'
import { allAdventures as ADVENTURES } from '@/lib/seed'
import { CATEGORIES } from '@/lib/types'
import { Adventure } from '@/lib/types'

export default function AdventuresPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [sort, setSort] = useState('featured')

  let filtered = [...ADVENTURES]

  if (search) {
    const q = search.toLowerCase()
    filtered = filtered.filter(a => 
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.location.country.toLowerCase().includes(q)
    )
  }

  if (category) {
    filtered = filtered.filter(a => a.category === category)
  }

  if (difficulty) {
    filtered = filtered.filter(a => a.difficulty === difficulty)
  }

  if (sort === 'price-low') {
    filtered.sort((a, b) => a.price_min - b.price_min)
  } else if (sort === 'price-high') {
    filtered.sort((a, b) => b.price_min - a.price_min)
  } else if (sort === 'featured') {
    filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-zinc-900 rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search adventures..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg focus:border-orange-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg focus:border-orange-500 outline-none"
              >
                <option value="">All Categories</option>
                {CATEGORIES.map(c => (
                  <option key={c.slug} value={c.slug}>{c.icon} {c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Difficulty</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg focus:border-orange-500 outline-none"
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="moderate">Moderate</option>
                <option value="hard">Hard</option>
                <option value="extreme">Extreme</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Sort By</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-zinc-700 rounded-lg focus:border-orange-500 outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-6">{filtered.length} adventures found</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((adventure) => (
            <Link
              key={adventure.id}
              href={`/adventures/${adventure.id}`}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={adventure.image_url} 
                  alt={adventure.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs px-2 py-1 rounded font-bold ${
                    adventure.difficulty === 'extreme' ? 'bg-red-500' :
                    adventure.difficulty === 'hard' ? 'bg-orange-500' :
                    adventure.difficulty === 'moderate' ? 'bg-yellow-500' :
                    'bg-green-500'
                  } text-white`}>
                    {adventure.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-orange-500 font-bold uppercase tracking-wider">
                  {adventure.category}
                </span>
                <h3 className="text-lg font-bold mt-1 group-hover:text-orange-500 transition">
                  {adventure.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {adventure.location.continent} • {adventure.location.country}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-400 text-sm">{adventure.duration}</span>
                  <span className="text-xl font-bold text-white">
                    ${adventure.price_min}+
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No adventures found matching your criteria.</p>
            <button 
              onClick={() => {setSearch(''); setCategory(''); setDifficulty('')}}
              className="mt-4 text-orange-500 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
