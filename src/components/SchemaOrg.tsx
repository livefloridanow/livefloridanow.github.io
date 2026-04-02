interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function getGlobalSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['RealEstateAgent', 'Person'],
      name: 'Derek Beauchesne',
      jobTitle: 'REALTOR\u00AE',
      url: 'https://liveflnow.com',
      telephone: '+1-407-937-9231',
      email: 'derek@liveflnow.com',
      sameAs: ['https://www.facebook.com/DBsells/'],
      areaServed: [
        'Orlando, FL',
        'Sanford, FL',
        'Lake Mary, FL',
        'Oviedo, FL',
        'Winter Park, FL',
        'Kissimmee, FL',
        'Clermont, FL',
        'Apopka, FL',
      ],
      knowsAbout: [
        'Residential Real Estate',
        'Home Buying',
        'Home Selling',
        'Central Florida Real Estate',
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', // TODO: Replace with actual headshot URL
      description:
        'Derek Beauchesne is a licensed REALTOR\u00AE serving buyers and sellers across Greater Central Florida.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'LiveFloridaNow',
      telephone: '+1-407-937-9231',
      email: 'derek@liveflnow.com',
      url: 'https://liveflnow.com',
      areaServed: 'Greater Central Florida',
      priceRange: '$$',
      sameAs: ['https://www.facebook.com/DBsells/'],
    },
  ];
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://liveflnow.com${item.path}`,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
