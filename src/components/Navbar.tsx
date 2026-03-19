import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-lumina-gradient flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Lumina
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-lumina-500 ${
                scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Get a Free Audit
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4L18 18M18 4L4 18"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 7H19M3 11H19M3 15H19"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent-500 text-white text-center font-semibold px-5 py-2.5 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
