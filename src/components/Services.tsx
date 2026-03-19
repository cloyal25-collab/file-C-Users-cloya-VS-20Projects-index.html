const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="22" height="16" rx="2"/>
        <path d="M9 21L14 25L19 21"/>
        <path d="M9 11H19M9 15H15"/>
      </svg>
    ),
    title: 'Website Revamp',
    description:
      'We take your outdated site and rebuild it from the ground up — modern design, fast load times, and built to convert visitors into paying customers.',
    highlight: 'Most popular',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="14" cy="14" r="11"/>
        <path d="M14 3C14 3 10 9 10 14C10 19 14 25 14 25"/>
        <path d="M14 3C14 3 18 9 18 14C18 19 14 25 14 25"/>
        <path d="M3 14H25"/>
      </svg>
    ),
    title: 'Mobile-First Design',
    description:
      'Over 60% of your customers find you on their phone. We ensure your site looks stunning and functions perfectly on every screen size.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 4L17 10L24 11L19 16L20 23L14 20L8 23L9 16L4 11L11 10L14 4Z"/>
      </svg>
    ),
    title: 'SEO Foundation',
    description:
      'Every site we build comes with proper meta tags, structured data, and Google-ready optimization so local customers can find you when it matters.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20L10 14L14 18L20 10L24 14"/>
        <path d="M20 10H24V14"/>
      </svg>
    ),
    title: 'Free Website Audit',
    description:
      'Not sure where to start? We'll review your current site and give you a clear picture of what's hurting your online presence — completely free.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="3" width="12" height="16" rx="1.5"/>
        <path d="M17 8H23L23 25H8V19"/>
        <path d="M9 9H13M9 13H13"/>
      </svg>
    ),
    title: 'Content Refresh',
    description:
      'We update your copy, imagery, and messaging to match your brand today — not the version of your business from five years ago.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 4V14L20 20"/>
        <circle cx="14" cy="14" r="10"/>
      </svg>
    ),
    title: 'Fast Turnaround',
    description:
      'We deliver a working draft within 48 hours so you can see real progress fast and start getting feedback from your customers sooner.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lumina-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Everything your website needs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From a full rebuild to a targeted refresh, we give local businesses the digital presence they deserve.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-gray-50 hover:bg-white border border-gray-100 hover:border-lumina-200 rounded-2xl p-7 card-hover"
            >
              {service.highlight && (
                <span className="absolute top-5 right-5 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              )}
              <div className="text-lumina-500 mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
