import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATEGORIES } from '@/lib/types'
import { getAdventuresByCategory } from '@/lib/seed'

export function generateStaticParams() {
  return CATEGORIES.map(cat => ({ slug: cat.slug }))
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = CATEGORIES.find(c => c.slug === slug)
  
  if (!category) {
    notFound()
  }

  const adventures = getAdventuresByCategory(slug)

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
        <div className="text-center mb-12">
          <span className="text-6xl block mb-4">{category.icon}</span>
          <h1 className="text-4xl font-bold">{category.name}</h1>
          <p className="text-gray-400 mt-2">{adventures.length} adventures available</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((adventure) => (
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

        {adventures.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">No adventures in this category yet.</p>
          </div>
        )}
      </main>
    </div>
  )
}
