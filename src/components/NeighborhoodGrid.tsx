'use client';

import Link from 'next/link';
import Image from 'next/image';
import { neighborhoods } from '@/data/neighborhoods';
import FadeIn from './FadeIn';
import { StaggerChildren, StaggerItem } from './FadeIn';

export default function NeighborhoodGrid() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-muted mb-4 font-sans">
            Neighborhoods
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-center mb-16">
            Find Your Community
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {neighborhoods.map((n) => (
            <StaggerItem key={n.slug}>
              <Link
                href={`/neighborhoods/${n.slug}`}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden block"
              >
                <Image
                  src={n.heroImage}
                  alt={`Homes and community in ${n.name}, Florida`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                {/* Bottom-weighted gradient — editorial style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-serif font-semibold text-xl">
                    {n.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 tracking-wide">
                    From {n.stats.medianPrice}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
