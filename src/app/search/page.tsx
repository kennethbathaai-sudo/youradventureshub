import Link from 'next/link'
import { searchAdventures } from '@/lib/seed'
import { CATEGORIES } from '@/lib/types'

export const dynamic = 'force-dynamic'

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || ''
  const results = query ? searchAdventures(query) : []

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          {query ? `Results for "${query}"` : 'Search Adventures'}
        </h1>
        
        {!query && (
          <p className="text-gray-400">Enter a search term to find adventures</p>
        )}
        
        {query && results.length === 0 && (
          <p className="text-gray-400">No adventures found for "{query}"</p>
        )}
        
        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((adventure) => (
              <Link 
                key={adventure.id}
                href={`/adventures/${adventure.id}`}
                className="block bg-zinc-900 rounded-2xl overflow-hidden hover:border-orange-500 border border-zinc-800 transition"
              >
                <div className="aspect-video bg-zinc-800">
                  {adventure.image_url && (
                    <img 
                      src={adventure.image_url} 
                      alt={adventure.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{adventure.title}</h3>
                  <p className="text-gray-400 text-sm">{adventure.location.region}, {adventure.location.country}</p>
                  <p className="text-orange-500 mt-2">${adventure.price_min} - ${adventure.price_max}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
