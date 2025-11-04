import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient to make text pop */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#1c1c1c]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 flex min-h-screen items-center">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.35em] text-gray-300 mb-4"
          >
            Fullstack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="text-4xl md:text-6xl font-semibold text-white leading-tight"
          >
            Muhamad Alwan Fadhlurrohman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-4 text-gray-200 max-w-2xl"
          >
            Fullstack Developer — Java Spring Boot & React.js Enthusiast. Building robust, scalable backend services and polished, high-performance interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#"
              className="px-5 py-2.5 bg-white text-black rounded-sm border border-white/20 hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </a>
            <button
              onClick={scrollToAbout}
              className="px-5 py-2.5 rounded-sm border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              View Projects
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
