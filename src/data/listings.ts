export interface Listing {
  slug: string;
  address: string;
  city: string;
  neighborhood: string; // matches neighborhood slug
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  status: 'Active' | 'Pending' | 'Sold';
  featured: boolean;
  images: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
}

// TODO: Replace with real listing data or IDX integration
export const listings: Listing[] = [
  {
    slug: 'cozy-bungalow-in-sanford',
    address: '1234 Magnolia Ave',
    city: 'Sanford',
    neighborhood: 'sanford',
    price: 285000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80'],
    description:
      'Charming 3-bedroom bungalow in the heart of Historic Sanford. Updated kitchen, original hardwood floors, and a spacious backyard perfect for Florida living. Walking distance to downtown shops, restaurants, and the Sanford Riverwalk.',
    metaTitle: 'Cozy Bungalow in Sanford, FL | 3 Bed 2 Bath | Derek Beauchesne',
    metaDescription:
      'Charming 3-bed, 2-bath bungalow for sale in Historic Sanford, FL. Updated kitchen, hardwood floors, near downtown. Contact Derek Beauchesne at 407-937-9231.',
  },
  {
    slug: 'modern-townhome-in-lake-mary',
    address: '567 Colonial Dr',
    city: 'Lake Mary',
    neighborhood: 'lake-mary',
    price: 375000,
    beds: 3,
    baths: 2.5,
    sqft: 1850,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'],
    description:
      'Sleek modern townhome in one of Lake Mary\'s top-rated communities. Open-concept living, granite countertops, and a private two-car garage. Minutes from Colonial Town Park and top-rated Seminole County schools.',
    metaTitle: 'Modern Townhome in Lake Mary, FL | 3 Bed 2.5 Bath | Derek Beauchesne',
    metaDescription:
      'Modern 3-bed townhome for sale in Lake Mary, FL. Open concept, granite counters, near top schools. Call Derek Beauchesne at 407-937-9231.',
  },
  {
    slug: 'lakefront-estate-in-orlando',
    address: '8901 Lake Nona Blvd',
    city: 'Orlando',
    neighborhood: 'orlando',
    price: 649000,
    beds: 5,
    baths: 3.5,
    sqft: 3200,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'],
    description:
      'Stunning lakefront estate in the prestigious Lake Nona area of Orlando. Soaring ceilings, gourmet kitchen, saltwater pool, and private dock. This is Florida living at its finest, minutes from Medical City and the 417.',
    metaTitle: 'Lakefront Estate in Orlando, FL | 5 Bed 3.5 Bath | Derek Beauchesne',
    metaDescription:
      'Luxury 5-bed lakefront home for sale in Orlando, FL. Pool, dock, gourmet kitchen. Contact Derek Beauchesne, Central Florida REALTOR\u00AE, at 407-937-9231.',
  },
  {
    slug: 'family-home-in-oviedo',
    address: '2345 Alafaya Trail',
    city: 'Oviedo',
    neighborhood: 'oviedo',
    price: 420000,
    beds: 4,
    baths: 3,
    sqft: 2400,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'],
    description:
      'Spacious family home in the heart of Oviedo with excellent schools nearby. Updated master suite, screened lanai, and a three-car garage. Located in a quiet cul-de-sac within a sought-after community.',
    metaTitle: 'Family Home in Oviedo, FL | 4 Bed 3 Bath | Derek Beauchesne',
    metaDescription:
      'Spacious 4-bed family home for sale in Oviedo, FL. Updated master, screened lanai, top schools nearby. Call Derek Beauchesne at 407-937-9231.',
  },
  {
    slug: 'charming-cottage-in-winter-park',
    address: '789 Park Ave S',
    city: 'Winter Park',
    neighborhood: 'winter-park',
    price: 525000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=800&q=80'],
    description:
      'Classic Winter Park cottage with timeless character and modern updates. Original brick fireplace, chef\'s kitchen, lush landscaping, and a detached studio. Steps from Park Avenue shops and Rollins College.',
    metaTitle: 'Charming Cottage in Winter Park, FL | 3 Bed 2 Bath | Derek Beauchesne',
    metaDescription:
      'Classic 3-bed cottage for sale in Winter Park, FL. Updated kitchen, brick fireplace, near Park Avenue. Contact Derek Beauchesne at 407-937-9231.',
  },
  {
    slug: 'spacious-retreat-in-clermont',
    address: '4567 Lakeshore Dr',
    city: 'Clermont',
    neighborhood: 'clermont',
    price: 345000,
    beds: 4,
    baths: 2.5,
    sqft: 2200,
    status: 'Active',
    featured: true,
    images: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80'],
    description:
      'Beautiful retreat-style home in Clermont\'s rolling hills. Open floor plan, resort-style pool, and sweeping views of the surrounding landscape. Easy access to the Florida Turnpike and West Orange Trail.',
    metaTitle: 'Spacious Retreat in Clermont, FL | 4 Bed 2.5 Bath | Derek Beauchesne',
    metaDescription:
      'Beautiful 4-bed home for sale in Clermont, FL. Pool, views, open floor plan. Call Central Florida REALTOR\u00AE Derek Beauchesne at 407-937-9231.',
  },
];
