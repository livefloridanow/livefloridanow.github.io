'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headlineLines = ['Find Your Home.', 'Live Florida.'];

const subheadlineWords =
  'Local knowledge. Honest guidance. Real results.'.split(' ');

/* ── Clip-reveal line ── */
function ClipLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.4, delay, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/*
        TODO: Drop a scenic Florida video into /public/hero-video.mp4
        Recommended: aerial neighborhood flyover, waterfront homes,
        palm tree-lined streets, or golden hour suburb footage.
        Until then, the poster image shows as a static hero background.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay layer 1 — cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.25) 100%)',
        }}
      />
      {/* Overlay layer 2 — left-side feather for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 60%)',
        }}
      />

      {/* Content — bottom-left anchored */}
      <div
        className="absolute z-10"
        style={{
          bottom: 'max(10%, 120px)',
          left: 0,
          paddingLeft: 'clamp(1.5rem, 6vw, 7rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 40%)',
          maxWidth: '1100px',
        }}
      >
        {/* Gold rule — animates first */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0, ease: EXPO }}
          className="origin-left mb-5"
          style={{ width: 60, height: 1, background: '#B8A98A' }}
        />

        {/* Credential byline — animates second */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          className="text-left font-sans mb-6"
          style={{
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(250, 250, 248, 0.55)',
          }}
        >
          Central Florida &nbsp;&middot;&nbsp; Licensed REALTOR&reg;
          &nbsp;&middot;&nbsp; liveflnow.com
        </motion.p>

        {/* Headline — clip reveal */}
        <h1
          className="font-serif font-light text-background text-left"
          style={{
            fontSize: 'clamp(2.75rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}
        >
          <ClipLine text={headlineLines[0]} delay={0.7} />
          <ClipLine text={headlineLines[1]} delay={0.85} />
        </h1>

        {/* Subtext — word-by-word fade */}
        <p
          className="text-left font-sans font-light mt-6"
          style={{
            fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(250, 250, 248, 0.65)',
          }}
        >
          {subheadlineWords.map((word, i) => (
            <span key={i}>
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + i * 0.08,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
              {i < subheadlineWords.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </p>

        {/* CTAs — fade up */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: EASE }}
          className="flex flex-col md:flex-row items-start gap-4 mt-10"
        >
          <Link
            href="/properties"
            className="inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: '#B8A98A',
              color: '#1A1A1A',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.875rem 2rem',
              borderRadius: '4px',
              width: 'fit-content',
              minWidth: 160,
              maxWidth: 280,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = 'rgba(184,169,138,0.85)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = '#B8A98A')
            }
          >
            View Properties
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: 'transparent',
              color: '#FAFAF8',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.875rem 2rem',
              borderRadius: '4px',
              border: '1px solid rgba(250,250,248,0.45)',
              width: 'fit-content',
              minWidth: 160,
              maxWidth: 280,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(250,250,248,0.9)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(250,250,248,0.45)';
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
