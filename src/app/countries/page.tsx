import Link from 'next/link'
import { getAllCountries, searchAdventures } from '@/lib/seed'

export default function CountriesPage() {
  const countries = getAllCountries()

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-orange-500 hover:underline mb-8 inline-block">← Back</Link>
        <h1 className="text-4xl font-bold text-white mb-8">Browse by <span className="text-orange-500">Country</span></h1>
        
        <div className="grid md:grid-cols-4 gap-3">
          {countries.map(country => {
            const count = searchAdventures(country).length
            return (
              <Link 
                key={country} 
                href={`/countries/${country.toLowerCase().replace(/ /g, '-')}`}
                className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-orange-500 transition text-center"
              >
                <span className="text-white">{country}</span>
                <span className="text-gray-500 text-sm ml-2">({count})</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
