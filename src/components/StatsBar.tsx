'use client';

import { useEffect, useRef, useState } from 'react';
import { agent } from '@/data/agent';

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
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.2em] font-sans">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { stats } = agent;

  return (
    <section className="relative bg-dark py-20 grain-overlay">
      <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        <StatItem value={stats.homesSold} startValue={85} suffix="+" label="Homes Sold" />
        <StatItem value={stats.yearsExperience} startValue={6} suffix="+" label="Years Experience" />
        <StatItem value={stats.fiveStarReviews} startValue={42} suffix="+" label="5-Star Reviews" />
        {/* Areas Served — static, no count-up */}
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            {stats.areasServed}
          </div>
          <div className="text-[11px] text-white/70 mt-2 uppercase tracking-[0.2em] font-sans">
            Areas Served
          </div>
        </div>
      </div>
    </section>
  );
}
