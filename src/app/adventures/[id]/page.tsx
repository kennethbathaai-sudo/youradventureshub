import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAdventureById, allAdventures as ADVENTURES } from '@/lib/seed'
import { CATEGORIES } from '@/lib/types'
import { getGearForCategory, AFFILIATES } from '@/lib/affiliates'

export function generateStaticParams() {
  return ADVENTURES.map((adventure) => ({
    id: adventure.id,
  }))
}

export default async function AdventurePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const adventure = getAdventureById(id)
  
  if (!adventure) {
    notFound()
  }

  const category = CATEGORIES.find(c => c.slug === adventure.category)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh]">
          <img 
            src={adventure.image_url} 
            alt={adventure.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-6xl mx-auto">
              <Link href={`/categories/${adventure.category}`} className="text-orange-500 font-bold uppercase tracking-wider hover:underline">
                {category?.name || adventure.category}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">{adventure.title}</h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-xl text-gray-300 leading-relaxed">
                {adventure.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                  <span className="block text-xs text-gray-500">Difficulty</span>
                  <span className={`font-bold ${
                    adventure.difficulty === 'extreme' ? 'text-red-500' :
                    adventure.difficulty === 'hard' ? 'text-orange-500' :
                    adventure.difficulty === 'moderate' ? 'text-yellow-500' :
                    'text-green-500'
                  }`}>
                    {adventure.difficulty.charAt(0).toUpperCase() + adventure.difficulty.slice(1)}
                  </span>
                </div>
                <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                  <span className="block text-xs text-gray-500">Duration</span>
                  <span className="font-bold">{adventure.duration}</span>
                </div>
                <div className="bg-zinc-900 px-4 py-2 rounded-lg">
                  <span className="block text-xs text-gray-500">Location</span>
                  <span className="font-bold">{adventure.location.country}</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">About This Adventure</h2>
              <p className="text-gray-300 leading-relaxed">
                {adventure.description}
              </p>
              <p className="text-gray-400 mt-4">
                This adventure is offered by <strong>{adventure.provider}</strong>. 
                Prices start at ${adventure.price_min} and go up to ${adventure.price_max} 
                depending on the package you choose.
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-zinc-900 rounded-2xl p-6 sticky top-8">
                <div className="text-center mb-6">
                  <span className="text-gray-400">Starting from</span>
                  <p className="text-4xl font-bold text-orange-500">
                    ${adventure.price_min}
                  </p>
                  <span className="text-gray-500">per person</span>
                </div>

                <a 
                  href={adventure.provider_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-orange-500 text-white text-center font-bold rounded-xl hover:bg-orange-600 transition"
                >
                  Book This Adventure
                </a>

                <p className="text-center text-gray-500 text-sm mt-4">
                  You'll be redirected to {adventure.provider} to complete your booking.
                </p>

                <div className="border-t border-zinc-700 mt-6 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400">Provider</span>
                    <span className="font-bold">{adventure.provider}</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400">Region</span>
                    <span className="font-bold">{adventure.location.region}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Continent</span>
                    <span className="font-bold">{adventure.location.continent}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          <h2 className="text-2xl font-bold mt-16 mb-6">Similar Adventures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ADVENTURES
              .filter(a => a.category === adventure.category && a.id !== adventure.id)
              .slice(0, 3)
              .map(a => (
                <Link
                  key={a.id}
                  href={`/adventures/${a.id}`}
                  className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition"
                >
                  <img 
                    src={a.image_url} 
                    alt={a.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition"
                  />
                  <div className="p-4">
                    <h3 className="font-bold group-hover:text-orange-500 transition">{a.title}</h3>
                    <p className="text-gray-400 text-sm">{a.location.country}</p>
                    <p className="text-orange-500 font-bold mt-2">${a.price_min}+</p>
                  </div>

          {/* Gear Recommendations */}
          <div className="mt-16 bg-zinc-900 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Recommended Gear</h2>
              <a href={AFFILIATES.amazon.url} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline text-sm">
                Shop on Amazon →
              </a>
            </div>

          {/* Travel Insurance */}
          <div className="mt-8 bg-gradient-to-r from-blue-900/50 to-zinc-900 rounded-2xl p-6 border border-blue-800/50">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🛡️</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Travel Insurance Recommended</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Adventure travel requires proper coverage. We recommend SafetyWing for digital nomads and World Nomads for comprehensive protection.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://safetywing.com?invited=youradventureshub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition"
                  >
                    SafetyWing
                  </a>
                  <a
                    href="https://www.worldnomads.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-500 text-blue-400 text-sm font-bold rounded-lg hover:bg-blue-500 hover:text-white transition"
                  >
                    World Nomads
                  </a>
                </div>
              </div>
            </div>
          </div>
            <p className="text-gray-400 mb-6">Gear for this adventure type (affiliate links)</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {getGearForCategory(adventure.category).map((gear, idx) => (
                <a
                  key={idx}
                  href={`https://www.amazon.com/dp/${gear.asin}?tag=youradventureshub-20`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-black rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition"
                >
                  <img
                    src={gear.image}
                    alt={gear.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <p className="text-white text-sm font-medium group-hover:text-orange-500 transition line-clamp-2">{gear.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </div>
  )
}
