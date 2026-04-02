import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Central Florida Real Estate Blog | Market Updates | LiveFloridaNow',
  description:
    'Stay informed about the Central Florida real estate market. Tips for buyers and sellers in Orlando, Sanford, Lake Mary, and surrounding areas from Derek Beauchesne.',
  path: '/blog',
});

export default function BlogPage() {
  return <ComingSoon />;
}
