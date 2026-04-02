import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaOrg, { getGlobalSchemas } from '@/components/SchemaOrg';

// Font CSS variables are defined in globals.css using system font stacks.
// To use Google Fonts in production (with network access), uncomment and replace:
//   import { Cormorant_Garamond, Inter } from 'next/font/google';
//   const cormorant = Cormorant_Garamond({ variable: '--font-cormorant', subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap' });
//   const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });
// Then add `${cormorant.variable} ${inter.variable}` to the <html> className.

export const metadata: Metadata = {
  metadataBase: new URL('https://liveflnow.com'),
  title:
    'Derek Beauchesne, REALTOR\u00AE | Central Florida Real Estate | LiveFloridaNow',
  description:
    'Looking for a trusted REALTOR\u00AE in Central Florida? Derek Beauchesne helps buyers and sellers in Orlando, Sanford, Lake Mary and surrounding areas.',
  alternates: {
    canonical: 'https://liveflnow.com',
  },
  openGraph: {
    title:
      'Derek Beauchesne, REALTOR\u00AE | Central Florida Real Estate | LiveFloridaNow',
    description:
      'Looking for a trusted REALTOR\u00AE in Central Florida? Derek Beauchesne helps buyers and sellers in Orlando, Sanford, Lake Mary and surrounding areas.',
    url: 'https://liveflnow.com',
    siteName: 'LiveFloridaNow',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80', // TODO: Replace with real OG image
        width: 1200,
        height: 630,
        alt: 'Derek Beauchesne - Central Florida REALTOR\u00AE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Derek Beauchesne, REALTOR\u00AE | Central Florida Real Estate | LiveFloridaNow',
    description:
      'Looking for a trusted REALTOR\u00AE in Central Florida? Derek Beauchesne helps buyers and sellers in Orlando, Sanford, Lake Mary and surrounding areas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = getGlobalSchemas();

  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        {schemas.map((schema, i) => (
          <SchemaOrg key={i} schema={schema} />
        ))}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
