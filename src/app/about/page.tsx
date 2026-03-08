import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          About <span className="text-orange-500">YourAdventuresHub</span>
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            YourAdventuresHub was born from a simple idea: finding and booking extraordinary 
            adventures shouldn't be hard. We wanted to create a one-stop destination 
            where adventure seekers could discover everything from casual day hikes to 
            extreme expeditions — all in one place.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            We're building the world's most comprehensive adventure marketplace, 
            connecting people with life-changing experiences across the globe. 
            Whether you're a first-time hiker or a seasoned extreme sports enthusiast, 
            we help you find your next adventure.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What We Offer</h2>
          <ul className="space-y-3 text-gray-300">
            <li>🏔️ <strong>Hiking & Trekking</strong> — From day hikes to Everest Base Camp</li>
            <li>🏃 <strong>Running & Races</strong> — 5Ks, marathons, and ultras worldwide</li>
            <li>🤿 <strong>Diving</strong> — Shark cage diving, reef diving, and wreck diving</li>
            <li>🪂 <strong>Skydiving</strong> — Tandem jumps in the world's most scenic locations</li>
            <li>🧗 <strong>Climbing</strong> — Rock climbing, alpine climbing, and ice climbing</li>
            <li>🦁 <strong>Wildlife</strong> — Safaris and wildlife encounters</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">Join Our Community</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Thousands of adventurers already use YourAdventuresHub to discover and book 
            their next experience. Join us and start your journey today.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/adventures" 
            className="inline-block px-8 py-4 bg-orange-500 font-bold rounded-full hover:bg-orange-600"
          >
            Start Exploring
          </Link>
        </div>
      </main>
    </div>
  )
}
