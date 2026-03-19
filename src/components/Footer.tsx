import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-sand-200">
      <div className="talavera-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/">
              <img
                src="/El_Jacalito_logo.png"
                alt="El Jacalito"
                className="h-36 mb-4"
              />
            </Link>
            <p className="text-sand-400 text-sm leading-relaxed font-body">
              Authentic Tex-Mex on Cedar Creek Lake. Fajitas, margaritas & good times in Seven Points, TX.
            </p>
          </div>

          <div>
            <h3 className="text-chili-500 font-display text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sand-300 hover:text-chili-500 transition-colors duration-200 text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://share.google/GQnfoySTs5MOAJwD2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-300 hover:text-chili-500 transition-colors duration-200 text-sm font-body"
                >
                  Leave Us a Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-chili-500 font-display text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm font-body">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                <span className="text-sand-300">
                  127 E Cedar Creek Pkwy<br />Seven Points, TX 75143
                </span>
              </li>
              <li>
                <a href="tel:9034324808" className="flex items-center gap-3 text-sand-300 hover:text-chili-500 transition-colors">
                  <Phone size={18} className="text-terracotta-500 flex-shrink-0" />
                  (903) 432-4808
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ElJacalitoSevenPointsTexas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sand-300 hover:text-chili-500 transition-colors"
                >
                  <Facebook size={18} className="text-terracotta-500 flex-shrink-0" />
                  Follow on Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-chili-500 font-display text-sm uppercase tracking-wider mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm font-body">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                <div className="text-sand-300">
                  <p>Mon-Thu: 10:30 AM - 9:30 PM</p>
                  <p>Fri: 10:30 AM - 10:30 PM</p>
                  <p>Sat: 8:00 AM - 10:30 PM</p>
                  <p>Sun: 8:00 AM - 9:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-bark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sand-400 text-xs font-body">
            &copy; {new Date().getFullYear()} El Jacalito — Cedar Creek Lake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
