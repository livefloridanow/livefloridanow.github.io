export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  type: 'buyer' | 'seller';
}

// TODO: Replace with real client testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & James M.',
    location: 'Sanford, FL',
    text: 'Derek made our first home purchase feel effortless. He knew Sanford inside and out and helped us find the perfect home in our budget. We never felt pressured \u2014 just genuinely supported the whole way.',
    type: 'buyer',
  },
  {
    id: 2,
    name: 'The Rodriguez Family',
    location: 'Lake Mary, FL',
    text: 'We sold our home in Lake Mary in under two weeks thanks to Derek\'s pricing strategy and marketing. He was honest about what to fix and what to leave alone, and that saved us thousands.',
    type: 'seller',
  },
  {
    id: 3,
    name: 'Michael T.',
    location: 'Orlando, FL',
    text: 'As an out-of-state investor, I needed someone I could trust to guide me through the Orlando market. Derek went above and beyond \u2014 from market analysis to connecting me with reliable contractors.',
    type: 'buyer',
  },
  {
    id: 4,
    name: 'Lisa & Brian K.',
    location: 'Oviedo, FL',
    text: 'Derek helped us sell our home in Oviedo and find our dream house in the same month. His knowledge of the local market and his calm, organized approach kept everything on track.',
    type: 'seller',
  },
  {
    id: 5,
    name: 'Amanda R.',
    location: 'Winter Park, FL',
    text: 'I\'ve worked with several agents in Central Florida, and Derek is by far the best. He\'s responsive, knowledgeable, and actually listens. He found me the perfect Winter Park cottage in a competitive market.',
    type: 'buyer',
  },
  {
    id: 6,
    name: 'David & Carla S.',
    location: 'Clermont, FL',
    text: 'Moving from up north to Clermont was a big decision. Derek spent hours on video calls helping us understand different neighborhoods before we even visited. When we arrived, he had the perfect homes lined up.',
    type: 'buyer',
  },
];
