'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import FadeIn from './FadeIn';
import Container from './ui/Container';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const testimonial = testimonials[current];

  return (
    <section className="testimonials section bg-surface">
      <Container className="max-w-3xl text-center">
        <FadeIn>
          <p className="testimonials__label type-label text-muted" style={{ marginBottom: 'var(--space-2)' }}>
            Testimonials
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="testimonials__heading type-h2 text-foreground" style={{ marginBottom: 'var(--space-3)' }}>
            What Clients Are Saying
          </h2>
        </FadeIn>

        <div className="testimonials__carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col items-center justify-center text-center"
            >
              <blockquote className="testimonials__quote font-serif text-foreground italic" style={{ fontSize: 'var(--text-xl)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-3)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="testimonials__author type-label text-foreground">
                {testimonial.name}
              </div>
              <div className="type-caption" style={{ marginTop: 'var(--space-1)' }}>
                {testimonial.location}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonials__controls flex justify-center" style={{ gap: 10, marginTop: 'var(--space-3)' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-foreground scale-125' : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
