import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Seller\'s Guide | Central Florida | Derek Beauchesne, REALTOR\u00AE',
  description:
    'Your complete guide to selling a home in Central Florida. Pricing strategy, staging tips, and expert advice from Derek Beauchesne, your Orlando-area REALTOR\u00AE.',
  path: '/sellers-guide',
});

export default function SellersGuidePage() {
  return <ComingSoon />;
}
