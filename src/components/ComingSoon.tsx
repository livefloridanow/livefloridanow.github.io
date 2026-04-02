import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';
import { agent } from '@/data/agent';

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-20 text-center">
      <Link href="/" aria-label="LiveFloridaNow Home">
        <Logo variant="dark" className="h-10 w-auto mb-12" />
      </Link>

      <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
        Coming Soon
      </h1>
      <p className="text-muted text-lg max-w-md mb-10 leading-relaxed">
        We&apos;re working on something great. In the meantime, reach out to
        Derek directly.
      </p>

      <div className="flex flex-col items-center gap-3 mb-10">
        <a
          href={agent.phoneTel}
          className="flex items-center gap-2 text-foreground hover:text-accent-text transition-colors"
        >
          <Phone size={18} className="text-accent" />
          {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center gap-2 text-foreground hover:text-accent-text transition-colors"
        >
          <Mail size={18} className="text-accent" />
          {agent.email}
        </a>
      </div>

      <Button href="/" variant="primary" size="lg">
        Back to Home
      </Button>
    </div>
  );
}
