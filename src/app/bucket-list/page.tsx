'use client'

import Link from 'next/link'
import { useState } from 'react'
import { allAdventures as ADVENTURES } from '@/lib/seed'
import { AdventureCard } from '@/components/AdventureCard'

// Mock bucket list (in real app, from database)
const BUCKET_LIST_IDS = ['1', '5', '9', '12', '17']

export default function BucketListPage() {
  const bucketAdventures = ADVENTURES.filter(a => BUCKET_LIST_IDS.includes(a.id))

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-6xl block mb-4">❤️</span>
          <h1 className="text-4xl font-bold">My Bucket List</h1>
          <p className="text-gray-400 mt-2">
            {bucketAdventures.length} adventures saved
          </p>
        </div>

        {bucketAdventures.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bucketAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} showActions />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400">Your bucket list is empty</p>
            <Link 
              href="/adventures" 
              className="inline-block mt-4 px-6 py-3 bg-orange-500 font-bold rounded-full hover:bg-orange-600"
            >
              Explore Adventures
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
