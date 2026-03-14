import Link from 'next/link'

interface AffiliateBannerProps {
  type: 'hero' | 'sidebar' | 'inline'
}

const BANNERS = {
  hero: {
    booking: {
      bg: 'from-blue-600 to-blue-800',
      title: 'Find the Perfect Stay',
      description: 'Book hotels, apartments & more with exclusive deals',
      cta: 'Book Now',
      url: 'https://www.booking.com?aid=youradventureshub',
      logo: '🏨',
    },
    viator: {
      bg: 'from-orange-500 to-red-600',
      title: 'Discover Tours & Activities',
      description: 'Find and book unforgettable experiences worldwide',
      cta: 'Explore Tours',
      url: 'https://www.viator.com?aid=youradventureshub',
      logo: '🎫',
    },
  },
  sidebar: {
    safetywing: {
      bg: 'from-green-600 to-emerald-700',
      title: 'Travel Insurance',
      description: 'Nomad-friendly coverage from $42/month',
      cta: 'Get Covered',
      url: 'https://safetywing.com?invited=youradventureshub',
      logo: '🛡️',
    },
    worldnomads: {
      bg: 'from-purple-600 to-indigo-700',
      title: 'Adventure Insurance',
      description: 'Comprehensive coverage for thrill-seekers',
      cta: 'Quote Now',
      url: 'https://www.worldnomads.com',
      logo: '🎒',
    },
  },
  inline: {
    amazon: {
      bg: 'from-yellow-500 to-orange-600',
      title: 'Gear Up for Adventure',
      description: 'Get 10% off with Amazon Prime',
      cta: 'Shop Gear',
      url: 'https://www.amazon.com?tag=youradventureshub-20',
      logo: '📦',
    },
    rei: {
      bg: 'from-green-700 to-teal-800',
      title: 'REI Co-op Members Save',
      description: 'Annual sale + expert advice on gear',
      cta: 'Join & Shop',
      url: 'https://www.rei.com',
      logo: '⛺',
    },
  },
}

export default function AffiliateBanner({ type }: AffiliateBannerProps) {
  const banners = BANNERS[type]
  const entries = Object.entries(banners)
  
  if (type === 'hero') {
    // Hero banner - show one randomly selected
    const [key, banner] = entries[Math.floor(Math.random() * entries.length)]
    return (
      <a
        href={banner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full bg-gradient-to-r ${banner.bg} rounded-2xl p-6 text-white hover:opacity-95 transition`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{banner.logo}</span>
            <div>
              <h3 className="text-xl font-bold">{banner.title}</h3>
              <p className="text-white/90 text-sm">{banner.description}</p>
            </div>
          </div>
          <span className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition">
            {banner.cta} →
          </span>
        </div>
      </a>
    )
  }
  
  if (type === 'sidebar') {
    // Sidebar - stacked vertical
    return (
      <div className="space-y-4">
        {entries.map(([key, banner]) => (
          <a
            key={key}
            href={banner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full bg-gradient-to-r ${banner.bg} rounded-xl p-4 text-white hover:opacity-95 transition`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{banner.logo}</span>
              <div className="flex-1">
                <h4 className="font-bold text-sm">{banner.title}</h4>
                <p className="text-white/80 text-xs">{banner.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    )
  }
  
  // Inline - horizontal banner
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {entries.map(([key, banner]) => (
        <a
          key={key}
          href={banner.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block bg-gradient-to-r ${banner.bg} rounded-xl p-4 text-white hover:opacity-95 transition`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{banner.logo}</span>
            <div>
              <h4 className="font-bold">{banner.title}</h4>
              <p className="text-white/80 text-sm">{banner.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}