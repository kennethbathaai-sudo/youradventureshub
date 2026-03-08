'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ADVENTURES, searchAdventures } from '@/lib/seed'
import { CATEGORIES } from '@/lib/types'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<any[]>([])
  const [search, setSearch] = useState(query)

  useEffect(() => {
    if (query) {
      setResults(searchAdventures(query))
    } else {
      setResults([])
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/search?q=${encodeURIComponent(search)}`
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search adventures, locations, activities..."
              className="flex-1 px-6 py-4 bg-zinc-900 border border-zinc-700 rounded-xl text-lg focus:border-orange-500 outline-none"
            />
            <button type="submit" className="px-8 py-4 bg-orange-500 font-bold rounded-xl hover:bg-orange-600">
              Search
            </button>
          </div>
        </form>

        {query && (
          <p className="text-gray-400 mb-6">{results.length} results for "{query}"</p>
        )}

        <div className="grid gap-4">
          {results.map((adventure) => (
            <Link
              key={adventure.id}
              href={`/adventures/${adventure.id}`}
              className="flex gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-orange-500 transition"
            >
              <img 
                src={adventure.image_url} 
                alt={adventure.title}
                className="w-32 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <span className="text-xs text-orange-500 font-bold uppercase">{adventure.category}</span>
                <h3 className="text-lg font-bold">{adventure.title}</h3>
                <p className="text-gray-400 text-sm">{adventure.location.continent} • {adventure.location.country}</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-orange-500">${adventure.price_min}+</span>
              </div>
            </Link>
          ))}
        </div>

        {query && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">No adventures found for "{query}"</p>
            <p className="text-gray-500 mt-2">Try searching for hiking, diving, running, or a country name</p>
          </div>
        )}

        {!query && (
          <div className="text-center py-12">
            <p className="text-gray-400">Enter a search term to find adventures</p>
          </div>
        )}
      </main>
    </div>
  )
}
