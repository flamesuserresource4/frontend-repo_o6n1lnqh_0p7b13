import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#/' },
  { label: 'About', href: '#/about' },
  { label: 'Certificates', href: '#/certificates' },
  { label: 'Contact', href: '#/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur supports-backdrop-blur:bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#/" className="text-white font-semibold tracking-widest uppercase">MAF</a>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-gray-200 hover:text-white transition-colors tracking-wide group"
              >
                <span className="inline-block group-hover:-translate-y-0.5 transition-transform">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
