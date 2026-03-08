import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏔️</span>
              <span className="text-xl font-bold">
                <span className="text-orange-500">Your</span><span className="text-white">AdventuresHub</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Your gateway to extraordinary adventures worldwide. From hiking Everest to swimming with sharks.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/adventures" className="text-gray-400 hover:text-orange-500">All Adventures</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-orange-500">Categories</Link></li>
              <li><Link href="/continents" className="text-gray-400 hover:text-orange-500">Destinations</Link></li>
              <li><Link href="/search" className="text-gray-400 hover:text-orange-500">Search</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/categories/hiking" className="text-gray-400 hover:text-orange-500">Hiking & Trekking</Link></li>
              <li><Link href="/categories/running" className="text-gray-400 hover:text-orange-500">Running & Races</Link></li>
              <li><Link href="/categories/diving" className="text-gray-400 hover:text-orange-500">Diving</Link></li>
              <li><Link href="/categories/skydiving" className="text-gray-400 hover:text-orange-500">Skydiving</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
              <li><Link href="/providers" className="text-gray-400 hover:text-orange-500">For Providers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-orange-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 YourAdventuresHub. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-orange-500">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
