import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-32 lg:py-40 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-4">
          404
        </h1>
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/properties" variant="outline" size="lg">
            View Properties
          </Button>
        </div>
      </div>
    </section>
  );
}
