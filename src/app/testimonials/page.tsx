import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Client Testimonials | Derek Beauchesne, Central Florida REALTOR\u00AE',
  description:
    'Read what buyers and sellers across Central Florida say about working with Derek Beauchesne. Trusted real estate guidance in Orlando, Sanford, Lake Mary, and more.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return <ComingSoon />;
}
