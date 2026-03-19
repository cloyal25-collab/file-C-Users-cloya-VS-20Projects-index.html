export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lumina-gradient flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" fill="white" fillOpacity="0.9"/>
                <path d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z" fill="white" fillOpacity="0.4"/>
              </svg>
            </div>
            <span className="font-bold text-xl">Lumina</span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-8">
            {['Services', 'Process', 'Why Us', 'Contact'].map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Credit */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
