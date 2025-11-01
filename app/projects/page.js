import { motion } from 'framer-motion';

export const metadata = {
  title: 'Projects – Marc Hampshire',
  description: 'Explore projects across therapy, music, AI & technology.'
};

export default function Projects() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-8"
        >
          Projects
        </motion.h1>
        <p className="mb-12">
          Browse my projects across therapy, music, artificial intelligence, and tech
          entrepreneurship. Each project includes a short narrative, role, tools used, and impact.
        </p>
        <p>Project listings will be added soon.</p>
      </div>
    </main>
  );
}
