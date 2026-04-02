import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import type { Listing } from '@/data/listings';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/properties/${listing.slug}`} className="listing-card block group">
      <div
        className="bg-white overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out"
        style={{ borderRadius: 'var(--radius-lg)' }}
      >
        <div className="listing-card__image relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={`Home for sale at ${listing.address}, ${listing.city}, Florida`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="listing-card__body" style={{ padding: 'var(--space-3)' }}>
          <div className="listing-card__price type-h4 text-foreground" style={{ fontWeight: 'var(--weight-semibold)' }}>
            {formatPrice(listing.price)}
          </div>
          <p className="listing-card__address type-body-sm text-muted" style={{ marginTop: 'var(--space-1)' }}>
            {listing.address}, {listing.city}, FL
          </p>
          <p className="listing-card__stats type-caption" style={{ marginTop: 'var(--space-1)' }}>
            {listing.beds} bd &middot; {listing.baths} ba &middot;{' '}
            {listing.sqft.toLocaleString()} sf
          </p>
        </div>
      </div>
    </Link>
  );
}
