export default function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Muhamad Alwan Fadhlurrohman. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://github.com/username" className="text-gray-300 hover:text-white transition-colors">GitHub</a>
          <span className="text-gray-600">/</span>
          <a href="https://linkedin.com/in/username" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
