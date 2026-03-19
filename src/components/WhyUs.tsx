const reasons = [
  {
    icon: '🏪',
    title: 'Local Business Specialists',
    description:
      'We focus exclusively on local businesses. We understand your customers, your market, and what actually drives foot traffic and calls.',
  },
  {
    icon: '⚡',
    title: 'You See Results Quickly',
    description:
      "No months-long projects. You get a real, working draft in 48 hours — not wireframes or mockups, an actual website you can share.",
  },
  {
    icon: '💬',
    title: 'Plain-English Communication',
    description:
      "No jargon, no tech speak. We explain everything clearly so you always know what we're doing and why.",
  },
  {
    icon: '🎯',
    title: 'Built to Convert',
    description:
      "Pretty websites are nice. Websites that turn visitors into customers are better. Every decision we make is focused on your bottom line.",
  },
  {
    icon: '🔍',
    title: 'Honest Audits, No Upsells',
    description:
      "Your free audit is actually free — and honest. We'll only recommend what genuinely benefits your business.",
  },
  {
    icon: '🤝',
    title: 'Partnership Mentality',
    description:
      "We're building our reputation alongside your business. Your success is our portfolio. We're invested in getting this right.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-lumina-500 font-semibold text-sm uppercase tracking-widest">Why Lumina</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6">
              The gap is real — and we're here to close it.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Most local businesses have websites that are years behind. They lose potential customers every day to competitors with better-looking, faster, more trustworthy sites.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Lumina exists to fix that. We identified this gap in the market and built a service specifically designed to be accessible, fast, and effective for small and local businesses.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-lumina-600 hover:bg-lumina-700 text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              Start with a Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8H13M9 4L13 8L9 12"/>
              </svg>
            </a>
          </div>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map(reason => (
              <div key={reason.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{reason.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
