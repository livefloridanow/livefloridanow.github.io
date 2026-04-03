'use client';

import { useSyncExternalStore } from 'react';
import FadeIn from './FadeIn';
import Container from './ui/Container';
import Button from './ui/Button';

const BG_URL = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80';

const subscribe = () => () => {};
const getSnapshot = () => {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent;
  return /Safari/.test(ua) && !/Chrome|CriOS|FxiOS|Edg/.test(ua);
};
const getServerSnapshot = () => false;

export default function CTABanner() {
  const isSafari = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <section
      className="cta-banner relative overflow-hidden flex items-center justify-center"
      style={{
        minHeight: 560,
        // Clip-path method for Safari, background-attachment for others
        ...(isSafari
          ? { clipPath: 'inset(0)' }
          : {
              backgroundImage: `url(${BG_URL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }),
      }}
    >
      {/* Safari: fixed-position image clipped by parent's clip-path */}
      {isSafari && (
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `url(${BG_URL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

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
