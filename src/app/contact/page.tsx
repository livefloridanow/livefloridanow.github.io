import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import ComingSoon from '@/components/ComingSoon';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Derek Beauchesne | Central Florida REALTOR\u00AE | 407-937-9231',
  description:
    'Get in touch with Derek Beauchesne, your Central Florida REALTOR\u00AE. Call (407) 937-9231 or send a message for buying and selling in Orlando, Sanford, Lake Mary, and more.',
  path: '/contact',
});

export default function ContactPage() {
  return <ComingSoon />;
}
