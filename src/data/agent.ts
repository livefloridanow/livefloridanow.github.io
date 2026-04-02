export const agent = {
  name: 'Derek Beauchesne',
  title: 'REALTOR\u00AE',
  phone: '(407) 937-9231',
  phoneTel: 'tel:+14079379231',
  email: 'derek@liveflnow.com',
  website: 'https://liveflnow.com',
  facebook: 'https://www.facebook.com/DBsells/',
  areaServed: 'Greater Central Florida',
  cities: [
    'Orlando, FL',
    'Sanford, FL',
    'Lake Mary, FL',
    'Oviedo, FL',
    'Winter Park, FL',
    'Kissimmee, FL',
    'Clermont, FL',
    'Apopka, FL',
  ],
  // TODO: Replace with actual headshot URL once available
  headshotUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  bio: [
    'Derek Beauchesne is a licensed REALTOR\u00AE serving buyers and sellers across Greater Central Florida. With deep roots in the Orlando area, Derek brings genuine local knowledge and a client-first approach to every transaction.',
    'Unlike large teams where you get handed off to junior agents, Derek works directly with every client from first showing to closing table. His honest, no-pressure style has earned him a reputation as one of Central Florida\'s most trusted independent agents.',
    'Whether you\'re buying your first home in Sanford, selling a family property in Winter Park, or investing in Clermont\'s booming market, Derek provides the personalized guidance that only a dedicated local REALTOR\u00AE can deliver.',
  ],
  // TODO: Add broker name and license numbers once confirmed
  brokerDisclosure:
    'Derek Beauchesne is a licensed real estate sales associate in the State of Florida. [BROKER NAME \u2014 TODO] is a licensed real estate broker. All information is deemed reliable but not guaranteed. Equal Housing Opportunity.',
  stats: {
    homesSold: 100, // TODO: Replace with actual number
    yearsExperience: 8, // TODO: Replace with actual number
    fiveStarReviews: 50, // TODO: Replace with actual number
    areasServed: 8,
  },
} as const;
