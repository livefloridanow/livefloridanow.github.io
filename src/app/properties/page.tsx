import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Central Florida Homes for Sale | Derek Beauchesne, REALTOR\u00AE',
  description:
    'Browse homes for sale across Central Florida. Derek Beauchesne helps buyers find properties in Orlando, Sanford, Lake Mary, Oviedo, Winter Park, and more.',
  path: '/properties',
});

export default function PropertiesPage() {
  return <ComingSoon />;
}
