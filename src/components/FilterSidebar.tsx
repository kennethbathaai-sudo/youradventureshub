'use client'

import { CATEGORIES, CONTINENTS } from '@/lib/types'

interface FilterSidebarProps {
  selectedCategory: string
  selectedContinent: string
  selectedDifficulty: string
  onCategoryChange: (category: string) => void
  onContinentChange: (continent: string) => void
  onDifficultyChange: (difficulty: string) => void
  onClear: () => void
}

export function FilterSidebar({
  selectedCategory,
  selectedContinent,
  selectedDifficulty,
  onCategoryChange,
  onContinentChange,
  onDifficultyChange,
  onClear,
}: FilterSidebarProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-white">Filters</h3>
        <button 
          onClick={onClear}
          className="text-sm text-orange-500 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-sm font-bold text-gray-400 mb-3">Category</h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.slug}
                onChange={() => onCategoryChange(cat.slug)}
                className="w-4 h-4 text-orange-500 bg-zinc-800 border-zinc-700"
              />
              <span className="text-gray-300">{cat.icon} {cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h4 className="text-sm font-bold text-gray-400 mb-3">Difficulty</h4>
        <div className="space-y-2">
          {['easy', 'moderate', 'hard', 'extreme'].map((diff) => (
            <label key={diff} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                checked={selectedDifficulty === diff}
                onChange={() => onDifficultyChange(diff)}
                className="w-4 h-4 text-orange-500 bg-zinc-800 border-zinc-700"
              />
              <span className="text-gray-300 capitalize">{diff}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Continent */}
      <div>
        <h4 className="text-sm font-bold text-gray-400 mb-3">Continent</h4>
        <div className="space-y-2">
          {CONTINENTS.map((cont) => (
            <label key={cont} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="continent"
                checked={selectedContinent === cont.toLowerCase().replace(' ', '-')}
                onChange={() => onContinentChange(cont.toLowerCase().replace(' ', '-'))}
                className="w-4 h-4 text-orange-500 bg-zinc-800 border-zinc-700"
              />
              <span className="text-gray-300">{cont}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
