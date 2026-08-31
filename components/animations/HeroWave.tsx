"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Seven Y samples on a two-cubic horizon. Same command count in every keyframe
 * so the path morphs without jumps. Values stay close so blur does not thicken
 * and thin along the line as it moves.
 */
type Horizon = readonly [number, number, number, number, number, number, number];

const HORIZONS: readonly Horizon[] = [
  [458, 412, 378, 400, 428, 472, 444],
  [442, 428, 396, 418, 448, 456, 438],
  [468, 400, 388, 392, 418, 464, 452],
  [450, 436, 404, 424, 408, 448, 430],
  [458, 412, 378, 400, 428, 472, 444],
];

const SPREAD = 260;
export const WAVE_DURATION = 18;
const ease = "easeInOut" as const;

function line(y: Horizon) {
  return `M -80 ${y[0]} C 280 ${y[1]} 560 ${y[2]} 800 ${y[3]} C 1040 ${y[4]} 1320 ${y[5]} 1680 ${y[6]}`;
}

function ribbon(y: Horizon) {
  const t = y.map((v) => v - SPREAD);
  const b = y.map((v) => v + SPREAD);
  return [
    `M -80 ${t[0]}`,
    `C 280 ${t[1]} 560 ${t[2]} 800 ${t[3]}`,
    `C 1040 ${t[4]} 1320 ${t[5]} 1680 ${t[6]}`,
    `L 1680 ${b[6]}`,
    `C 1320 ${b[5]} 1040 ${b[4]} 800 ${b[3]}`,
    `C 560 ${b[2]} 280 ${b[1]} -80 ${b[0]}`,
    "Z",
  ].join(" ");
}

const RIBBONS = HORIZONS.map(ribbon);
const LINES = HORIZONS.map(line);

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const sides = `${id}-sides`;
  const mask = `${id}-mask`;
  const wash = `${id}-wash`;
  const filament = `${id}-filament`;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_48%,rgba(255,255,255,0.1),rgba(255,255,255,0.03)_46%,transparent_74%)]" />

      <svg
        viewBox="0 0 1600 900"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={sides} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="16%" stopColor="#fff" stopOpacity="1" />
            <stop offset="84%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id={mask}>
            <rect width="1600" height="900" fill={`url(#${sides})`} />
          </mask>
          <filter id={wash} x="-8%" y="-35%" width="116%" height="170%">
            <feGaussianBlur stdDeviation="42" />
          </filter>
          <filter id={filament} x="-6%" y="-40%" width="112%" height="180%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <g mask={`url(#${mask})`}>
          <motion.path
            d={RIBBONS[0]}
            animate={reduceMotion ? undefined : { d: [...RIBBONS] }}
            transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
            fill="#ffffff"
            fillOpacity="0.1"
            filter={`url(#${wash})`}
          />
          <motion.path
            d={LINES[0]}
            animate={reduceMotion ? undefined : { d: [...LINES] }}
            transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity="0.38"
            filter={`url(#${filament})`}
          />
        </g>
      </svg>
    </div>
  );
}
