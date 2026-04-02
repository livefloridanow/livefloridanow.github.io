'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headlineLines = ['Your Next Move,', 'Guided Locally.'];
const subheadlinePhrases = ['Local knowledge.', 'Honest guidance.', 'Real results.'];

/* ── Headline line — blur/color animation ── */
function HeadlineLine({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.span
      className="hero__headline-line block"
      style={{ letterSpacing: 'var(--tracking-tight)' }}
      initial={{ opacity: 0, filter: 'blur(8px)', color: 'var(--color-accent)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', color: 'var(--color-background)' }}
      transition={{
        opacity: { duration: 0.6, delay, ease: EASE },
        filter: { duration: 1.0, delay, ease: EASE },
        color: { duration: 0.8, delay: delay + 0.6, ease: 'easeOut' },
      }}
    >
      {text}
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section className="hero relative w-screen h-screen overflow-hidden">
      {/* Background image with Ken Burns */}
      <motion.div
        className="hero__image absolute inset-0"
        initial={{ scale: 1.0 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 12, ease: 'easeOut' }}
      >
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Florida home with pool at golden hour in Central Florida"
          fill
          priority
          quality={80}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Film grain overlay */}
      <div
        className="hero__grain absolute inset-0 z-1 pointer-events-none mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Overlay layer 1 — cinematic vignette */}
      <div
        className="hero__overlay absolute inset-0 z-2"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.55) 100%)',
        }}
      />
      {/* Overlay layer 2 — left-side feather */}
      <div
        className="hero__overlay absolute inset-0 z-2"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)',
        }}
      />

      {/* Content — centered */}
      <div
        className="hero__content absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        style={{
          maxWidth: 'var(--container-max)',
          paddingLeft: 'var(--container-px-mobile)',
          paddingRight: 'var(--container-px-mobile)',
        }}
      >
        {/* Gold rule */}
        <motion.div
          className="hero__rule origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: EXPO }}
          style={{
            width: 60,
            height: 1,
            background: 'var(--color-accent)',
            marginBottom: 'var(--space-2)',
          }}
        />

        {/* Credential byline */}
        <motion.p
          className="hero__credential type-label whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          style={{
            color: 'rgba(250, 250, 248, 0.85)',
            marginBottom: 'var(--space-2)',
          }}
        >
          Serving Central Florida
        </motion.p>

        {/* Headline */}
        <h1
          className="hero__headline font-serif font-light text-left"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, var(--text-7xl))',
            lineHeight: 'var(--leading-tight)',
          }}
        >
          <HeadlineLine text={headlineLines[0]} delay={0.7} />
          <HeadlineLine text={headlineLines[1]} delay={0.9} />
        </h1>

        {/* Subtext */}
        <p
          className="hero__subtext type-body-sm text-left"
          style={{
            marginTop: 'var(--space-3)',
            letterSpacing: 'var(--tracking-wide)',
            textTransform: 'uppercase',
            color: 'rgba(250, 250, 248, 0.90)',
            fontSize: 'clamp(0.75rem, 1.5vw, var(--text-lg))',
          }}
        >
          {subheadlinePhrases.map((phrase, i) => (
            <span key={i}>
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 + i * 0.15, ease: EASE }}
              >
                {phrase}
              </motion.span>
              {i < subheadlinePhrases.length - 1 && <span className="inline-block">&nbsp;</span>}
            </span>
          ))}
        </p>

        {/* CTAs */}
        <motion.div
          className="hero__ctas flex flex-col md:flex-row items-start w-fit"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: EASE }}
          style={{ marginTop: 'var(--space-3)', gap: 'var(--space-2)' }}
        >
          <Link
            href="/properties"
            className="hero__cta-primary type-label inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: 'var(--color-dark)',
              padding: '0.875rem 2rem',
              borderRadius: 'var(--radius-sm)',
              width: 'fit-content',
              fontWeight: 'var(--weight-medium)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(184,169,138,0.85)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-accent)')}
          >
            View Properties
          </Link>
          <Link
            href="/contact"
            className="hero__cta-secondary type-label inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: 'transparent',
              color: 'var(--color-background)',
              padding: '0.875rem 2rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(250,250,248,0.70)',
              width: 'fit-content',
              fontWeight: 'var(--weight-medium)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(250,250,248,0.9)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(250,250,248,0.70)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Let&apos;s Talk
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
