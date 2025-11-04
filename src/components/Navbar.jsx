import { useEffect, useState } from 'react';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Certificates', target: 'certificates' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur supports-backdrop-blur:bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="text-white font-semibold tracking-widest uppercase">MAF</div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.target}>
              <button
                onClick={() => handleScroll(item.target)}
                className="text-sm text-gray-200 hover:text-white transition-colors tracking-wide group"
              >
                <span className="inline-block group-hover:-translate-y-0.5 transition-transform">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
