'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏔️</span>
            <span className="text-xl font-bold">
              <span className="text-orange-500">Adventure</span><span className="text-white">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/adventures" className="text-gray-300 hover:text-orange-500 transition">
              All Adventures
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-orange-500 transition">
              Categories
            </Link>
            <Link href="/continents" className="text-gray-300 hover:text-orange-500 transition">
              Destinations
            </Link>
            <Link href="/search" className="text-gray-300 hover:text-orange-500 transition">
              Search
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/bucket-list" 
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition"
            >
              <span>❤️</span>
              <span>My Bucket List</span>
            </Link>
            <Link 
              href="/auth/signin" 
              className="px-4 py-2 text-gray-300 hover:text-white transition"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/signup" 
              className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/adventures" className="block text-gray-300 hover:text-orange-500">
              All Adventures
            </Link>
            <Link href="/categories" className="block text-gray-300 hover:text-orange-500">
              Categories
            </Link>
            <Link href="/continents" className="block text-gray-300 hover:text-orange-500">
              Destinations
            </Link>
            <Link href="/search" className="block text-gray-300 hover:text-orange-500">
              Search
            </Link>
            <Link href="/bucket-list" className="block text-gray-300 hover:text-orange-500">
              My Bucket List
            </Link>
            <hr className="border-zinc-800" />
            <Link href="/auth/signin" className="block text-gray-300">
              Sign In
            </Link>
            <Link href="/auth/signup" className="block text-orange-500 font-bold">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
