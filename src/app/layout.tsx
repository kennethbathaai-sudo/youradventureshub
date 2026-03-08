import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YourAdventuresHub - Discover Your Next Adventure',
  description: 'Find and book adventures worldwide - from hiking to skydiving',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
