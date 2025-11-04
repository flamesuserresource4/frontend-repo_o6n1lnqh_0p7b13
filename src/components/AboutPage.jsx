import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <section className="mt-10">
    <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">{title}</h3>
    <div className="mt-4 space-y-4">{children}</div>
  </section>
);

const Item = ({ heading, sub, period, bullets }) => (
  <div className="rounded-sm border border-white/10 bg-black/30 p-4">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <div>
        <h4 className="text-white font-medium">{heading}</h4>
        {sub && <p className="text-gray-300 text-sm">{sub}</p>}
      </div>
      {period && <span className="text-xs text-gray-400 whitespace-nowrap">{period}</span>}
    </div>
    {bullets?.length ? (
      <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    ) : null}
  </div>
);

const TRAININGS = [
  {
    name: 'Algorithm Logic (C Language)',
    period: 'Jan 2023 – Feb 2023',
    projects: [
      { title: 'C Algorithms Playground', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Data Structures (C Language)',
    period: 'Feb 2023 – Mar 2023',
    projects: [
      { title: 'DSA Implementations in C', github: '#', demo: '#' },
    ],
  },
  {
    name: 'DBMS (MySQL)',
    period: 'Mar 2023 – Apr 2023',
    projects: [
      { title: 'Inventory Management Schema', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Basic Web (HTML, CSS, JS)',
    period: 'Apr 2023 – May 2023',
    projects: [
      { title: 'Portfolio v1 (Static)', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Fundamentals (Java)',
    period: 'May 2023 – Jun 2023',
    projects: [
      { title: 'Java Console Apps Suite', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Advanced (Java)',
    period: 'Jun 2023 – Aug 2023',
    projects: [
      { title: 'Spring Boot REST API', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Fundamentals (React)',
    period: 'Aug 2023 – Sep 2023',
    projects: [
      { title: 'React SPA Starter', github: '#', demo: '#' },
    ],
  },
  {
    name: 'Advanced (React)',
    period: 'Sep 2023 – Oct 2023',
    projects: [
      { title: 'React + Spring Boot Fullstack', github: '#', demo: '#' },
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="pt-28 pb-20 min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-semibold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-gray-200 max-w-3xl"
        >
          Recipient of PUB (Sustainable Community Empowerment) scholarship, directed to become a programmer from basic to advanced training. I specialize in Java Spring Boot for backend and React.js for frontend, creating robust systems and clean, interactive UIs.
        </motion.p>

        <Section title="Formal Education">
          <Item
            heading="Your University / School"
            sub="Major / Program"
            period="2019 – 2023"
            bullets={[
              'Focus on software engineering and systems design',
              'Active in programming clubs and tech events',
            ]}
          />
        </Section>

        <Section title="Organizations">
          <Item
            heading="Programming Community / Tech Club"
            sub="Member / Mentor"
            period="2020 – 2023"
            bullets={[
              'Organized study groups and code reviews',
              'Hosted workshops on Java, REST APIs, and React',
            ]}
          />
        </Section>

        <Section title="Skills & Focus">
          <Item
            heading="Languages & Frameworks"
            bullets={[
              'Java, Spring Boot, REST, JWT',
              'JavaScript/TypeScript, React, Vite, Tailwind',
              'SQL (MySQL), MongoDB',
            ]}
          />
          <Item
            heading="Practices"
            bullets={[
              'Clean architecture, testing, CI/CD',
              'Docker, containerized deploys',
              'Performance profiling and accessibility first',
            ]}
          />
        </Section>

        <Section title="PUB Scholarship Trainings & Projects">
          <div className="mt-2 grid grid-cols-1 gap-4">
            {TRAININGS.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.03, duration: 0.5 }}
                className="rounded-sm border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h4 className="text-white font-medium">{t.name}</h4>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{t.period}</span>
                </div>
                <div className="mt-3">
                  <p className="text-gray-400 text-sm">Projects:</p>
                  <div className="mt-2 grid gap-2">
                    {t.projects.map((p) => (
                      <div key={p.title} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 rounded border border-white/10 p-3">
                        <span className="text-gray-200">{p.title}</span>
                        <div className="flex items-center gap-2">
                          <a href={p.github} className="px-3 py-1.5 text-xs rounded-sm border border-white/20 text-white hover:bg-white/10 transition-colors">GitHub</a>
                          <a href={p.demo} className="px-3 py-1.5 text-xs rounded-sm bg-white text-black hover:bg-gray-100 transition-colors">Live Demo</a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
