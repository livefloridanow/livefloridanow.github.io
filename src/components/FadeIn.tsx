'use client';

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: 'div' | 'section' | 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

export default function FadeIn({
  children,
  delay = 0,
  className,
  style,
  as = 'div',
}: FadeInProps) {
  const Component = motion.create(as);

  return (
    <Component
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: number;
}

export function StaggerChildren({
  children,
  className,
  style,
  stagger = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
