import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <section className="section text-center" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <Container style={{ maxWidth: 560 }}>
        <h1
          className="type-display text-foreground"
          style={{ fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-2)' }}
        >
          404
        </h1>
        <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-2)' }}>
          Page Not Found
        </h2>
        <p className="type-body text-muted" style={{ marginBottom: 'var(--space-5)' }}>
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center" style={{ gap: 'var(--space-2)' }}>
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/properties" variant="outline" size="lg">
            View Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
