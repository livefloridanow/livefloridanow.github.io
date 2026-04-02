'use client';

import Link from 'next/link';
import { listings } from '@/data/listings';
import ListingCard from './ListingCard';
import FadeIn from './FadeIn';
import { StaggerChildren, StaggerItem } from './FadeIn';

export default function ListingsGrid() {
  const featured = listings.filter((l) => l.featured).slice(0, 6);

  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-muted mb-4 font-sans">
            Featured Listings
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-center mb-16">
            Central Florida Properties
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featured.map((listing) => (
            <StaggerItem key={listing.slug}>
              <ListingCard listing={listing} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn className="text-center mt-16">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.12em] font-medium rounded-full bg-dark text-white hover:bg-foreground transition-colors"
          >
            View All Properties
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
