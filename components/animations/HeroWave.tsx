"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Compatible cubic paths (M + C + C) so Framer Motion can morph `d` without jumps.
 * Y is in a 380-tall viewBox. Lower Y = higher on screen.
 * Centre is a flattened plateau so the form reads as a horizon, not a semicircle.
 */
export const WAVE_PATHS = [
  "M -280 228 C 360 226 620 168 900 164 C 1180 160 1480 224 2080 230",
  "M -280 216 C 360 214 640 188 900 186 C 1160 184 1480 218 2080 214",
  "M -280 206 C 340 202 640 176 900 190 C 1180 204 1500 222 2080 220",
  "M -280 220 C 360 222 640 204 900 208 C 1160 212 1480 218 2080 212",
  "M -280 228 C 360 226 620 168 900 164 C 1180 160 1480 224 2080 230",
] as const;

export const WAVE_DURATION = 14;

const ease = "easeInOut" as const;

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const fade = `${id}-fade`;
  const glowCore = `${id}-glow-core`;
  const glowMedium = `${id}-glow-md`;
  const glowWide = `${id}-glow-wide`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Broad bloom behind the arch, fading toward the headline. */}
      <div className="absolute top-[20%] left-1/2 h-[320px] w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white/[0.07] blur-[110px] sm:h-[380px]" />

      <motion.div
        className="absolute top-[17%] left-1/2 w-[180vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-60 sm:top-[21%] sm:opacity-100"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-1.1%", "1.2%", "-0.8%", "0.9%", "-1.1%"],
                y: ["0%", "-1.2%", "0.6%", "-0.5%", "0%"],
              }
        }
        transition={{ duration: WAVE_DURATION, ease, repeat: Infinity }}
      >
        <svg
          viewBox="0 0 1800 380"
          className="h-auto w-full"
          preserveAspectRatio="xMidYMid slice"
          overflow="visible"
        >
          <defs>
            <linearGradient id={fade} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="14%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="86%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <filter id={glowWide} x="-45%" y="-180%" width="190%" height="460%">
              <feGaussianBlur stdDeviation="70" />
            </filter>
            <filter id={glowMedium} x="-30%" y="-120%" width="160%" height="340%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
            <filter id={glowCore} x="-20%" y="-80%" width="140%" height="260%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={95}
            opacity={0.09}
            filter={`url(#${glowWide})`}
          />
          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={24}
            opacity={0.22}
            filter={`url(#${glowMedium})`}
          />
          <WaveStroke
            paths={WAVE_PATHS}
            reduceMotion={!!reduceMotion}
            stroke={`url(#${fade})`}
            strokeWidth={6.5}
            opacity={0.64}
            filter={`url(#${glowCore})`}
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
  filter: string;
};

function WaveStroke({
  paths,
  reduceMotion,
  stroke,
  strokeWidth,
  opacity,
  filter,
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
    />
  );
}
