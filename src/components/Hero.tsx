export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-lumina-gradient overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-hero-mesh opacity-60" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-lumina-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Website Revamps for Local Businesses</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Your business deserves a website that{' '}
            <span className="text-accent-400">actually works.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            Lumina transforms outdated local business websites into modern, high-converting experiences — so you stop losing customers before they ever walk through the door.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-accent-500/30"
            >
              Get a Free Website Audit
            </a>
            <a
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
            >
              See What We Do
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-white/10">
            {[
              { stat: '48h', label: 'First draft delivered' },
              { stat: '100%', label: 'Local business focus' },
              { stat: '$0', label: 'Audit cost' },
            ].map(item => (
              <div key={item.stat}>
                <div className="text-3xl font-black text-white">{item.stat}</div>
                <div className="text-white/60 text-sm mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0 80H1440V40C1200 0 900 80 720 60C540 40 240 0 0 40V80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
