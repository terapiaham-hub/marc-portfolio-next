import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Marc Hampshire – Psychotherapist, Musician, Technologist',
  description: 'Exploring the spaces where humanity meets creativity.',
  openGraph: {
    title: 'Marc Hampshire – Psychotherapist, Musician, Technologist',
    description: 'Exploring the spaces where humanity meets creativity.',
    url: 'https://marc-portfolio-next.vercel.app',
    siteName: 'Marc Hampshire Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marc Hampshire – Psychotherapist, Musician, Technologist',
    description: 'Exploring the spaces where humanity meets creativity.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
