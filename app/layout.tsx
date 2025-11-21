import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfect Match - Find Your Life Partner',
  description: 'A modern matrimonial platform to find your perfect life partner. Join thousands of successful matches.',
  keywords: ['matrimony', 'marriage', 'wedding', 'life partner', 'matchmaking'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
