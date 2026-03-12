'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push('/search?q=' + encodeURIComponent(query.trim()))
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Where do you want to go?"
          className="w-full px-4 md:px-6 py-3 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-gray-400 text-base md:text-lg focus:outline-none focus:border-orange-500 focus:bg-white/20 transition"
        />
        <button 
          type="submit"
          className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 px-4 md:px-6 py-2 md:py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition text-sm md:text-base"
        >
          Search
        </button>
      </div>
    </form>
  )
}
