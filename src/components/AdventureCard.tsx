'use client'

import Link from 'next/link'
import { Adventure } from '@/lib/types'

interface AdventureCardProps {
  adventure: Adventure
  showActions?: boolean
}

export function AdventureCard({ adventure, showActions = false }: AdventureCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'extreme': return 'bg-red-500'
      case 'hard': return 'bg-orange-500'
      case 'moderate': return 'bg-yellow-500'
      default: return 'bg-green-500'
    }
  }

  return (
    <div className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/10">
      <Link href={`/adventures/${adventure.id}`}>
        <div className="aspect-[16/10] relative overflow-hidden">
          <img 
            src={adventure.image_url} 
            alt={adventure.title}
            className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <span className={`text-xs px-2 py-1 rounded font-bold ${getDifficultyColor(adventure.difficulty)} text-white`}>
              {adventure.difficulty}
            </span>
            {adventure.featured && (
              <span className="text-xs px-2 py-1 rounded font-bold bg-orange-500 text-white">
                Featured
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link href={`/categories/${adventure.category}`}>
          <span className="text-xs text-orange-500 font-bold uppercase tracking-wider hover:underline">
            {adventure.category}
          </span>
        </Link>
        
        <Link href={`/adventures/${adventure.id}`}>
          <h3 className="text-lg font-bold mt-1 group-hover:text-orange-500 transition line-clamp-1">
            {adventure.title}
          </h3>
        </Link>
        
        <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
          <span>📍</span>
          {adventure.location.country}, {adventure.location.continent}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <span>⏱️</span>
            {adventure.duration}
          </span>
          <span className="text-xl font-bold text-white">
            ${adventure.price_min}+
          </span>
        </div>

        {showActions && (
          <div className="flex gap-2 mt-4 pt-4 border-t border-zinc-800">
            <button className="flex-1 px-3 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition text-sm">
              ❤️ Save
            </button>
            <Link 
              href={`/adventures/${adventure.id}`}
              className="flex-1 px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm text-center"
            >
              View Details
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
