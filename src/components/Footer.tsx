import Link from 'next/link';
import Logo from './Logo';
import { agent } from '@/data/agent';

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
    <footer className="bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top row — logo + nav */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <Link href="/" aria-label="LiveFloridaNow Home">
            <Logo variant="light" className="h-7 w-auto" />
          </Link>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/70 hover:text-white transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-[11px] text-white/40 leading-relaxed max-w-3xl">
            {agent.brokerDisclosure}
          </p>
          {/* TODO: Add Equal Housing Opportunity logo/icon */}
          <p className="text-[11px] text-white/40 mt-4">
            &copy; {year} LiveFloridaNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
