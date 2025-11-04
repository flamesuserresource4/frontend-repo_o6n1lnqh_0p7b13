import { motion } from 'framer-motion';

const TRAINING_CERTS = [
  { title: 'Algorithm Logic (C)', issuer: 'PUB Scholarship Program', date: 'Feb 2023' },
  { title: 'Data Structures (C)', issuer: 'PUB Scholarship Program', date: 'Mar 2023' },
  { title: 'DBMS (MySQL)', issuer: 'PUB Scholarship Program', date: 'Apr 2023' },
  { title: 'Basic Web (HTML, CSS, JS)', issuer: 'PUB Scholarship Program', date: 'May 2023' },
  { title: 'Fundamentals (Java)', issuer: 'PUB Scholarship Program', date: 'Jun 2023' },
  { title: 'Advanced (Java)', issuer: 'PUB Scholarship Program', date: 'Aug 2023' },
  { title: 'Fundamentals (React)', issuer: 'PUB Scholarship Program', date: 'Sep 2023' },
  { title: 'Advanced (React)', issuer: 'PUB Scholarship Program', date: 'Oct 2023' },
];

const BOOTCAMP_CERTS = [
  { title: 'Fullstack Java Spring Boot', issuer: 'Bootcamp Provider', date: '2024' },
];

export default function CertificatesPage() {
  return (
    <section className="pt-28 pb-20 min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-semibold"
        >
          Certificates
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold">Training Certificates</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TRAINING_CERTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="rounded-sm border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-white font-medium">{c.title}</h4>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-gray-300 mt-1 text-sm">{c.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold">Bootcamp Certificates</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BOOTCAMP_CERTS.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="rounded-sm border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-white font-medium">{c.title}</h4>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-gray-300 mt-1 text-sm">{c.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
