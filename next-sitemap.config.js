/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://liveflnow.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  additionalPaths: async (config) => {
    const neighborhoods = [
      'orlando', 'sanford', 'lake-mary', 'oviedo',
      'winter-park', 'kissimmee', 'clermont', 'apopka',
    ];
    const listings = [
      'cozy-bungalow-in-sanford',
      'modern-townhome-in-lake-mary',
      'lakefront-estate-in-orlando',
      'family-home-in-oviedo',
      'charming-cottage-in-winter-park',
      'spacious-retreat-in-clermont',
    ];

    const paths = [];

    // Homepage
    paths.push({
      loc: '/',
      changefreq: 'daily',
      priority: 1.0,
    });

    // Neighborhood pages
    for (const slug of neighborhoods) {
      paths.push({
        loc: `/neighborhoods/${slug}`,
        changefreq: 'weekly',
        priority: 0.9,
      });
    }

    // Properties index
    paths.push({
      loc: '/properties',
      changefreq: 'daily',
      priority: 0.8,
    });

    // Individual listings
    for (const slug of listings) {
      paths.push({
        loc: `/properties/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
      });
    }

    // Static pages
    const staticPages = [
      { loc: '/about', changefreq: 'monthly', priority: 0.7 },
      { loc: '/neighborhoods', changefreq: 'weekly', priority: 0.8 },
      { loc: '/testimonials', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
      { loc: '/blog', changefreq: 'weekly', priority: 0.8 },
      { loc: '/buyers-guide', changefreq: 'monthly', priority: 0.7 },
      { loc: '/sellers-guide', changefreq: 'monthly', priority: 0.7 },
    ];

    paths.push(...staticPages);

    return paths;
  },
};
