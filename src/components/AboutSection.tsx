'use client';

import Image from 'next/image';
import Link from 'next/link';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';
import Container from './ui/Container';

export default function AboutSection() {
  return (
    <section className="about section">
      <Container className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 'var(--space-7)' }}>
        {/* Image */}
        <FadeIn className="about__image relative">
          <div className="relative aspect-[4/5] overflow-hidden shadow-2xl shadow-foreground/10" style={{ borderRadius: 'var(--radius-lg)' }}>
            <Image
              src={agent.headshotUrl}
              alt={`${agent.name}, Central Florida REALTOR\u00AE`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </div>
        </FadeIn>

        {/* Content */}
        <div className="about__content">
          <FadeIn>
            <p className="about__label type-label text-muted" style={{ marginBottom: 'var(--space-2)' }}>
              Work With Derek
            </p>
            <h2 className="about__heading type-h2 text-foreground" style={{ marginBottom: 'var(--space-3)' }}>
              Real estate feels different when you&apos;re working with someone
              who&apos;s actually involved
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="about__body type-body text-muted" style={{ marginBottom: 'var(--space-3)' }}>
              Derek works directly with you from your first question through
              closing day. You won&apos;t be passed off to a team or
              assistant, just one agent who stays involved every step of the way.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <blockquote className="about__pullquote relative py-4" style={{ paddingLeft: 'var(--space-4)', marginTop: 'var(--space-5)', marginBottom: 'var(--space-5)' }}>
              <div
                className="absolute left-0 top-0 bottom-0"
                style={{ width: 3, borderRadius: 'var(--radius-full)', background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
              />
              <span
                className="absolute -top-2 font-serif leading-none select-none"
                style={{ left: 'var(--space-2)', fontSize: 'var(--text-5xl)', color: 'rgba(184, 169, 138, 0.35)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-foreground font-serif italic" style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)' }}>
                I got into real estate because I love this area and I love
                helping people find their place in it. That hasn&apos;t changed.
              </p>
              <footer className="type-body-sm text-muted font-sans not-italic" style={{ marginTop: 'var(--space-1)' }}>
                &mdash; Derek Beauchesne
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="about__body type-body text-muted" style={{ marginBottom: 'var(--space-5)' }}>
              As a Central Florida local, he brings real, day-to-day
              knowledge of the area to every conversation, not just what
              you&apos;ll find in listings.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <Link
              href="/about"
              className="about__cta type-label text-accent-text hover:text-foreground transition-colors"
            >
              Get to Know Derek &rarr;
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
