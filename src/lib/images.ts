import { Adventure } from './types'

export function getAdventureImage(adventure: Adventure): string {
  // Use the seeded image URL if available, otherwise use a fallback
  if (adventure.image_url) {
    return adventure.image_url
  }
  
  // Fallback images based on category
  const categoryImages: Record<string, string> = {
    'hiking': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    'running': 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80',
    'diving': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    'skydiving': 'https://images.unsplash.com/photo-1548625361-e90a17e38f51?w=800&q=80',
    'skiing': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    'snowboarding': 'https://images.unsplash.com/photo-1522056615691-da7b8106c665?w=800&q=80',
    'surfing': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    'climbing': 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80',
    'cycling': 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80',
    ' kayaking': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
  }
  
  return categoryImages[adventure.category.toLowerCase()] || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
}

export function getCategoryImage(category: string): string {
  const images: Record<string, string> = {
    'hiking': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    'running': 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&q=80',
    'diving': 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    'skydiving': 'https://images.unsplash.com/photo-1548625361-e90a17e38f51?w=800&q=80',
    'skiing': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80',
    'surfing': 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    'climbing': 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&q=80',
  }
  
  return images[category.toLowerCase()] || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
}