import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Home Buyer\'s Guide | Central Florida | Derek Beauchesne, REALTOR\u00AE',
  description:
    'Your complete guide to buying a home in Central Florida. Tips, FAQs, and expert advice from Derek Beauchesne, your trusted Orlando-area REALTOR\u00AE.',
  path: '/buyers-guide',
});

export default function BuyersGuidePage() {
  return <ComingSoon />;
}
