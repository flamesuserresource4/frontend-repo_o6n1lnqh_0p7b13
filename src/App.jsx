import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-[#e0e0e0]" style={{ backgroundColor: '#1c1c1c' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}
