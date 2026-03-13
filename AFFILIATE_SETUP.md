# Affiliate Marketing Setup

## Current Implementation

### 1. Adventure Detail Pages (`/adventures/[id]`)
- **Book Now** button → Direct to provider (can add affiliate tracking)
- **Recommended Gear** section → Amazon Associates links (ASIN-based)
- **Travel Insurance** section → SafetyWing & World Nomads affiliate links

### 2. Homepage
- **Affiliate Banner** → Random banner showing Viator, Amazon, or SafetyWing

---

## Sign Up for Affiliate Programs

### Priority 1: High Commissions
| Program | Commission | Sign Up |
|---------|------------|---------|
| **SafetyWing** | 10% | https://safetywing.com/affiliates |
| **World Nomads** | 8-12% | https://www.worldnomads.com/affiliate |
| **Viator** | 8-12% | https://www.viator.com/affiliate-program |

### Priority 2: Travel Booking
| Program | Commission | Sign Up |
|---------|------------|---------|
| **GetYourGuide** | 8-12% | https://partner.getyourguide.com |
| **Klook** | 6-10% | https://www.klook.com/affiliate |
| **Booking.com** | 4-8% | https://www.booking.com/affiliate |

### Priority 3: Gear
| Program | Commission | Sign Up |
|---------|------------|---------|
| **Amazon Associates** | 1-10% | https://affiliate-program.amazon.com |
| **REI Co-op** | 5-8% | https://www.rei.com/affiliate |

---

## Configuration

After signing up, update `src/lib/affiliates.ts`:

```typescript
// Replace placeholder IDs
const affiliateIds: Record<string, string> = {
  viator: 'YOUR_VIATOR_AFFILIATE_ID',
  getyourguide: 'YOUR_GETYOURGUIDE_AFFILIATE_ID',
  booking: 'YOUR_BOOKING_AFFILIATE_ID',
  klook: 'YOUR_KLOOK_AFFILIATE_ID',
}
```

Update Amazon tag in adventure page:
```typescript
href={`https://www.amazon.com/dp/${gear.asin}?tag=YOUR_AMAZON_TAG`}
```

---

## Tracking

### Google Analytics
Add affiliate click tracking:
- Event: `affiliate_click`
- Parameters: `program`, `adventure_id`, `url`

### PostHog (if integrated)
Track affiliate conversions via custom events.

---

## Revenue Share

Consider adding a "Support Us" or "Earn Commission" section showing:
- "Book through our links at no extra cost"
- "We earn a small commission that helps keep the site free"
