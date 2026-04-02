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
            {/* Warm tint overlay */}
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </div>
        </FadeIn>

        {/* Content */}
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-[1.15] mb-10">
              Real estate feels different when you&apos;re working with someone
              who&apos;s actually involved
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Derek isn&apos;t the kind of agent who hands things off once
              you&apos;re under contract. He&apos;s the one you&apos;ll hear
              from directly&nbsp;&mdash; whether that&apos;s answering a
              late-night question or helping you think through a decision.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            {/* Pullquote */}
            <blockquote className="border-l-2 border-accent pl-6 my-10">
              <p className="text-foreground font-serif italic text-xl leading-relaxed">
                &ldquo;Central Florida isn&apos;t just where he works&nbsp;&mdash;
                it&apos;s where he lives, so he knows the areas beyond what
                you&apos;ll find in listings.&rdquo;
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-muted text-lg leading-relaxed mb-10">
              He works one-on-one with every client from the first showing
              through closing. No teams, no assistants&nbsp;&mdash; just a
              straightforward, personal process.
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
