'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { agent } from '@/data/agent';
import Logo from './Logo';

const mobileNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const desktopNavLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

/* ── Custom hamburger icon with animated open/close ── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="w-7 h-5 relative flex flex-col justify-between">
      <motion.span
        className="block h-[1.5px] rounded-full bg-white origin-left"
        animate={
          open
            ? { rotate: 45, x: 2, y: -1, width: '100%' }
            : { rotate: 0, x: 0, y: 0, width: '100%' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white"
        animate={
          open
            ? { opacity: 0, scaleX: 0 }
            : { opacity: 1, scaleX: 1, width: '60%' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ originX: 0 }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white origin-left"
        animate={
          open
            ? { rotate: -45, x: 2, y: 1, width: '100%' }
            : { rotate: 0, x: 0, y: 0, width: '80%' }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ── Radial expand background ── */
function RadialCircle({
  originX,
  originY,
}: {
  originX: number;
  originY: number;
}) {
  const [diameter, setDiameter] = useState(0);

  useEffect(() => {
    setDiameter(Math.hypot(window.innerWidth, window.innerHeight) * 2);
  }, []);

  if (diameter === 0) return null;

  return (
    <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        closed: { scale: 0 },
        open: { scale: 1 },
      }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="fixed z-55 rounded-full bg-dark"
      style={{
        width: diameter,
        height: diameter,
        top: originY - diameter / 2,
        left: originX - diameter / 2,
      }}
    />
  );
}

/* ── Menu content layer ── */
function MenuContent({ onClose }: { onClose: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, delay: 0.6 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: 0.6 + i * 0.07,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.1, duration: 0.35 } },
    exit: { opacity: 0, transition: { duration: 0.1 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="fixed inset-0 z-57 flex flex-col pointer-events-auto"
    >
      {/* Links — centered */}
      <nav className="flex-1 flex flex-col items-center justify-center gap-8">
        {mobileNavLinks.map((link, i) => (
          <motion.div key={link.href} custom={i} variants={linkVariants}>
            <Link
              href={link.href}
              className="text-4xl md:text-5xl font-serif text-white hover:text-accent transition-colors duration-200 tracking-wide"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Bottom — quiet contact touch */}
      <motion.div variants={footerVariants} className="px-6 pb-10">
        <div className="border-t border-white/10 pt-6 text-center">
          <a
            href={agent.phoneTel}
            className="text-sm text-white/50 tracking-wide hover:text-white/80 transition-colors"
          >
            {agent.phone}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Navbar ── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [btnOrigin, setBtnOrigin] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleToggle = useCallback(() => {
    if (!mobileOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setBtnOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setMobileOpen((prev) => !prev);
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Gradient layer — always present, fades out */}
        <div
          className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent transition-opacity duration-700 ease-in-out"
          style={{ opacity: solid ? 0 : 1 }}
        />
        {/* Blur/solid layer — always present, fades in */}
        <div
          className="absolute inset-0 bg-dark/80 backdrop-blur-xl transition-opacity duration-700 ease-in-out"
          style={{ opacity: solid ? 1 : 0 }}
        />

        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-5"
          aria-label="Main navigation"
        >
          <Link href="/" aria-label="LiveFloridaNow Home">
            <Logo variant="light" className="h-8 w-auto" />
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-10">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/90 hover:text-white text-[13px] uppercase tracking-[0.12em] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center justify-center px-5 py-2 text-[13px] uppercase tracking-[0.1em] font-medium rounded-full bg-accent text-white hover:bg-accent-dark transition-colors"
              >
                Let&apos;s Connect
              </Link>
            </li>
          </ul>

          {/* Spacer for mobile toggle layout (actual button is rendered outside header) */}
          <div className="lg:hidden w-8 h-8" />
        </nav>
      </header>

      {/* Mobile toggle — fixed, outside header stacking context so it's above overlays */}
      <button
        ref={btnRef}
        onClick={handleToggle}
        className="lg:hidden fixed top-0 right-0 z-[59] w-8 h-8 flex items-center justify-center"
        style={{
          /* Match the nav's px-6 py-5 positioning */
          top: 'calc(1.25rem + 4px)',
          right: '1.5rem',
        }}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {/* Mobile menu — radial circle + content as separate layers */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <RadialCircle
              key="radial"
              originX={btnOrigin.x}
              originY={btnOrigin.y}
            />
            <MenuContent key="content" onClose={() => setMobileOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
