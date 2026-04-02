'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headlineLines = ['Home Is Waiting.', 'Central Florida.'];

const subheadlineWords =
  'Local knowledge. Honest guidance. Real results.'.split(' ');

/* ── Headline line — blur/spacing/color animation ── */
function HeadlineLine({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.span
      className="block"
      initial={{
        opacity: 0,
        letterSpacing: '0.15em',
        filter: 'blur(8px)',
        color: '#B8A98A',
      }}
      animate={{
        opacity: 1,
        letterSpacing: '-0.02em',
        filter: 'blur(0px)',
        color: '#FAFAF8',
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: EASE },
        letterSpacing: { duration: 1.2, delay, ease: EASE },
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
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background image with Ken Burns slow zoom */}
      <motion.div
        className="absolute inset-0"
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

      {/* Film grain overlay — CSS only */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Overlay layer 1 — cinematic vignette */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.25) 100%)',
        }}
      />
      {/* Overlay layer 2 — left-side feather */}
      <div
        className="absolute inset-0 z-[2]"
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
          className="text-left font-sans mb-6 whitespace-nowrap"
          style={{
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(250, 250, 248, 0.78)',
          }}
        >
          Central Florida &nbsp;&middot;&nbsp; Licensed REALTOR&reg;
          &nbsp;&middot;&nbsp; liveflnow.com
        </motion.p>

        {/* Headline — blur/spacing/color reveal */}
        <h1
          className="font-serif font-light text-left"
          style={{
            fontSize: 'clamp(2.75rem, 8vw, 7rem)',
            lineHeight: 0.95,
          }}
        >
          <HeadlineLine text={headlineLines[0]} delay={0.7} />
          <HeadlineLine text={headlineLines[1]} delay={0.9} />
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
                  delay: 1.6 + i * 0.08,
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
          transition={{ duration: 0.8, delay: 2.3, ease: EASE }}
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
