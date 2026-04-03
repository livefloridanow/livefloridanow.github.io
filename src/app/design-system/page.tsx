import type { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Design System | LiveFloridaNow',
  description: 'Internal design system reference — colors, typography, spacing, and components.',
  robots: { index: false, follow: false },
};

/* ── Data ── */

const colors = [
  { token: '--color-background', value: '#FAFAF8', label: 'Background', tw: 'bg-background' },
  { token: '--color-foreground', value: '#1C1C1C', label: 'Foreground', tw: 'bg-foreground' },
  { token: '--color-accent', value: '#B8A98A', label: 'Accent', tw: 'bg-accent' },
  { token: '--color-accent-dark', value: '#A0916F', label: 'Accent Dark', tw: 'bg-accent-dark' },
  { token: '--color-accent-text', value: '#7D7160', label: 'Accent Text', tw: 'bg-accent-text' },
  { token: '--color-surface', value: '#F2F0ED', label: 'Surface', tw: 'bg-surface' },
  { token: '--color-dark', value: '#1A1A1A', label: 'Dark', tw: 'bg-dark' },
  { token: '--color-muted', value: '#6B6860', label: 'Muted', tw: 'bg-muted' },
];

const typeScale = [
  { cls: 'type-display', label: 'Display', size: 'clamp(40px, 5vw, 60px)', sample: 'Page Headline', responsive: true },
  { cls: 'type-h1', label: 'H1', size: '3rem / 48px', sample: 'Primary Page Title' },
  { cls: 'type-h2', label: 'H2', size: '2.25rem / 36px', sample: 'Section Heading' },
  { cls: 'type-h3', label: 'H3', size: '1.875rem / 30px', sample: 'Subsection Heading' },
  { cls: 'type-h4', label: 'H4', size: '1.5rem / 24px', sample: 'Card Title' },
  { cls: 'type-body-lg', label: 'Body Large', size: '1.125rem / 18px', sample: 'A lead paragraph that introduces the section with slightly larger text for emphasis and visual hierarchy.' },
  { cls: 'type-body', label: 'Body', size: '1rem / 16px', sample: 'Standard body copy used for paragraphs, descriptions, and general content throughout the interface.' },
  { cls: 'type-body-sm', label: 'Body Small', size: '0.875rem / 14px', sample: 'Secondary detail text, metadata, and supporting information' },
  { cls: 'type-label', label: 'Label', size: '0.75rem / 12px', sample: 'Section Label' },
  { cls: 'type-caption', label: 'Caption', size: '0.75rem / 12px', sample: 'Caption text · Meta · Details' },
];

const spacing = [
  { token: '--space-1', value: '8px' },
  { token: '--space-2', value: '16px' },
  { token: '--space-3', value: '24px' },
  { token: '--space-4', value: '32px' },
  { token: '--space-5', value: '40px' },
  { token: '--space-6', value: '48px' },
  { token: '--space-7', value: '64px' },
  { token: '--space-8', value: '80px' },
  { token: '--space-9', value: '96px' },
  { token: '--space-10', value: '128px' },
];

const radii = [
  { token: '--radius-sm', value: '4px', label: 'Small — buttons, badges' },
  { token: '--radius-md', value: '8px', label: 'Medium — inputs, small cards' },
  { token: '--radius-lg', value: '16px', label: 'Large — cards, images' },
  { token: '--radius-full', value: '9999px', label: 'Full — pills, dots' },
];

/* ── Page ── */

