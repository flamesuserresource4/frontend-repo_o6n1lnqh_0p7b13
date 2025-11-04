import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24" style={{ backgroundColor: '#1c1c1c' }}>
      {/* Subtle gridlines for industrial accent */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(180deg, transparent, black 20%, black 80%, transparent)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-semibold"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-8 grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-7">
            <p className="text-gray-200 leading-relaxed">
              I craft secure, scalable APIs with Java Spring Boot and build interactive, performant interfaces with React.js. I enjoy working across the stack—from database design and cloud deployment to pixel-perfect UI—delivering products that are reliable and elegant.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Stack highlights: Spring Boot, Java, PostgreSQL/MongoDB, REST, React, Vite, TypeScript, Tailwind, and CI/CD. I value clean architecture, automated testing, and observability.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-sm border border-white/10 bg-black/30 p-4">
              <div className="text-xs text-gray-400 font-mono mb-2">techstack.json</div>
              <pre className="text-gray-100 text-sm font-mono overflow-auto">
{`{
  "backend": ["Java", "Spring Boot", "REST", "JWT", "Docker"],
  "frontend": ["React", "Vite", "Tailwind", "Framer Motion"],
  "database": ["PostgreSQL", "MongoDB"],
  "cloud": ["AWS", "Vercel", "Railway"]
}`}
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
