'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ProvidersPage() {
  const [form, setForm] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    website: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/providers/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      
      if (res.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error(error)
    }
    
    setLoading(false)
  }

  if (submitted) {
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
          <span className="text-6xl block mb-4">✅</span>
          <h1 className="text-4xl font-bold mb-4">Application Received!</h1>
          <p className="text-xl text-gray-400 mb-8">
            Thank you for your interest in partnering with YourAdventuresHub. 
            We'll be in touch within 2-3 business days.
          </p>
          <Link href="/" className="text-orange-500 hover:underline">
            Back to Home
          </Link>
        </main>
      </div>
    )
  }

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
        <div className="text-center mb-16">
          <span className="text-6xl block mb-4">🤝</span>
          <h1 className="text-4xl font-bold">
            Partner with <span className="text-orange-500">YourAdventuresHub</span>
          </h1>
          <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
            Reach thousands of adventure seekers. List your tours and connect with customers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900 rounded-2xl p-8 text-center">
            <span className="text-4xl block mb-4">🎯</span>
            <h3 className="text-xl font-bold mb-2">Reach More Customers</h3>
            <p className="text-gray-400">Access our growing community of adventure seekers.</p>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-8 text-center">
            <span className="text-4xl block mb-4">💰</span>
            <h3 className="text-xl font-bold mb-2">Pay Only for Results</h3>
            <p className="text-gray-400">Affiliate model — pay commissions only when you get bookings.</p>
          </div>
          <div className="bg-zinc-900 rounded-2xl p-8 text-center">
            <span className="text-4xl block mb-4">⚡</span>
            <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
            <p className="text-gray-400">Simple API to list your adventures.</p>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-center mb-8">Apply to Partner</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <input
                type="text"
                placeholder="Company Name *"
                required
                value={form.company_name}
                onChange={(e) => setForm({...form, company_name: e.target.value})}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-orange-500 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Contact Name"
                value={form.contact_name}
                onChange={(e) => setForm({...form, contact_name: e.target.value})}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-orange-500 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Business Email *"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-orange-500 outline-none"
              />
            </div>
            <div>
              <input
                type="url"
                placeholder="Website URL"
                value={form.website}
                onChange={(e) => setForm({...form, website: e.target.value})}
                className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-orange-500 outline-none"
              />
            </div>
            <textarea
              placeholder="Tell us about your adventures..."
              rows={4}
              value={form.description}
              onChange={(e) => setForm({...form, description: e.target.value})}
              className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-xl focus:border-orange-500 outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-orange-500 font-bold rounded-xl hover:bg-orange-600 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Apply to Partner'}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
