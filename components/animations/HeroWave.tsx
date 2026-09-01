/**
 * Static sine tiles that slide on the compositor thread.
 * Morphing SVG path `d` plus multiple feGaussianBlur filters is what made
 * the previous version janky on mobile and expensive on first paint.
 */
const START_X = -80;
const SPAN = 1760;
const SEGMENTS = 8;
const BASE_Y = 218;
const AMPLITUDE = 70;
const MIRROR_AXIS = 431;
const OMEGA = (Math.PI * 2) / SPAN;

function yAt(x: number) {
  return BASE_Y + AMPLITUDE * Math.sin(OMEGA * (x - START_X));
}

function slopeAt(x: number) {
  return AMPLITUDE * OMEGA * Math.cos(OMEGA * (x - START_X));
}

function wavePath(mirror = false) {
  const mapY = (y: number) => (mirror ? MIRROR_AXIS * 2 - y : y);
  const xs = Array.from({ length: SEGMENTS + 1 }, (_, i) => START_X + (SPAN * i) / SEGMENTS);
  const parts = [`M ${xs[0].toFixed(2)} ${mapY(yAt(xs[0])).toFixed(2)}`];

  for (let i = 0; i < SEGMENTS; i++) {
    const x0 = xs[i];
    const x1 = xs[i + 1];
    const dx = (x1 - x0) / 3;
    const y0 = yAt(x0);
    const y1 = yAt(x1);
    const c1y = y0 + slopeAt(x0) * dx;
    const c2y = y1 - slopeAt(x1) * dx;
    parts.push(
      `C ${(x0 + dx).toFixed(2)} ${mapY(c1y).toFixed(2)} ${(x1 - dx).toFixed(2)} ${mapY(c2y).toFixed(2)} ${x1.toFixed(2)} ${mapY(y1).toFixed(2)}`,
    );
  }

  return parts.join(" ");
}

const LINE = wavePath(false);
const REFLECTION = wavePath(true);

export function HeroWave() {
  return (
    <div aria-hidden="true" className="hero-wave pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-wave-track">
        <WaveTile />
        <WaveTile />
      </div>
    </div>
  );
}

function WaveTile() {
  return (
    <svg
      viewBox="0 0 1600 900"
      className="hero-wave-tile"
      preserveAspectRatio="xMidYMid slice"
    >
      <path d={REFLECTION} className="hero-wave-reflection-glow" />
      <path d={REFLECTION} className="hero-wave-reflection-core" />
      <path d={LINE} className="hero-wave-glow" />
      <path d={LINE} className="hero-wave-bend" />
      <path d={LINE} className="hero-wave-core" />
    </svg>
  );
}
