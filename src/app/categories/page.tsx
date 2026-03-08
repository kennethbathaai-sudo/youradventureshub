import Link from 'next/link'
import { CATEGORIES } from '@/lib/types'
import { allAdventures as ADVENTURES } from '@/lib/seed'

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Browse by <span className="text-orange-500">Category</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => {
            const count = ADVENTURES.filter(a => a.category === category.slug).length
            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1551632811-561732d1e306?w=600`}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-4xl mb-2">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-gray-400">{count} adventures</p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </div>
  )
}
