import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to a backend or service like Formspree/EmailJS
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-lumina-gradient relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lumina-300/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="text-white">
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-widest">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight">
              Ready to light up your online presence?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Reach out and we'll give you a free, no-obligation audit of your current website. You'll walk away with a clear picture of what's working, what isn't, and how we can help.
            </p>
            <div className="space-y-5">
              {[
                { icon: '📧', label: 'Email', value: 'hello@lumina.agency' },
                { icon: '📍', label: 'Based in', value: 'Serving local businesses everywhere' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-wider">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">We're on it!</h3>
                <p className="text-gray-500">We'll be in touch within 24 hours with your free audit.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Get your free audit</h3>
                <p className="text-gray-500 text-sm mb-7">No cost, no commitment, no spam.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-400 focus:border-transparent"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Business Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Main St. Bakery"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-400 focus:border-transparent"
                        value={form.business}
                        onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@yourbusiness.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-400 focus:border-transparent"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-400 focus:border-transparent"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current website URL (if any)</label>
                    <textarea
                      rows={3}
                      placeholder="https://yoursite.com — or tell us a bit about your business"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-lumina-400 focus:border-transparent resize-none"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
                  >
                    Request My Free Audit →
                  </button>
                  <p className="text-center text-gray-400 text-xs">We respond within 24 hours. No spam, ever.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
