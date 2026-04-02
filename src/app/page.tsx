import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import ListingsGrid from '@/components/ListingsGrid';
import NeighborhoodGrid from '@/components/NeighborhoodGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CTABanner from '@/components/CTABanner';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ListingsGrid />
      <NeighborhoodGrid />
      <TestimonialsCarousel />
      <CTABanner />
      <ContactSection />
    </>
  );
}
