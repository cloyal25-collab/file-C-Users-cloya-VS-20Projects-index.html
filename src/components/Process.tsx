const steps = [
  {
    number: '01',
    title: 'Free Website Audit',
    description:
      "We review your current site, identify what's costing you customers, and walk you through exactly what needs to change — no strings attached.",
  },
  {
    number: '02',
    title: 'Proposal & Alignment',
    description:
      "You get a clear plan with scope, timeline, and pricing. We align on your goals and brand so there are no surprises.",
  },
  {
    number: '03',
    title: 'Design & Build',
    description:
      "Our team gets to work. You'll see a working draft within 48 hours, giving you a real preview you can share and gather feedback on.",
  },
  {
    number: '04',
    title: 'Review & Refine',
    description:
      "We incorporate your feedback through revision rounds until the site is exactly how you want it.",
  },
  {
    number: '05',
    title: 'Launch',
    description:
      "Your new site goes live. We handle the technical side so you can focus on running your business.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lumina-500 font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-5">
            Simple. Fast. Done right.
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Our process is built around making this easy for you — not requiring you to become a web expert.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-lumina-200 via-lumina-400 to-lumina-200 -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content card */}
                <div className="lg:w-5/12 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm card-hover">
                  <div className="text-4xl font-black text-lumina-100 mb-3">{step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>

                {/* Center node */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-12 h-12 bg-lumina-gradient rounded-full flex items-center justify-center shadow-lg shadow-lumina-500/30 flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
