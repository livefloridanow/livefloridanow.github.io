'use client';

import FadeIn from './FadeIn';
import Container from './ui/Container';
import Button from './ui/Button';

export default function CTABanner() {
  return (
    <section
      className="cta-banner relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: 560,
        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="cta-banner__overlay absolute inset-0 bg-gradient-to-r from-black/75 to-black/60" />

      <Container className="cta-banner__content relative z-10 text-center text-white max-w-3xl">
        <FadeIn>
          <h2 className="cta-banner__heading type-h2 text-white" style={{ marginBottom: 'var(--space-3)' }}>
            Ready to Make Your Move?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Button href="/contact" variant="primary" size="md" className="cta-banner__button">
            Get in Touch
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
