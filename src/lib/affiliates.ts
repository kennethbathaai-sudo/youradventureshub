// Affiliate programs config
export const AFFILIATES = {
  // Travel booking affiliates
  viator: {
    name: 'Viator',
    url: 'https://www.viator.com',
    commission: '8-12%',
  },
  getyourguide: {
    name: 'GetYourGuide',
    url: 'https://www.getyourguide.com',
    commission: '8-12%',
  },
  booking: {
    name: 'Booking.com',
    url: 'https://www.booking.com',
    commission: '4-8%',
  },
  klook: {
    name: 'Klook',
    url: 'https://www.klook.com',
    commission: '6-10%',
  },
  
  // Gear & insurance
  amazon: {
    name: 'Amazon Associates',
    url: 'https://www.amazon.com',
    commission: '1-10%',
  },
  worldnomads: {
    name: 'World Nomads',
    url: 'https://www.worldnomads.com',
    commission: '8-12%',
  },
  safetywing: {
    name: 'SafetyWing',
    url: 'https://safetywing.com',
    commission: '10%',
  },
  rei: {
    name: 'REI Co-op',
    url: 'https://www.rei.com',
    commission: '5-8%',
  },
}

// Recommended gear by category
export const GEAR_RECOMMENDATIONS: Record<string, { name: string; asin: string; image: string }[]> = {
  hiking: [
    { name: 'Osprey Atmos AG 65 Backpack', asin: 'B07SP1LWN8', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200' },
    { name: 'Merrell Moab 3 Hiking Boots', asin: 'B09CQQMW7F', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200' },
    { name: 'Black Diamond Trekking Poles', asin: 'B01G2XUC3U', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=200' },
  ],
  diving: [
    { name: ' Cressi Adult Snorkel Set', asin: 'B01LZ7Q9BZ', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200' },
    { name: 'Mares Quantum II BCD', asin: 'B07K2HW7YL', image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200' },
  ],
  climbing: [
    { name: 'Black Diamond Harness', asin: 'B00HI5R2Q4', image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=200' },
    { name: 'Petzl Climbing Helmet', asin: 'B0875R4D6T', image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=200' },
  ],
  cycling: [
    { name: 'Trekking Bike Helmet', asin: 'B07YMJ5J5M', image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=200' },
    { name: 'Cycling Jersey Bib Shorts', asin: 'B09JQMJHXY', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200' },
  ],
  running: [
    { name: 'Nike Air Zoom Pegasus', asin: 'B0BSHF1WHW', image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=200' },
    { name: 'Running Hydration Vest', asin: 'B08F7HL7XS', image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=200' },
  ],
  water: [
    { name: 'Surfboard 6"0" Soft Top', asin: 'B09JM6XRGD', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=200' },
    { name: 'Rash Guard UPF 50+', asin: 'B09JQQJ5P8', image: 'https://images.unsplash.com/photo-1537519646060-35298de2b86a?w=200' },
  ],
  wildlife: [
    { name: 'Nikon Monarch M5 8x42', asin: 'B09HSX7FFH', image: 'https://images.unsplash.com/photo-1454789548728-85d2696cfb93?w=200' },
    { name: 'Wildlife Photography Vest', asin: 'B08F8K2ZFV', image: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=200' },
  ],
  skydiving: [
    { name: 'Skydiving Altimeter Watch', asin: 'B07V4L4X4K', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=200' },
    { name: 'GoPro Hero12 Black', asin: 'B0C9VK3V2L', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=200' },
  ],
  extreme: [
    { name: 'Action Camera 4K Waterproof', asin: 'B0B8XZ2J8K', image: 'https://images.unsplash.com/photo-1577017040065-65052831a153?w=200' },
    { name: 'Protective Gear Set', asin: 'B09J2H7R6Y', image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=200' },
  ],
}

// Get gear for a category, or default
export function getGearForCategory(category: string) {
  return GEAR_RECOMMENDATIONS[category] || GEAR_RECOMMENDATIONS.hiking
}

// Affiliate link builder
export function buildAffiliateLink(affiliate: string, adventureId: string, url: string) {
  const affiliateIds: Record<string, string> = {
    viator: 'YOUR_VIATOR_AFFILIATE_ID',
    getyourguide: 'YOUR_GETYOURGUIDE_AFFILIATE_ID',
    booking: 'YOUR_BOOKING_AFFILIATE_ID',
    klook: 'YOUR_KLOOK_AFFILIATE_ID',
  }
  
  // For now, return direct URL - replace with affiliate links when you sign up
  return url
}