export default function DesignSystemPage() {
  return (
    <div className="section" style={{ paddingTop: 'var(--space-9)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-muted" style={{ marginBottom: 'var(--space-2)' }}>
            Internal Reference
          </p>
          <h1 className="type-h1 text-foreground" style={{ marginBottom: 'var(--space-3)' }}>
            Design System
          </h1>
          <p className="type-body text-muted" style={{ maxWidth: 560 }}>
            Live token reference for the design system.
            All values render from the actual CSS custom properties
            defined in the global stylesheet.
          </p>
        </div>

        {/* ── Colors ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-accent-text" style={{ marginBottom: 'var(--space-2)' }}>
            Colors
          </p>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Color Tokens
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--space-3)' }}>
            {colors.map((c) => (
              <div key={c.token}>
                <div
                  style={{
                    background: `var(${c.token})`,
                    height: 80,
                    borderRadius: 'var(--radius-md)',
                    border: c.token === '--color-background' ? '1px solid var(--color-border)' : undefined,
                  }}
                />
                <p className="type-body-sm text-foreground" style={{ marginTop: 'var(--space-1)', fontWeight: 'var(--weight-medium)' }}>
                  {c.label}
                </p>
                <p className="type-caption">{c.value}</p>
                <p className="type-caption" style={{ fontFamily: 'monospace', fontSize: '0.65rem' }}>
                  {c.token}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-accent-text" style={{ marginBottom: 'var(--space-2)' }}>
            Typography
          </p>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Type Scale
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {typeScale.map((t) => (
              <div
                key={t.cls}
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: 'var(--space-3)',
                }}
              >
                <div className="flex items-baseline gap-3" style={{ marginBottom: 'var(--space-1)' }}>
                  <span className="type-label text-accent-text">{t.label}</span>
                  <span className="type-caption" style={{ fontFamily: 'monospace' }}>.{t.cls}</span>
                  <span className="type-caption">{t.size}</span>
                </div>
                <p
                  className={`${t.cls} text-foreground`}
                  style={'responsive' in t ? { fontSize: t.size } : undefined}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Spacing ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-accent-text" style={{ marginBottom: 'var(--space-2)' }}>
            Spacing
          </p>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            8pt Grid
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {spacing.map((s) => (
              <div key={s.token} className="flex items-center" style={{ gap: 'var(--space-3)' }}>
                <div
                  style={{
                    width: s.value,
                    height: 'var(--space-1)',
                    background: 'var(--color-accent)',
                    borderRadius: 'var(--radius-sm)',
                    flexShrink: 0,
                  }}
                />
                <span className="type-body-sm text-foreground" style={{ fontFamily: 'monospace', minWidth: 100 }}>
                  {s.token}
                </span>
                <span className="type-caption">{s.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Border Radius ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-accent-text" style={{ marginBottom: 'var(--space-2)' }}>
            Radius
          </p>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Border Radius
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--space-3)' }}>
            {radii.map((r) => (
              <div key={r.token}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: 'var(--color-surface)',
                    border: '2px solid var(--color-accent)',
                    borderRadius: `var(${r.token})`,
                  }}
                />
                <p className="type-body-sm text-foreground" style={{ marginTop: 'var(--space-1)', fontFamily: 'monospace' }}>
                  {r.value}
                </p>
                <p className="type-caption">{r.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Buttons ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <p className="type-label text-accent-text" style={{ marginBottom: 'var(--space-2)' }}>
            Components
          </p>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Buttons
          </h2>
          <div className="flex flex-wrap items-center" style={{ gap: 'var(--space-2)' }}>
            <Button variant="primary" size="md">Primary</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="outline" size="md">Outline</Button>
          </div>
        </section>

        {/* ── Form Inputs ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Form Inputs
          </h2>
          <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div>
              <label className="type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                Text Input
              </label>
              <input
                type="text"
                placeholder="Placeholder text"
                className="w-full text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50"
                style={{
                  background: 'var(--color-surface)',
                  padding: '0.875rem 1rem',
                  borderRadius: 'var(--radius-md)',
                }}
              />
            </div>
            <div>
              <label className="type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                Select
              </label>
              <select
                className="w-full text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none"
                style={{
                  background: 'var(--color-surface)',
                  padding: '0.875rem 2.5rem 0.875rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6860' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                }}
              >
                <option>Option One</option>
                <option>Option Two</option>
              </select>
            </div>
            <div>
              <label className="type-label text-muted block" style={{ marginBottom: 'var(--space-1)' }}>
                Textarea
              </label>
              <textarea
                rows={3}
                placeholder="Enter your message here..."
                className="w-full text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                style={{
                  background: 'var(--color-surface)',
                  padding: '0.875rem 1rem',
                  borderRadius: 'var(--radius-md)',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── Section Spacing ── */}
        <section style={{ marginBottom: 'var(--space-8)' }}>
          <h2 className="type-h2 text-foreground" style={{ marginBottom: 'var(--space-5)' }}>
            Section Spacing
          </h2>
          <div className="type-body text-muted" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <p><code className="type-caption" style={{ fontFamily: 'monospace' }}>.section</code> — 40px mobile / 60px desktop</p>
            <p><code className="type-caption" style={{ fontFamily: 'monospace' }}>.section--compact</code> — 32px mobile / 48px desktop</p>
            <p><code className="type-caption" style={{ fontFamily: 'monospace' }}>.container</code> — max-width 1280px, 24px→40px→64px responsive padding</p>
          </div>
        </section>
      </div>
    </div>
  );
}
