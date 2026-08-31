"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Cubic Hermite sampling of a sine. Control points follow the derivative so
 * crests stay rounded. Putting sine samples on the handles themselves is what
 * produced the sharp V.
 */
const START_X = -80;
const SPAN = 1760;
const SEGMENTS = 8;
const KEYFRAMES = 8;
const BASE_Y = 195;
const AMPLITUDE = 70;
const MIRROR_AXIS = 408;
const OMEGA = (Math.PI * 2) / SPAN;

export const WAVE_DURATION = 24;
const ease = "easeInOut" as const;

function yAt(x: number, phase: number) {
  return BASE_Y + AMPLITUDE * Math.sin(OMEGA * (x - START_X) + phase);
}

function slopeAt(x: number, phase: number) {
  return AMPLITUDE * OMEGA * Math.cos(OMEGA * (x - START_X) + phase);
}

function wavePath(phase: number, mirror = false) {
  const mapY = (y: number) => (mirror ? MIRROR_AXIS * 2 - y : y);
  const xs = Array.from({ length: SEGMENTS + 1 }, (_, i) => START_X + (SPAN * i) / SEGMENTS);
  const parts = [`M ${xs[0].toFixed(2)} ${mapY(yAt(xs[0], phase)).toFixed(2)}`];

  for (let i = 0; i < SEGMENTS; i++) {
    const x0 = xs[i];
    const x1 = xs[i + 1];
    const dx = (x1 - x0) / 3;
    const y0 = yAt(x0, phase);
    const y1 = yAt(x1, phase);
    const c1y = y0 + slopeAt(x0, phase) * dx;
    const c2y = y1 - slopeAt(x1, phase) * dx;
    parts.push(
      `C ${(x0 + dx).toFixed(2)} ${mapY(c1y).toFixed(2)} ${(x1 - dx).toFixed(2)} ${mapY(c2y).toFixed(2)} ${x1.toFixed(2)} ${mapY(y1).toFixed(2)}`,
    );
  }

  return parts.join(" ");
}

const LINES = Array.from({ length: KEYFRAMES + 1 }, (_, i) =>
  wavePath((i / KEYFRAMES) * Math.PI * 2),
);
const REFLECTIONS = Array.from({ length: KEYFRAMES + 1 }, (_, i) =>
  wavePath((i / KEYFRAMES) * Math.PI * 2, true),
);

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const sides = `${id}-sides`;
  const mask = `${id}-mask`;
  const reflectionMask = `${id}-reflection`;
  const fadeDown = `${id}-fade-down`;
  const bloom = `${id}-bloom`;
  const bloomMask = `${id}-bloom-mask`;
  const glow = `${id}-glow`;
  const core = `${id}-core`;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1600 900"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={sides} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="14%" stopColor="#fff" stopOpacity="1" />
            <stop offset="86%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={fadeDown} x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.58" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="0.68" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.8" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="0.92" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={bloom} x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.08" stopColor="#fff" stopOpacity="0.45" />
            <stop offset="0.2" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.3" stopColor="#fff" stopOpacity="0.35" />
            <stop offset="0.42" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id={mask}>
            <rect width="1600" height="900" fill={`url(#${sides})`} />
          </mask>
          <mask id={bloomMask}>
            <rect width="1600" height="900" fill={`url(#${bloom})`} />
          </mask>
          <mask id={reflectionMask}>
            <rect width="1600" height="900" fill={`url(#${fadeDown})`} />
          </mask>
          <filter id={glow} x="-16%" y="-120%" width="132%" height="340%">
            <feGaussianBlur stdDeviation="38" />
          </filter>
          <filter id={core} x="-6%" y="-40%" width="112%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g mask={`url(#${mask})`}>
          <g mask={`url(#${bloomMask})`}>
            <WavePair
              paths={LINES}
              reduceMotion={!!reduceMotion}
              glow={`url(#${glow})`}
              core={`url(#${core})`}
              glowWidth={40}
              glowOpacity={0.14}
              coreWidth={7.5}
              coreOpacity={0.9}
            />
          </g>
          <g mask={`url(#${reflectionMask})`}>
            <WavePair
              paths={REFLECTIONS}
              reduceMotion={!!reduceMotion}
              glow={`url(#${glow})`}
              core={`url(#${core})`}
              glowWidth={36}
              glowOpacity={0.16}
              coreWidth={6}
              coreOpacity={0.42}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function WavePair({
  paths,
  reduceMotion,
  glow,
  core,
  glowWidth,
  glowOpacity,
  coreWidth,
  coreOpacity,
}: {
  paths: string[];
  reduceMotion: boolean;
  glow: string;
  core: string;
  glowWidth: number;
  glowOpacity: number;
  coreWidth: number;
  coreOpacity: number;
}) {
  return (
    <>
      <motion.path
        d={paths[0]}
        animate={reduceMotion ? undefined : { d: paths }}
        transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
        fill="none"
        stroke="#ffffff"
        strokeWidth={glowWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={glowOpacity}
        filter={glow}
      />
      <motion.path
        d={paths[0]}
        animate={reduceMotion ? undefined : { d: paths }}
        transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
        fill="none"
        stroke="#ffffff"
        strokeWidth={coreWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={coreOpacity}
        filter={core}
      />
    </>
  );
}
