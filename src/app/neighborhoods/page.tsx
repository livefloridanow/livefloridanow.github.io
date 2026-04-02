import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Central Florida Neighborhoods | Derek Beauchesne, REALTOR\u00AE',
  description:
    'Explore neighborhoods across Central Florida. Find homes for sale in Orlando, Sanford, Lake Mary, Oviedo, Winter Park, Kissimmee, Clermont, and Apopka.',
  path: '/neighborhoods',
});

export default function NeighborhoodsPage() {
  return <ComingSoon />;
}
