'use client'

import { useEffect, useState } from 'react'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { allAdventures as ADVENTURES } from '@/lib/seed'
import { AdventureCard } from '@/components/AdventureCard'

export default function BucketListPage() {
  const { isSignedIn, user, isLoaded } = useUser()
  const [bucketListIds, setBucketListIds] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isSignedIn) {
      fetchBucketList()
    } else {
      setLoading(false)
    }
  }, [isSignedIn])

  const fetchBucketList = async () => {
    try {
      const res = await fetch('/api/bucket-list')
      const data = await res.json()
      const ids = data.bucket_list?.map((a: any) => a.id) || []
      setBucketListIds(ids)
    } catch (error) {
      console.error('Failed to fetch bucket list:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToBucketList = async (adventureId: string) => {
    await fetch('/api/bucket-list', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adventure_id: adventureId }),
    })
    fetchBucketList()
  }

  const removeFromBucketList = async (adventureId: string) => {
    await fetch('/api/bucket-list', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ adventure_id: adventureId }),
    })
    fetchBucketList()
  }

  const bucketAdventures = ADVENTURES.filter(a => bucketListIds.includes(a.id))

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-orange-500">Loading...</div>
      </div>
    )
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-zinc-800 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-orange-500">Adventure</span>Hub
            </Link>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-20 text-center">
          <span className="text-6xl block mb-4">🔐</span>
          <h1 className="text-4xl font-bold mb-4">Sign In Required</h1>
          <p className="text-xl text-gray-400 mb-8">
            Create an account or sign in to save your favorite adventures to your bucket list.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/auth/signin" 
              className="px-6 py-3 border border-zinc-700 text-white font-bold rounded-xl hover:border-orange-500 transition"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup" 
              className="px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition"
            >
              Get Started
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-orange-500">Adventure</span>Hub
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">Hi, {user?.firstName || 'Explorer'}!</span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-6xl block mb-4">❤️</span>
          <h1 className="text-4xl font-bold">My Bucket List</h1>
          <p className="text-gray-400 mt-2">
            {bucketAdventures.length} adventure{bucketAdventures.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        {bucketAdventures.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bucketAdventures.map((adventure) => (
              <AdventureCard 
                key={adventure.id} 
                adventure={adventure} 
                showActions 
                isInBucketList={true}
                onToggleBucketList={() => removeFromBucketList(adventure.id)}
              />
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