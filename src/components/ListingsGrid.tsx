'use client';

import Link from 'next/link';
import { listings } from '@/data/listings';
import ListingCard from './ListingCard';
import FadeIn from './FadeIn';
import { StaggerChildren, StaggerItem } from './FadeIn';
import Container from './ui/Container';

export default function ListingsGrid() {
  const featured = listings.filter((l) => l.featured).slice(0, 6);

  return (
    <section className="listings section bg-surface">
      <Container>
        <FadeIn>
          <p className="listings__label type-label text-muted text-center" style={{ marginBottom: 'var(--space-2)' }}>
            Featured Listings
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="listings__heading type-h2 text-foreground text-center" style={{ marginBottom: 'var(--space-5)' }}>
            Central Florida Properties
          </h2>
        </FadeIn>

        <StaggerChildren className="listings__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--space-3)' }}>
          {featured.map((listing) => (
            <StaggerItem key={listing.slug}>
              <ListingCard listing={listing} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="listings__cta text-center" style={{ marginTop: 'var(--space-5)' }}>
          <Link
            href="/properties"
            className="type-label inline-flex items-center justify-center bg-dark text-white hover:bg-foreground transition-colors"
            style={{
              padding: '0.875rem 2rem',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 'var(--weight-medium)',
            }}
          >
            View All Properties
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
