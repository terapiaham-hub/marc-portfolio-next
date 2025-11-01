"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-4"
        >
          Marc Hampshire – Psychotherapist, Musician, Technologist.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          Exploring the spaces where humanity meets creativity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#projects" className="px-6 py-3 bg-accent text-white rounded-full hover:bg-opacity-80 transition-colors">
            Explore My Work
          </Link>
        </motion.div>
      </main>

      {/* About Section */}
      <section id="about" className="py-16 bg-background px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            I’m Marc Hampshire, a psychotherapist, musician and creative technologist. I explore the spaces where humanity meets creativity and technology.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            Through therapy I help people reconnect with themselves; through music I tell stories and evoke emotions; and through technology I build tools that empower and inspire.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Based in Croydon, UK, I work with clients worldwide and collaborate on projects that blend art, science, and technology.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-8"
          >
            Projects
          </motion.h2>
          <p className="mb-8">Projects will be added soon. Stay tuned!</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-background dark:bg-ink px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Testimonials
          </motion.h2>
          <div className="space-y-8 mt-8">
            <motion.blockquote
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl italic">"Marc's therapy sessions transformed my life."</p>
              <footer className="mt-2 text-sm">— Client A</footer>
            </motion.blockquote>
            <motion.blockquote
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-lg md:text-xl italic">"Working with Marc on music projects is a creative joy."</p>
              <footer className="mt-2 text-sm">— Collaborator B</footer>
            </motion.blockquote>
            <motion.blockquote
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl italic">"His tech insights opened new possibilities for our startup."</p>
              <footer className="mt-2 text-sm">— Mentor C</footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-6"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            Feel free to reach out via the form below or through my social platforms.
          </motion.p>
          <form action="https://formspree.io/f/mexample" method="POST" className="space-y-4 mt-8">
            <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-ink dark:border-background rounded-md bg-transparent" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-ink dark:border-background rounded-md bg-transparent" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-3 border border-ink dark:border-background rounded-md bg-transparent" rows="5" required></textarea>
            <button type="submit" className="px-6 py-3 bg-accent text-white rounded-full hover:bg-opacity-80 transition-colors">Send Message</button>
          </form>
          <div className="flex flex-wrap justify-center space-x-4 mt-8">
            <Link href="mailto:email@example.com">Email Me</Link>
            <Link href="https://linkedin.com/in/username" target="_blank">LinkedIn</Link>
            <Link href="https://open.spotify.com/user/username" target="_blank">Spotify</Link>
            <Link href="https://www.doctoralia.com/" target="_blank">Doctoralia</Link>
            <Link href="https://instagram.com/username" target="_blank">Instagram</Link>
          </div>
        </div>
      </section>
    </>
  );
}
