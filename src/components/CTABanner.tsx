'use client';

import Image from 'next/image';
import Link from 'next/link';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';

export default function CTABanner() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
        alt="Beautiful Florida home at golden hour"
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/60" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-6 leading-tight">
            Ready to Make Your Move?
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <a
            href={agent.phoneTel}
            className="text-3xl md:text-4xl font-serif font-bold text-accent hover:text-accent-dark transition-colors block mb-10"
          >
            {agent.phone}
          </a>
        </FadeIn>
        <FadeIn delay={0.25}>
          <Link
            href="/contact"
            className="btn-shimmer inline-flex items-center justify-center px-10 py-4 text-sm uppercase tracking-[0.12em] font-medium rounded-sm bg-accent text-white hover:bg-accent-dark transition-colors"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
