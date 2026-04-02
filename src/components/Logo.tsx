// Design token values — keep in sync with globals.css @theme
const TOKENS = {
  background: '#FAFAF8',
  foreground: '#1C1C1C',
  accent: '#B8A98A',
  dark: '#1A1A1A',
  white: '#FFFFFF',
} as const;

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
}

export default function Logo({ variant = 'dark', className }: LogoProps) {
  const colors = {
    light: { primary: TOKENS.white, accent: TOKENS.white, window: TOKENS.dark },
    dark: { primary: TOKENS.foreground, accent: TOKENS.foreground, window: TOKENS.background },
    color: { primary: TOKENS.foreground, accent: TOKENS.accent, window: TOKENS.background },
  };

  const { primary, accent, window } = colors[variant];

  return (
    <svg
      viewBox="0 0 230 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LiveFloridaNow"
    >
      {/* House / roofline mark */}
      <path
        d="M20 4L4 18H10V32H16V24H24V32H30V18H36L20 4Z"
        fill={accent}
      />
      {/* Small window */}
      <rect x="17" y="12" width="6" height="5" rx="0.5" fill={window} />

      {/* Logotype: LIVE FLORIDA NOW */}
      <text
        x="46"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        letterSpacing="3"
        fill={primary}
        fontWeight="300"
      > LIVE<tspan fontWeight="900">FLORIDA</tspan>NOW
      </text>
    </svg>
  );
}
