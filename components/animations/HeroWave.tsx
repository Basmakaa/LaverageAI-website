"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Seven Y samples on a two-cubic horizon. Same command count in every keyframe
 * so the path morphs without jumps. Amplitude is large enough that the line
 * clearly travels, rather than shimmering in place.
 */
type Horizon = readonly [number, number, number, number, number, number, number];

const HORIZONS: readonly Horizon[] = [
  [540, 320, 260, 380, 520, 620, 480],
  [360, 520, 600, 440, 280, 340, 500],
  [500, 280, 420, 580, 620, 360, 300],
  [400, 580, 300, 340, 460, 600, 540],
  [540, 320, 260, 380, 520, 620, 480],
];

export const WAVE_DURATION = 10;
const ease = "easeInOut" as const;

function line(y: Horizon) {
  return `M -80 ${y[0]} C 280 ${y[1]} 560 ${y[2]} 800 ${y[3]} C 1040 ${y[4]} 1320 ${y[5]} 1680 ${y[6]}`;
}

const LINES = HORIZONS.map(line);

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const sides = `${id}-sides`;
  const mask = `${id}-mask`;
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
          <mask id={mask}>
            <rect width="1600" height="900" fill={`url(#${sides})`} />
          </mask>
          <filter id={glow} x="-8%" y="-50%" width="116%" height="200%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id={core} x="-4%" y="-30%" width="108%" height="160%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        <g mask={`url(#${mask})`}>
          <motion.path
            d={LINES[0]}
            animate={reduceMotion ? undefined : { d: [...LINES] }}
            transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
            fill="none"
            stroke="#ffffff"
            strokeWidth="14"
            strokeLinecap="round"
            strokeOpacity="0.22"
            filter={`url(#${glow})`}
          />
          <motion.path
            d={LINES[0]}
            animate={reduceMotion ? undefined : { d: [...LINES] }}
            transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.9"
            filter={`url(#${core})`}
          />
        </g>
      </svg>
    </div>
  );
}
