'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import FadeIn from './FadeIn';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    []
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted mb-4 font-sans">
            Testimonials
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-16">
            What Clients Are Saying
          </h2>
        </FadeIn>

        <div className="relative min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="text-foreground font-semibold text-sm uppercase tracking-wider">
                {testimonial.name}
              </div>
              <div className="text-xs text-muted mt-1 tracking-wide">
                {testimonial.location}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal dot indicators */}
        <div className="flex justify-center gap-2.5 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-foreground scale-125'
                  : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
