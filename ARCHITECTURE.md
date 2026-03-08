# AdventureHub - Architecture Framework

## Overview

AdventureHub is a Next.js web application for discovering and booking curated adventure travel experiences.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Clerk
- **Deployment**: Ready for Vercel/Node.js

---

## Project Structure

```
adventurehub/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── adventures/    # Adventure CRUD
│   │   │   ├── bucket-list/   # User bucket list
│   │   │   ├── categories/    # Category data
│   │   │   ├── providers/     # Provider inquiries
│   │   │   ├── search/        # Search endpoint
│   │   │   ├── webhooks/      # Clerk webhooks
│   │   │   └── admin/         # Admin endpoints
│   │   │
│   │   ├── adventures/        # /adventures pages
│   │   │   ├── [id]/         # Individual adventure detail
│   │   │   └── page.tsx      # Adventures listing
│   │   │
│   │   ├── categories/        # /categories pages
│   │   │   ├── [slug]/       # Category detail
│   │   │   └── page.tsx      # All categories
│   │   │
│   │   ├── continents/        # /continents pages
│   │   │   ├── [slug]/       # Continent detail
│   │   │   └── page.tsx      # All continents
│   │   │
│   │   ├── countries/         # /countries pages
│   │   │   ├── [slug]/       # Country detail
│   │   │   └── page.tsx      # All countries
│   │   │
│   │   ├── providers/         # Provider listing
│   │   ├── bucket-list/       # User's saved adventures
│   │   ├── search/            # Search results
│   │   ├── about/             # About page
│   │   ├── auth/              # Clerk auth pages
│   │   │   ├── signin/
│   │   │   └── signup/
│   │   │
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   └── SearchBar.tsx      # Homepage search component
│   │
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx         # Navigation
│   │   ├── Footer.tsx         # Footer
│   │   ├── AdventureCard.tsx  # Adventure display card
│   │   └── FilterSidebar.tsx  # Filtering controls
│   │
│   ├── lib/                   # Core utilities
│   │   ├── seed.ts            # Adventure data (JSON seed)
│   │   ├── types.ts           # TypeScript interfaces
│   │   ├── supabase.ts        # Supabase client
│   │   └── auth.ts            # Auth utilities
│   │
│   └── middleware.ts          # Auth protection
│
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Data Model

### Adventure
```typescript
{
  id: string
  title: string
  description: string
  category: string
  location: {
    continent: string
    country: string
    region: string
  }
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme'
  duration: string
  price_min: number
  price_max: number
  provider: string
  provider_url: string
  image_url: string
  featured: boolean
}
```

### User (Supabase)
- id, email, name
- bucket_list: string[] (adventure IDs)
- created_at

### Category
```typescript
{
  id: string
  name: string
  icon: string
  slug: string
  count: number
}
```

---

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, search, mission |
| `/adventures` | All adventures with filters |
| `/adventures/[id]` | Adventure detail page |
| `/categories` | Browse by activity type |
| `/categories/[slug]` | Category detail |
| `/continents` | Browse by continent |
| `/continents/[slug]` | Continent detail |
| `/countries` | Browse by country |
| `/countries/[slug]` | Country detail |
| `/providers` | All providers |
| `/bucket-list` | User's saved adventures |
| `/search?q=` | Search results |
| `/about` | About page |
| `/auth/signin` | Sign in |
| `/auth/signup` | Sign up |

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/adventures` | GET | List all adventures |
| `/api/adventures?id=` | GET | Get single adventure |
| `/api/categories` | GET | List categories |
| `/api/search?q=` | GET | Search adventures |
| `/api/bucket-list` | GET/POST | User's bucket list |
| `/api/providers/inquiry` | POST | Send provider inquiry |
| `/api/webhooks/clerk` | POST | Sync Clerk users |

---

## Features

### Implemented
- ✅ Homepage with hero & search
- ✅ Mission statement section
- ✅ Adventure listings with filters
- ✅ Category/Continent/Country browsing
- ✅ Adventure detail pages
- ✅ Search functionality
- ✅ Bucket list (mock)
- ✅ Responsive design (mobile-first)
- ✅ About page

### In Progress
- 🔄 Auth integration (Clerk)
- 🔄 User bucket list (Supabase)
- 🔄 Provider inquiry forms

### Planned
- ⬜ Booking flow
- ⬜ User reviews/ratings
- ⬜ Admin dashboard
- ⬜ Newsletter signup

---

## Mission Statement

> "Less searching. More going."
> 
> We believe adventure should be personal, not overwhelming. Every trip is vetted, every provider is trusted — so you can book with confidence and just go.

---

## Design System

### Colors
- Primary: `orange-500` (#f97316)
- Background: `black` / `zinc-900`
- Text: `white` / `gray-400`

### Typography
- Headings: Bold, large (text-4xl to text-7xl)
- Body: Regular, readable (text-lg)

### Components
- Cards: Rounded-2xl, dark bg, hover borders
- Buttons: Rounded-full, orange primary
- Inputs: Dark bg with border, focus states

---

## Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Deployment

```bash
# Build
npm run build

# Start production
npm start
```

Recommended: Vercel (zero-config for Next.js)
