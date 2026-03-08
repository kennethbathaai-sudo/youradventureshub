import Link from 'next/link'
import { getAllContinents, searchAdventures } from '@/lib/seed'

export default function ContinentsPage() {
  const continents = getAllContinents()

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-orange-500 hover:underline mb-8 inline-block">← Back</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Browse by <span className="text-orange-500">Continent</span></h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {continents.map(continent => {
            const count = searchAdventures(continent).length
            return (
              <Link 
                key={continent} 
                href={`/continents/${continent.toLowerCase().replace(/ /g, '-')}`}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800" 
                  alt={continent}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">{continent}</h3>
                    <p className="text-gray-300">{count} adventures</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
