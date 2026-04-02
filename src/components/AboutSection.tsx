'use client';

import Image from 'next/image';
import Link from 'next/link';
import { agent } from '@/data/agent';
import FadeIn from './FadeIn';

export default function AboutSection() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image — editorial treatment */}
        <FadeIn className="relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10">
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
        <div>
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-4 font-sans">
              Work With Derek
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-[1.15] mb-10">
              Real estate feels different when you&apos;re working with someone
              who&apos;s actually involved
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Derek works directly with you from your first question through
              closing day. You won&apos;t be passed off to a team or
              assistant, just one agent who stays involved every step of the
              way.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <blockquote className="relative my-10 pl-8 py-4">
              {/* Gold accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #B8A98A, #B8A98A00)' }}
              />
              {/* Gold open-quote mark */}
              <span
                className="absolute -top-2 left-4 text-5xl font-serif leading-none select-none"
                style={{ color: 'rgba(184, 169, 138, 0.35)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="text-foreground font-serif italic text-xl leading-relaxed">
                I got into real estate because I love this area and I love
                helping people find their place in it. That hasn&apos;t changed.
              </p>
              <footer className="mt-3 text-sm text-muted font-sans not-italic">
                &mdash; Derek Beauchesne
              </footer>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-muted text-lg leading-relaxed mb-10">
              As a Central Florida local, he brings real, day-to-day
              knowledge of the area to every conversation, not just what
              you&apos;ll find in listings.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <Link
              href="/about"
              className="text-accent-text font-medium hover:text-foreground transition-colors tracking-wide text-sm uppercase"
            >
              Get to Know Derek &rarr;
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
