"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Compatible cubic paths (M + C + C) so Framer Motion can morph `d` without jumps.
 * Y is in a 400-tall viewBox. Lower Y = higher on screen.
 *
 * 1. Gentle upward arch
 * 2. Flatter horizontal curve
 * 3. Asymmetrical wave (left higher)
 * 4. Wider, softer downward curve
 * 5. Return to 1 for a seamless loop
 */
export const WAVE_PATHS = [
  "M -120 238 C 300 238 520 118 800 112 C 1080 106 1300 236 1720 242",
  "M -120 204 C 300 198 520 212 800 202 C 1080 192 1300 210 1720 200",
  "M -120 152 C 280 146 520 176 800 214 C 1100 258 1340 268 1720 248",
  "M -120 176 C 300 186 520 276 800 282 C 1080 288 1300 188 1720 178",
  "M -120 238 C 300 238 520 118 800 112 C 1080 106 1300 236 1720 242",
] as const;

export const WAVE_DURATION = 12;

const ease = "easeInOut" as const;

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const fade = `${id}-fade`;
  const glowMedium = `${id}-glow-md`;
  const glowWide = `${id}-glow-wide`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft atmospheric glow behind the headline. */}
      <div className="absolute top-[40%] left-1/2 h-[32rem] w-[min(56rem,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.055] blur-3xl sm:top-[46%]" />

      <motion.div
        className="absolute top-[34%] left-1/2 w-[160vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-55 sm:top-[46%] sm:opacity-100"
        animate={
          reduceMotion
            ? undefined
            : { x: ["-1.8%", "2%", "-1.2%", "1.5%", "-1.8%"] }
        }
        transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
      >
        <svg
          viewBox="0 0 1600 400"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid slice"
          overflow="visible"
        >
          <defs>
            <linearGradient id={fade} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="16%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="84%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id={glowWide} x="-35%" y="-120%" width="170%" height="340%">
              <feGaussianBlur stdDeviation="42" />
            </filter>
            <filter id={glowMedium} x="-20%" y="-80%" width="140%" height="260%">
              <feGaussianBlur stdDeviation="12" />
            </filter>
          </defs>

          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={90}
            opacity={0.08}
            filter={`url(#${glowWide})`}
          />
          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={18}
            opacity={0.24}
            filter={`url(#${glowMedium})`}
          />
          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={1.6}
            opacity={0.78}
            sharp
          />
        </svg>
      </motion.div>
    </div>
  );
}

type WaveStrokeProps = {
  paths: readonly string[];
  reduceMotion: boolean;
  stroke: string;
  strokeWidth: number;
  opacity: number;
  filter?: string;
  sharp?: boolean;
};

function WaveStroke({
  paths,
  reduceMotion,
  stroke,
  strokeWidth,
  opacity,
  filter,
  sharp = false,
}: WaveStrokeProps) {
  return (
    <motion.path
      d={paths[0]}
      animate={reduceMotion ? undefined : { d: [...paths] }}
      transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      opacity={opacity}
      filter={filter}
      vectorEffect={sharp ? "non-scaling-stroke" : undefined}
    />
  );
}
