import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Marc Hampshire – Psychotherapist, Musician, Technologist',
  description: 'Exploring the spaces where humanity meets creativity.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-ink font-sans">
        <header className="fixed w-full z-10 px-4 py-2 flex justify-between items-center bg-background/70 backdrop-blur">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="font-serif text-xl">Marc Hampshire</Link>
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
