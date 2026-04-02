import type { Metadata } from 'next';
import { listings } from '@/data/listings';
import ComingSoon from '@/components/ComingSoon';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = listings.find((l) => l.slug === slug);
  if (!listing) return {};

  return {
    title: listing.metaTitle,
    description: listing.metaDescription,
    alternates: {
      canonical: `https://liveflnow.com/properties/${slug}`,
    },
    openGraph: {
      title: listing.metaTitle,
      description: listing.metaDescription,
      url: `https://liveflnow.com/properties/${slug}`,
      type: 'website',
      images: [{ url: listing.images[0], width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: listing.metaTitle,
      description: listing.metaDescription,
    },
  };
}

export default async function ListingPage() {
  return <ComingSoon />;
}
