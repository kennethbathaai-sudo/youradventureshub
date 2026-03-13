import Link from 'next/link'

const BANNERS = [
  {
    title: 'Save on Travel Insurance',
    description: 'Get covered before your adventure. SafetyWing offers flexible nomad insurance.',
    emoji: '🛡️',
    link: 'https://safetywing.com?invited=youradventureshub',
    cta: 'Get Quote',
    bg: 'from-blue-900 to-zinc-900',
  },
  {
    title: 'Book Activities with Viator',
    description: 'Tours, tickets & experiences worldwide. Up to 12% commission helps us stay free.',
    emoji: '🎫',
    link: 'https://www.viator.com',
    cta: 'Explore Tours',
    bg: 'from-orange-900 to-zinc-900',
  },
  {
    title: 'Gear Up on Amazon',
    description: 'Find the best equipment for your adventure. Great prices, fast shipping.',
    emoji: '🎒',
    link: 'https://www.amazon.com',
    cta: 'Shop Now',
    bg: 'from-yellow-900 to-zinc-900',
  },
]

export default function AffiliateBanner() {
  const banner = BANNERS[Math.floor(Math.random() * BANNERS.length)]
  
  return (
    <section className={`py-12 px-4 bg-gradient-to-r ${banner.bg}`}>
      <div className="max-w-4xl mx-auto flex items-center gap-6">
        <span className="text-5xl">{banner.emoji}</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{banner.title}</h3>
          <p className="text-gray-300 text-sm">{banner.description}</p>
        </div>
        <a
          href={banner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition whitespace-nowrap"
        >
          {banner.cta}
        </a>
      </div>
    </section>
  )
}
