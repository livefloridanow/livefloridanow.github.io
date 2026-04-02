import type { Metadata } from 'next';
import { neighborhoods } from '@/data/neighborhoods';
import ComingSoon from '@/components/ComingSoon';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return {};

  return {
    title: neighborhood.metaTitle,
    description: neighborhood.metaDescription,
    alternates: {
      canonical: `https://liveflnow.com/neighborhoods/${slug}`,
    },
    openGraph: {
      title: neighborhood.metaTitle,
      description: neighborhood.metaDescription,
      url: `https://liveflnow.com/neighborhoods/${slug}`,
      type: 'website',
      siteName: 'LiveFloridaNow',
      images: [
        {
          url: neighborhood.heroImage,
          width: 1200,
          height: 630,
          alt: `Homes for sale in ${neighborhood.name}, Florida`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: neighborhood.metaTitle,
      description: neighborhood.metaDescription,
    },
  };
}

export default async function NeighborhoodPage() {
  return <ComingSoon />;
}
