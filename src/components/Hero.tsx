'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Fallback static image for slow connections */}
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80"
        alt="Luxury Florida home at golden hour in Central Florida"
        fill
        priority
        quality={80}
        className="object-cover"
        sizes="100vw"
      />

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-neighborhood-in-a-luxury-community-4028-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Bottom-weighted dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] tracking-tight mb-8"
        >
          Your Central Florida
          <br />
          Real Estate Expert
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-white/90 mb-12 font-light tracking-wide"
        >
          Local knowledge. Honest guidance. Real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/properties"
            className="btn-shimmer inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            View Properties
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator — thin pulsing line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-sans">
          Scroll
        </span>
        <div className="scroll-indicator-line" />
      </motion.div>
    </section>
  );
}
