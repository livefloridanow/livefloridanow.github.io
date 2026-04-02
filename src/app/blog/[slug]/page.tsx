import type { Metadata } from 'next';
import ComingSoon from '@/components/ComingSoon';

// TODO: Create /src/data/posts.ts and populate with blog content
// TODO: Implement generateStaticParams() with post slugs
// TODO: Implement generateMetadata() per post

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // TODO: Return post slugs when blog content is added
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // TODO: Look up post by slug and return metadata
  return {
    title: `Blog Post | LiveFloridaNow`,
    description: 'Central Florida real estate insights from Derek Beauchesne.',
  };
}

export default async function BlogPostPage() {
  return <ComingSoon />;
}
