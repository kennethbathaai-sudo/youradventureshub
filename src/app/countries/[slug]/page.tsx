import Link from 'next/link'
import { getAllCountries, searchAdventures } from '@/lib/seed'

export function generateStaticParams() {
  return getAllCountries().map(c => ({ slug: c.toLowerCase().replace(/ /g, '-') }))
}

export default function CountryPage({ params }: { params: { slug: string } }) {
  const countryName = params.slug.replace(/-/g, ' ')
  const adventures = searchAdventures(countryName)

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-orange-500 hover:underline mb-8 inline-block">← Back</Link>
        
        <h1 className="text-4xl font-bold text-white mb-4">{countryName}</h1>
        <p className="text-gray-400 mb-12">{adventures.length} adventures</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map(adventure => (
            <Link key={adventure.id} href={`/adventures/${adventure.id}`} className="group">
              <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition">
                <img src={adventure.image_url} alt={adventure.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
                <div className="p-4">
                  <span className="text-xs text-orange-500 uppercase">{adventure.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{adventure.title}</h3>
                  <p className="text-gray-400 text-sm">{adventure.location.region}</p>
                  <div className="flex justify-between mt-3">
                    <span className={`text-xs px-2 py-1 rounded ${
                      adventure.difficulty === 'extreme' ? 'bg-red-500' :
                      adventure.difficulty === 'hard' ? 'bg-orange-500' :
                      adventure.difficulty === 'moderate' ? 'bg-yellow-500' : 'bg-green-500'
                    } text-white font-bold`}>{adventure.difficulty}</span>
                    <span className="text-white font-bold">${adventure.price_min}+</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
