'use client';

import { Phone, Mail, ExternalLink, Clock, MessageCircle } from 'lucide-react';
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
              <p className="text-muted leading-relaxed mb-6">
                Have a question or want to talk through your options? Feel
                free to reach out. I respond to every message personally,
                usually within a few hours.
              </p>

              <p className="text-muted leading-relaxed mb-10">
                Whether it&apos;s a quick question about a neighborhood or
                you&apos;re ready to start your home search, I&apos;m happy
                to help. No pressure, no obligation, just clear,
                straightforward guidance on your timeline, including
                evenings and weekends.
              </p>

              <div className="space-y-5 mb-10">
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

              <div className="border-t border-foreground/10 pt-8 space-y-4">
                <div className="flex items-start gap-3 text-sm text-muted">
                  <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Typical response time: under 2 hours during business hours</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MessageCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Call, text, or email &mdash; whatever works best for you</span>
                </div>
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
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-[0.15em] font-medium text-muted mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs uppercase tracking-[0.15em] font-medium text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs uppercase tracking-[0.15em] font-medium text-muted mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-interest"
                  className="block text-xs uppercase tracking-[0.15em] font-medium text-muted mb-2"
                >
                  I&apos;m interested in...
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
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
                  htmlFor="contact-message"
                  className="block text-xs uppercase tracking-[0.15em] font-medium text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-lg border border-foreground/10 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none transition-shadow"
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
