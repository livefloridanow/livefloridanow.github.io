import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Derek Beauchesne | Central Florida REALTOR\u00AE | LiveFloridaNow',
  description:
    'Learn about Derek Beauchesne, a trusted Central Florida REALTOR\u00AE helping buyers and sellers in Orlando, Sanford, Lake Mary, and surrounding areas.',
  path: '/about',
});

export default function AboutPage() {
  return <ComingSoon />;
}
