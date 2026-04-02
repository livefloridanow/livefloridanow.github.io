'use client';

import { useEffect, useRef, useState } from 'react';
import { agent } from '@/data/agent';
import Container from './ui/Container';

interface StatItemProps {
  value: number;
  startValue: number;
  suffix: string;
  label: string;
}

function StatItem({ value, startValue, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(startValue);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const range = value - startValue;
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(startValue + eased * range));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, startValue]);

  return (
    <div ref={ref} className="stats-bar__item text-center">
      <div className="stats-bar__number type-h2 text-white" style={{ fontWeight: 'var(--weight-semibold)' }}>
        {count}{suffix}
      </div>
      <div className="stats-bar__label type-label text-white/70" style={{ marginTop: 'var(--space-1)' }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { stats } = agent;

  return (
    <section className="stats-bar section--compact relative bg-dark grain-overlay">
      <Container className="relative z-10 grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--space-5)' }}>
        <StatItem value={stats.homesSold} startValue={85} suffix="+" label="Homes Sold" />
        <StatItem value={stats.yearsExperience} startValue={6} suffix="+" label="Years Experience" />
        <StatItem value={stats.fiveStarReviews} startValue={42} suffix="+" label="5-Star Reviews" />
        <div className="stats-bar__item text-center">
          <div className="stats-bar__number type-h2 text-white" style={{ fontWeight: 'var(--weight-semibold)' }}>
            {stats.areasServed}
          </div>
          <div className="stats-bar__label type-label text-white/70" style={{ marginTop: 'var(--space-1)' }}>
            Areas Served
          </div>
        </div>
      </Container>
    </section>
  );
}
