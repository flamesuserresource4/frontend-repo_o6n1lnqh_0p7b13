import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import CertificatesPage from './components/CertificatesPage';
import ContactPage from './components/ContactPage';

function Home() {
  return (
    <main>
      <Hero />
      {/* Snapshots on the homepage */}
      <About />
      <Certificates />
    </main>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderRoute = () => {
    switch (route) {
      case '#/about':
        return <AboutPage />;
      case '#/certificates':
        return <CertificatesPage />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen text-[#e0e0e0]" style={{ backgroundColor: '#1c1c1c' }}>
      <Navbar />
      {renderRoute()}
      <Footer />
    </div>
  );
}
