'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import Button from './ui/Button';

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
        animate={open ? { rotate: 45, x: 2, y: -1, width: '100%' } : { rotate: 0, x: 0, y: 0, width: '100%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1, width: '60%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ originX: 0 }}
      />
      <motion.span
        className="block h-[1.5px] rounded-full bg-white origin-left"
        animate={open ? { rotate: -45, x: 2, y: 1, width: '100%' } : { rotate: 0, x: 0, y: 0, width: '80%' }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

/* ── Mobile menu — radial circle IS the container, content lives inside it ── */
function MobileMenu({
  onClose,
  originX,
  originY,
}: {
  onClose: () => void;
  originX: number;
  originY: number;
}) {
  const [diameter, setDiameter] = useState(0);
  // Key increments on every mount to force fresh animations
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    setDiameter(Math.hypot(window.innerWidth, window.innerHeight) * 2);
    setAnimKey((k) => k + 1);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (diameter === 0) return null;

  return (
    <>
      {/* Radial circle — this IS the menu background.
          Content is positioned fixed on top, clipped to the same visual area
          by living inside the same AnimatePresence lifecycle. */}
      <motion.div
        key={`circle-${animKey}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-55 rounded-full bg-dark"
        style={{
          width: diameter,
          height: diameter,
          top: originY - diameter / 2,
          left: originX - diameter / 2,
        }}
      />

      {/* Content — fixed fullscreen, sits on top of the circle.
          Uses clip-path circle that matches the radial expansion so
          content is only visible where the circle has expanded to. */}
      <motion.div
        key={`content-${animKey}`}
        className="fixed inset-0 z-57 flex flex-col"
        initial={{ clipPath: `circle(0px at ${originX}px ${originY}px)` }}
        animate={{ clipPath: `circle(${diameter / 2}px at ${originX}px ${originY}px)` }}
        exit={{ clipPath: `circle(0px at ${originX}px ${originY}px)` }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Links — centered */}
        <nav className="flex-1 flex flex-col items-center justify-start overflow-y-auto" style={{ gap: 'var(--space-4)', paddingTop: 'var(--space-7)' }}>
          {mobileNavLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, transition: { duration: 0.2, delay: (mobileNavLinks.length - 1 - i) * 0.03, ease: [0.25, 0.1, 0.25, 1] } }}
              transition={{ duration: 0.35, delay: 0.35 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link
                href={link.href}
                className="font-serif text-white hover:text-accent transition-colors duration-200"
                style={{ fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-wide)' }}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

      </motion.div>
    </>
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
        <div
          className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent transition-opacity duration-700 ease-in-out"
          style={{ opacity: solid ? 0 : 1 }}
        />
        <div
          className="absolute inset-0 bg-dark/80 backdrop-blur-xl transition-opacity duration-700 ease-in-out"
          style={{ opacity: solid ? 1 : 0 }}
        />

        <nav
          className="relative mx-auto flex items-center justify-between"
          style={{ maxWidth: 'var(--container-max)', paddingLeft: 'var(--container-px-mobile)', paddingRight: 'var(--container-px-mobile)', paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-2)' }}
          aria-label="Main navigation"
        >
          <Link href="/" aria-label="LiveFloridaNow Home" onClick={() => window.scrollTo({ top: 0 })}>
            <Logo variant="light" className="h-8 w-auto" />
          </Link>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center" style={{ gap: 'var(--space-5)' }}>
            {desktopNavLinks.map((link) => (
              <li key={link.href} className="nav-link">
                <Link
                  href={link.href}
                  className="type-label text-white/90 hover:text-white transition-colors hover-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/contact" variant="primary" size="sm" className="navbar__cta">
                Let&apos;s Connect
              </Button>
            </li>
          </ul>

          <div className="lg:hidden w-8 h-8" />
        </nav>
      </header>

      {/* Mobile toggle */}
      <button
        ref={btnRef}
        onClick={handleToggle}
        className="lg:hidden fixed z-59 w-10 h-10 flex items-center justify-center"
        style={{ top: 'calc(var(--space-2) - 4px)', right: 'calc(var(--container-px-mobile) - 4px)' }}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            key="mobile-menu"
            onClose={() => setMobileOpen(false)}
            originX={btnOrigin.x}
            originY={btnOrigin.y}
          />
        )}
      </AnimatePresence>
    </>
  );
}
