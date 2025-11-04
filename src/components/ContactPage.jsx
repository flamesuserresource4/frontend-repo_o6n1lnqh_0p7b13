import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-semibold"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-200 max-w-2xl"
        >
          I’m open to collaboration and new opportunities. Reach out via email and I’ll get back to you.
        </motion.p>

        <div className="mt-8 rounded-sm border border-white/10 bg-black/30 p-6">
          <div className="text-sm text-gray-400">Email</div>
          <a href="mailto:your.email@example.com" className="text-white text-lg hover:underline">
            your.email@example.com
          </a>
        </div>
      </div>
    </section>
  );
}
