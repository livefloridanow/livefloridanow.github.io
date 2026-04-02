import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import type { Listing } from '@/data/listings';

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/properties/${listing.slug}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-out">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.images[0]}
            alt={`Home for sale at ${listing.address}, ${listing.city}, Florida`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          <div className="text-2xl font-serif font-semibold text-foreground">
            {formatPrice(listing.price)}
          </div>
          <p className="text-sm text-muted mt-1">
            {listing.address}, {listing.city}, FL
          </p>
          <p className="mt-3 text-xs text-muted tracking-wide">
            {listing.beds} bd &middot; {listing.baths} ba &middot;{' '}
            {listing.sqft.toLocaleString()} sf
          </p>
        </div>
      </div>
    </Link>
  );
}
