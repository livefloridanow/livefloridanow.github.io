export interface Neighborhood {
  slug: string;
  name: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  stats: {
    medianPrice: string;
    avgDaysOnMarket: number;
    homesSoldLastYear: number;
  };
  relatedNeighborhoods: string[]; // slugs
}

// TODO: Expand each neighborhood intro with hyper-local content (schools, parks,
// commute times, price ranges, community events) — this is Derek's biggest SEO lever
export const neighborhoods: Neighborhood[] = [
  {
    slug: 'orlando',
    name: 'Orlando',
    state: 'FL',
    metaTitle: 'Homes for Sale in Orlando, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Orlando, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Orlando is much more than theme parks \u2014 it\'s a thriving metropolis with diverse neighborhoods, a booming job market, and some of the best real estate value in the Southeast. From the historic charm of College Park to the modern luxury of Lake Nona, Orlando offers something for every buyer.',
      'The Orlando real estate market continues to attract first-time buyers, growing families, and investors alike. With world-class dining, entertainment, and outdoor recreation, it\'s easy to see why so many people are choosing to call Orlando home.',
      'Whether you\'re looking for a downtown condo, a lakefront estate, or a family-friendly suburb, Derek Beauchesne can help you navigate the Orlando housing market with confidence and local insight.',
    ],
    stats: {
      medianPrice: '$385,000', // TODO: Update with current market data
      avgDaysOnMarket: 28,
      homesSoldLastYear: 1250,
    },
    relatedNeighborhoods: ['winter-park', 'oviedo', 'sanford'],
  },
  {
    slug: 'sanford',
    name: 'Sanford',
    state: 'FL',
    metaTitle: 'Homes for Sale in Sanford, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Sanford, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Sanford, FL is one of Central Florida\'s most charming and rapidly growing communities. With its beautifully restored historic downtown, scenic Riverwalk along Lake Monroe, and an incredible roster of local restaurants and breweries, Sanford offers a quality of life that\'s hard to beat.',
      'The Sanford real estate market is a favorite among first-time homebuyers and young professionals seeking character-filled homes at prices well below nearby Orlando and Winter Park. From craftsman bungalows in the Historic District to new construction in growing subdivisions, options abound.',
      'As a local Central Florida REALTOR\u00AE, Derek Beauchesne knows Sanford\'s streets, schools, and hidden gems. Whether you\'re buying your first home or selling a long-time family property, Derek is here to guide you every step of the way.',
    ],
    stats: {
      medianPrice: '$310,000',
      avgDaysOnMarket: 22,
      homesSoldLastYear: 680,
    },
    relatedNeighborhoods: ['lake-mary', 'orlando', 'oviedo'],
  },
  {
    slug: 'lake-mary',
    name: 'Lake Mary',
    state: 'FL',
    metaTitle: 'Homes for Sale in Lake Mary, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Lake Mary, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Lake Mary is consistently ranked among the best places to live in Florida, and for good reason. Excellent Seminole County schools, beautifully maintained neighborhoods, and a vibrant town center make Lake Mary ideal for families and professionals.',
      'The Lake Mary real estate market features everything from gated golf communities to modern townhomes near Colonial Town Park. With easy access to I-4, the SunRail, and major employers like Deloitte and AAA, Lake Mary is perfectly positioned for Central Florida commuters.',
      'Derek Beauchesne has helped numerous families find their dream home in Lake Mary. His deep knowledge of the local market, school zones, and community amenities ensures you\'ll find the right fit for your lifestyle and budget.',
    ],
    stats: {
      medianPrice: '$425,000',
      avgDaysOnMarket: 18,
      homesSoldLastYear: 520,
    },
    relatedNeighborhoods: ['sanford', 'oviedo', 'winter-park'],
  },
  {
    slug: 'oviedo',
    name: 'Oviedo',
    state: 'FL',
    metaTitle: 'Homes for Sale in Oviedo, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Oviedo, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Oviedo, FL offers the perfect blend of small-town charm and suburban convenience. Known for its top-rated Seminole County schools, abundant green spaces, and the quirky local tradition of sharing streets with wild chickens, Oviedo is a community like no other in Central Florida.',
      'Home buyers in Oviedo enjoy a range of options, from established neighborhoods like Alafaya Woods and Twin Rivers to newer communities with modern amenities. The Oviedo Mall area and nearby UCF campus provide shopping, dining, and entertainment.',
      'Derek Beauchesne is your trusted Central Florida REALTOR\u00AE for buying or selling in Oviedo. With firsthand knowledge of local HOAs, school zones, and market trends, Derek provides the personalized service that helps you make confident real estate decisions.',
    ],
    stats: {
      medianPrice: '$395,000',
      avgDaysOnMarket: 20,
      homesSoldLastYear: 450,
    },
    relatedNeighborhoods: ['orlando', 'sanford', 'lake-mary'],
  },
  {
    slug: 'winter-park',
    name: 'Winter Park',
    state: 'FL',
    metaTitle: 'Homes for Sale in Winter Park, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Winter Park, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Winter Park is one of Central Florida\'s most prestigious and sought-after communities. Tree-lined brick streets, the iconic Park Avenue shopping district, and a thriving arts and culture scene make Winter Park a truly special place to call home.',
      'The Winter Park real estate market features a stunning range of properties, from Mediterranean Revival estates near Rollins College to mid-century modern gems along the chain of lakes. While prices run higher than surrounding areas, the walkability, charm, and lifestyle are unmatched.',
      'Derek Beauchesne understands the nuances of Winter Park real estate \u2014 from pocket neighborhoods to historic preservation guidelines. Whether you\'re seeking a classic cottage or a modern new build, Derek\'s local expertise will help you find your perfect Winter Park home.',
    ],
    stats: {
      medianPrice: '$575,000',
      avgDaysOnMarket: 25,
      homesSoldLastYear: 380,
    },
    relatedNeighborhoods: ['orlando', 'oviedo', 'lake-mary'],
  },
  {
    slug: 'kissimmee',
    name: 'Kissimmee',
    state: 'FL',
    metaTitle: 'Homes for Sale in Kissimmee, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Kissimmee, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Kissimmee offers unbeatable value in the Central Florida real estate market. With its proximity to Walt Disney World, a revitalized downtown lakefront district, and a diverse, welcoming community, Kissimmee is an excellent choice for budget-conscious buyers and savvy investors.',
      'From new construction communities with resort-style amenities to established neighborhoods near the Kissimmee Lakefront, the housing market here provides options across every price point. Short-term rental investors also find strong opportunities near the tourism corridor.',
      'Derek Beauchesne helps buyers and sellers navigate the Kissimmee market with honest, straightforward guidance. Whether you\'re purchasing a vacation rental investment or finding your forever home, Derek\'s Central Florida expertise makes the process smooth and stress-free.',
    ],
    stats: {
      medianPrice: '$295,000',
      avgDaysOnMarket: 30,
      homesSoldLastYear: 890,
    },
    relatedNeighborhoods: ['orlando', 'clermont', 'sanford'],
  },
  {
    slug: 'clermont',
    name: 'Clermont',
    state: 'FL',
    metaTitle: 'Homes for Sale in Clermont, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Clermont, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Clermont, FL is one of Central Florida\'s fastest-growing cities, and it\'s easy to see why. Rolling hills, pristine lakes, and a growing roster of shops and restaurants have made Clermont a top destination for families seeking space, nature, and value.',
      'The Clermont real estate market features everything from master-planned communities with golf courses and pools to lakefront estates with breathtaking views. With easy access to the Florida Turnpike and Highway 27, Orlando is just a short commute away.',
      'Derek Beauchesne is your go-to Central Florida REALTOR\u00AE for Clermont real estate. His knowledge of the area\'s rapidly evolving market helps buyers find the right community and sellers price their homes competitively.',
    ],
    stats: {
      medianPrice: '$365,000',
      avgDaysOnMarket: 24,
      homesSoldLastYear: 720,
    },
    relatedNeighborhoods: ['kissimmee', 'orlando', 'apopka'],
  },
  {
    slug: 'apopka',
    name: 'Apopka',
    state: 'FL',
    metaTitle: 'Homes for Sale in Apopka, FL | Derek Beauchesne, REALTOR\u00AE',
    metaDescription:
      'Explore homes for sale in Apopka, FL. Derek Beauchesne is your local Central Florida real estate expert. Call 407-937-9231.',
    heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    intro: [
      'Apopka, known as the Indoor Foliage Capital of the World, is a hidden gem in the Central Florida real estate market. With its small-town feel, growing downtown, and proximity to Wekiwa Springs State Park, Apopka attracts buyers who want space and nature without sacrificing access to Orlando.',
      'Home buyers in Apopka enjoy some of the most competitive prices in the greater Orlando area. From established neighborhoods with mature landscaping to brand-new communities with modern floor plans, Apopka offers exceptional value for first-time buyers and growing families.',
      'Derek Beauchesne helps clients discover why Apopka is one of Central Florida\'s best-kept secrets. His honest approach and deep local knowledge ensure you\'ll find a home that fits your needs and your budget.',
    ],
    stats: {
      medianPrice: '$330,000',
      avgDaysOnMarket: 26,
      homesSoldLastYear: 540,
    },
    relatedNeighborhoods: ['orlando', 'clermont', 'sanford'],
  },
];
