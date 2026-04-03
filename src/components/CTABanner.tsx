'use client';

import Image from 'next/image';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';
import Container from './ui/Container';
import Button from './ui/Button';

export default function CTABanner() {
  return (
    <section className="cta-banner section relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Beautiful Florida home at golden hour"
        fill
        className="cta-banner__image object-cover"
        sizes="100vw"
      />
      <div className="cta-banner__overlay absolute inset-0 bg-gradient-to-r from-black/75 to-black/60" />

      <Container className="cta-banner__content relative z-10 text-center text-white max-w-3xl">
        <FadeIn>
          <h2 className="cta-banner__heading type-h2 text-white" style={{ marginBottom: 'var(--space-3)' }}>
            Ready to Make Your Move?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href={agent.phoneTel}
            className="cta-banner__phone font-serif text-accent hover:text-accent-dark transition-colors block"
            style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-5)', fontWeight: 'var(--weight-semibold)' }}
          >
            {agent.phone}
          </a>
        </FadeIn>
        <FadeIn delay={0.25}>
          <Button href="/contact" variant="primary" size="md" className="cta-banner__button">
            Get in Touch
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
