import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import Button from './ui/Button';
import Container from './ui/Container';
import { agent } from '@/data/agent';

export default function ComingSoon() {
  return (
    <Container
      className="flex flex-col items-center justify-center text-center"
      style={{ minHeight: '80vh', paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}
    >
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Link href="/" aria-label="LiveFloridaNow Home">
          <Logo variant="dark" className="h-10 w-auto" />
        </Link>
      </div>

      <h1 className="type-h1 text-foreground" style={{ marginBottom: 'var(--space-2)' }}>
        Coming Soon
      </h1>
      <p className="type-body text-muted" style={{ maxWidth: 420, marginBottom: 'var(--space-5)' }}>
        We&apos;re working on something great. In the meantime, reach out to
        Derek directly.
      </p>

      <div
        className="flex flex-col items-center"
        style={{ gap: 'var(--space-1)', marginBottom: 'var(--space-5)' }}
      >
        <a
          href={agent.phoneTel}
          className="flex items-center text-foreground hover:text-accent-text transition-colors"
          style={{ gap: 'var(--space-1)' }}
        >
          <Phone size={18} className="text-accent" />
          {agent.phone}
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="flex items-center text-foreground hover:text-accent-text transition-colors"
          style={{ gap: 'var(--space-1)' }}
        >
          <Mail size={18} className="text-accent" />
          {agent.email}
        </a>
      </div>

      <Button href="/" variant="primary" size="lg">
        Back to Home
      </Button>
    </Container>
  );
}
