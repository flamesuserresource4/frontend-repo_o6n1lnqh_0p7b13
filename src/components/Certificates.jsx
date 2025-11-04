import { motion } from 'framer-motion';

const CERTS = [
  { title: 'Java Programming', issuer: 'Oracle', year: '2023' },
  { title: 'Spring Boot Microservices', issuer: 'Udemy', year: '2024' },
  { title: 'React Developer', issuer: 'Meta', year: '2023' },
  { title: 'Docker & Kubernetes', issuer: 'Coursera', year: '2024' },
  { title: 'System Design Basics', issuer: 'Educative', year: '2024' },
  { title: 'Database Design', issuer: 'MongoDB University', year: '2022' },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-semibold"
        >
          Certificates
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((c, idx) => (
            <motion.div
              key={c.title + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.03, duration: 0.5 }}
              className="group rounded-sm border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-white font-medium tracking-wide">{c.title}</h3>
                <span className="text-xs text-gray-400">{c.year}</span>
              </div>
              <p className="text-gray-300 mt-2">{c.issuer}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-xs text-gray-400">Hover to inspect</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
