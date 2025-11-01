'use client'

import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Marc Hampshire – Psychotherapist, Musician, Technologist',
  description: 'Exploring the spaces where humanity meets creativity.',
  openGraph: {
    title: 'Marc Hampshire',
    description: 'Exploring the spaces where humanity meets creativity.',
    url: 'https://marc-portfolio-next.vercel.app',
    siteName: 'Marc Hampshire',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Marc Hampshire – Psychotherapist, Musician, Technologist'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marc Hampshire',
    description: 'Exploring the spaces where humanity meets creativity.',
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (stored === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDark = !darkMode
    setDarkMode(newDark)
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-ink font-sans dark:bg-ink dark:text-background transition-colors">
        <header className="fixed w-full z-10 px-4 py-2 flex justify-between items-center bg-background/70 dark:bg-ink/70 backdrop-blur">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="font-serif text-xl">
              Marc Hampshire
            </Link>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2">
              {darkMode ? '🌙' : '☀️'}
            </button>
            <div className="space-x-2">
              <Link href="/" locale="en">EN</Link>
              <Link href="/" locale="es">ES</Link>
              <Link href="/" locale="ca">CA</Link>
            </div>
          </div>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
