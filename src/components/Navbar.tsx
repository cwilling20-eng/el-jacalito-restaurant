import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-bark-900 transition-shadow duration-300 ${
          scrolled ? 'shadow-xl' : ''
        }`}
        style={{ padding: scrolled ? '8px 0' : '12px 0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/El_Jacalito_logo.png"
              alt="El Jacalito"
              className="transition-all duration-300"
              style={{ height: scrolled ? '80px' : '100px' }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.to
                    ? 'text-chili-500'
                    : 'text-sand-200 hover:text-chili-500'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="block h-0.5 bg-chili-500 mt-1 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="tel:9034324808"
              className="inline-flex items-center gap-2 bg-chili-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm
                transition-all duration-300 hover:bg-chili-600 hover:shadow-lg"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          <button
            className="md:hidden text-sand-200 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            backgroundColor: '#1A1A1A',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: '#FAF6F0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <X size={32} />
          </button>

          <div style={{ marginBottom: '40px' }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src="/El_Jacalito_logo.png"
                alt="El Jacalito"
                style={{ height: '140px' }}
              />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: location.pathname === link.to ? '#C0392B' : '#FAF6F0',
                  fontSize: '24px',
                  fontFamily: '"Alfa Slab One", serif',
                  textDecoration: 'none',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:9034324808"
            style={{
              marginTop: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#C0392B',
              color: '#FFFFFF',
              padding: '14px 32px',
              borderRadius: '8px',
              fontFamily: '"Lato", sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            <Phone size={18} />
            <span>(903) 432-4808</span>
          </a>
        </div>
      )}
    </>
  );
}
