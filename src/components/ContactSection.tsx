'use client';

import { Phone, Mail, ExternalLink } from 'lucide-react';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';

export default function ContactSection() {
  return (
    <section className="py-28 lg:py-36" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-muted mb-4 font-sans">
            Contact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-center mb-16">
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact info */}
          <FadeIn delay={0.2}>
            <div>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Ready to take the next step? Reach out to Derek directly or
                fill out the form and he&apos;ll get back to you within 24
                hours.
              </p>

              <div className="space-y-5">
                <a
                  href={agent.phoneTel}
                  className="flex items-center gap-3 text-foreground hover:text-accent-text transition-colors"
                >
                  <Phone size={18} className="text-accent" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="flex items-center gap-3 text-foreground hover:text-accent-text transition-colors"
                >
                  <Mail size={18} className="text-accent" />
                  {agent.email}
                </a>
                <a
                  href={agent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-accent-text transition-colors"
                >
                  <ExternalLink size={18} className="text-accent" />
                  facebook.com/DBsells
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          {/* TODO: Wire form to Resend or Formspree */}
          <FadeIn delay={0.3}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Implement form submission
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  I&apos;m interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                >
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="both">Buying &amp; Selling</option>
                  <option value="investing">Real Estate Investing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.12em] font-medium rounded-sm bg-accent text-white hover:bg-accent-dark transition-colors"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
