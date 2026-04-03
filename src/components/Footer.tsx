import Link from 'next/link';
import Logo from './Logo';
import { agent } from '@/data/agent';
import Container from './ui/Container';

const navLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/neighborhoods', label: 'Neighborhoods' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark section--compact">
      <Container>
        {/* Top row — logo + nav */}
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
          <a href="/" className="footer__logo" aria-label="LiveFloridaNow Home">
            <Logo variant="light" className="h-7 w-auto" />
          </a>

          <nav className="footer__nav" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center" style={{ columnGap: 'var(--space-4)', rowGap: 'var(--space-1)' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer__nav-link type-body-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" style={{ paddingTop: 'var(--space-4)' }}>
          <p className="footer__disclosure type-caption text-white/40 max-w-3xl" style={{ lineHeight: 'var(--leading-relaxed)' }}>
            {agent.brokerDisclosure}
          </p>
          <p className="footer__copyright type-caption text-white/40" style={{ marginTop: 'var(--space-2)' }}>
            &copy; {year} LiveFloridaNow. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
