import './globals.css';
import { Open_Sans, Raleway } from 'next/font/google';
import Link from 'next/link';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const metadata = {
  title: 'Marc Hampshire – Psicología para el Bienestar Emocional y Social',
  description: 'Supporting your journey toward healing and growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable}`}>
      <body className="bg-background text-ink font-sans">
        <header className="fixed w-full z-10 px-4 py-2 flex justify-between items-center bg-background/70 backdrop-blur">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="font-serif text-xl">Marc Hampshire</Link>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#testimonials">Testimonials</Link>
            <Link href="/#books">Books</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
