import Link from 'next/link'
import { CATEGORIES, CONTINENTS } from '@/lib/types'
import { getFeaturedAdventures, getAllCountries } from '@/lib/seed'
import SearchBar from './SearchBar'

export default function Home() {
  const featured = getFeaturedAdventures()
  const countries = getAllCountries()
  
  // Group by continent
  const continentsWithCount: Record<string, number> = {}
  featured.forEach(a => {
    const c = a.location.continent
    continentsWithCount[c] = (continentsWithCount[c] || 0) + 1
  })

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <header className="relative h-auto min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-black z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920)' }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-orange-500">Your</span><span className="text-white">AdventuresHub</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8">
            Discover extraordinary adventures worldwide. 
            From hiking Everest to swimming with sharks.
          </p>
          <SearchBar />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/adventures" 
              className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition text-base md:text-lg"
            >
              Explore Adventures
            </Link>
            <Link 
              href="/categories" 
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition text-base md:text-lg"
            >
              Browse by Category
            </Link>
          </div>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-4">Our Mission</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Less searching. More <span className="text-orange-500">going</span>.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We believe adventure should be personal, not overwhelming. Every trip is vetted, 
            every provider is trusted — so you can book with confidence and just go.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 md:gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-orange-500">50+</p>
            <p className="text-gray-400">Adventures</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">40+</p>
            <p className="text-gray-400">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">9</p>
            <p className="text-gray-400">Categories</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">7</p>
            <p className="text-gray-400">Continents</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your <span className="text-orange-500">Adventure</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-orange-500 transition"
              >
                <span className="text-4xl block mb-3">{cat.icon}</span>
                <h3 className="font-bold text-lg text-white group-hover:text-orange-500 transition">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm">{cat.count} adventures</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured <span className="text-orange-500">Adventures</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featured.slice(0, 9).map((adventure) => (
              <Link
                key={adventure.id}
                href={`/adventures/${adventure.id}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={adventure.image_url} 
                    alt={adventure.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                      {adventure.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {adventure.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {adventure.location.country}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        adventure.difficulty === 'extreme' ? 'bg-red-500' :
                        adventure.difficulty === 'hard' ? 'bg-orange-500' :
                        adventure.difficulty === 'moderate' ? 'bg-yellow-500' :
                        'bg-green-500'
                      } text-white font-bold`}>
                        {adventure.difficulty}
                      </span>
                      <span className="text-white font-bold">
                        ${adventure.price_min}+
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/adventures" 
              className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              View All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore by <span className="text-orange-500">Location</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Oceania'].map((continent) => (
              <Link
                key={continent}
                href={`/continents/${continent.toLowerCase().replace(' ', '-')}`}
                className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800"
                  alt={continent}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">{continent}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/countries" 
              className="inline-block px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition"
            >
              Browse by Country
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of adventurers discovering the world.
          </p>
          <Link 
            href="/adventures" 
            className="inline-block px-10 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl font-bold mb-4">
            <span className="text-orange-500">Your</span><span className="text-white">AdventuresHub</span>
          </p>
          <p className="text-gray-500">
            Your gateway to extraordinary adventures worldwide.
          </p>
          <p className="text-gray-600 text-sm mt-8">
            © 2026 YourAdventuresHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
