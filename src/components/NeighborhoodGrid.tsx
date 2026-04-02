'use client';

import Link from 'next/link';
import Image from 'next/image';
import { neighborhoods } from '@/data/neighborhoods';
import FadeIn from './FadeIn';
import { StaggerChildren, StaggerItem } from './FadeIn';
import Container from './ui/Container';

export default function NeighborhoodGrid() {
  return (
    <section className="neighborhoods section">
      <Container>
        <FadeIn>
          <p className="neighborhoods__label type-label text-muted text-center" style={{ marginBottom: 'var(--space-2)' }}>
            Neighborhoods
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="neighborhoods__heading type-h2 text-foreground text-center" style={{ marginBottom: 'var(--space-5)' }}>
            Find Your Community
          </h2>
        </FadeIn>

        <StaggerChildren className="neighborhoods__grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{ gap: 'var(--space-3)' }}>
          {neighborhoods.map((n) => (
            <StaggerItem key={n.slug}>
              <Link
                href={`/neighborhoods/${n.slug}`}
                className="neighborhood-card group relative aspect-[3/4] overflow-hidden block"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <Image
                  src={n.heroImage}
                  alt={`Homes and community in ${n.name}, Florida`}
                  fill
                  className="neighborhood-card__image object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="neighborhood-card__overlay absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: 'var(--space-3)' }}>
                  <h3 className="neighborhood-card__name text-white font-serif" style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)' }}>
                    {n.name}
                  </h3>
                  <p className="neighborhood-card__price type-caption text-white/80" style={{ marginTop: 'var(--space-1)' }}>
                    From {n.stats.medianPrice}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
