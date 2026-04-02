'use client';

import { Phone, Mail, ExternalLink, Clock, MessageCircle } from 'lucide-react';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';
import Container from './ui/Container';

export default function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <Container>
        <FadeIn>
          <p className="type-label text-muted text-center" style={{ marginBottom: 'var(--space-2)' }}>
            Contact
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="type-h2 text-foreground text-center" style={{ marginBottom: 'var(--space-5)' }}>
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <div className="contact__grid grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--space-8)' }}>
          {/* Contact info */}
          <FadeIn delay={0.2}>
            <div className="contact__info">
              <p className="type-body text-muted" style={{ marginBottom: 'var(--space-3)' }}>
                Have a question or want to talk through your options? Feel
                free to reach out. I respond to every message personally,
                usually within a few hours.
              </p>

              <p className="type-body text-muted" style={{ marginBottom: 'var(--space-5)' }}>
                Whether it&apos;s a quick question about a neighborhood or
                you&apos;re ready to start your home search, I&apos;m happy
                to help. No pressure, no obligation, just clear,
                straightforward guidance on your timeline, including
                evenings and weekends.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <a
                  href={agent.phoneTel}
                  className="contact__info-item flex items-center text-foreground hover:text-accent-text transition-colors"
                  style={{ gap: 'var(--space-1)' }}
                >
                  <Phone size={18} className="text-accent" />
                  {agent.phone}
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="contact__info-item flex items-center text-foreground hover:text-accent-text transition-colors"
                  style={{ gap: 'var(--space-1)' }}
                >
                  <Mail size={18} className="text-accent" />
                  {agent.email}
                </a>
                <a
                  href={agent.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__info-item flex items-center text-foreground hover:text-accent-text transition-colors"
                  style={{ gap: 'var(--space-1)' }}
                >
                  <ExternalLink size={18} className="text-accent" />
                  facebook.com/DBsells
                </a>
              </div>

              <div className="contact__note border-t border-border" style={{ paddingTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <div className="type-body-sm text-muted flex items-start" style={{ gap: 'var(--space-1)' }}>
                  <Clock size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Typical response time: under 2 hours during business hours</span>
                </div>
                <div className="type-body-sm text-muted flex items-start" style={{ gap: 'var(--space-1)' }}>
                  <MessageCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Call, text, or email, whatever works best for you</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          {/* TODO: Wire form to Resend or Formspree */}
          <FadeIn delay={0.3}>
            <form
              className="contact__form"
              onSubmit={(e) => { e.preventDefault(); }}
              style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}
            >
              <div className="contact__form-field">
                <label htmlFor="contact-name" className="contact__label type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="contact__input w-full bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                  style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--space-3)' }}>
                <div className="contact__form-field">
                  <label htmlFor="contact-email" className="contact__label type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="contact__input w-full bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                    style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
                <div className="contact__form-field">
                  <label htmlFor="contact-phone" className="contact__label type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="contact__input w-full bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow"
                    style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>
              </div>
              <div className="contact__form-field">
                <label htmlFor="contact-interest" className="contact__label type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                  I&apos;m interested in...
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className="contact__input w-full bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-shadow appearance-none"
                  style={{ padding: '0.875rem 2.5rem 0.875rem 1rem', borderRadius: 'var(--radius-md)', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6860' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center' }}
                >
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="both">Buying &amp; Selling</option>
                  <option value="investing">Real Estate Investing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact__form-field">
                <label htmlFor="contact-message" className="contact__label type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="contact__input w-full bg-surface text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none transition-shadow"
                  style={{ padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)' }}
                />
              </div>
              <button
                type="submit"
                className="contact__submit btn-shimmer type-label inline-flex items-center justify-center bg-accent text-white hover:bg-accent-dark transition-colors"
                style={{
                  padding: '1rem 2rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 'var(--weight-medium)',
                }}
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
