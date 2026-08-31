"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/**
 * Ten Y samples / three cubics. Every keyframe is the same sine, only the
 * phase shifts, so the line stays a rounded wave instead of folding into kinks.
 */
const SAMPLE_X = [-80, 200, 400, 600, 800, 1000, 1200, 1400, 1560, 1760] as const;
const PHASES = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, Math.PI * 2] as const;
const BASE_Y = 400;
const AMPLITUDE = 88;
const MIRROR_AXIS = 508;

export const WAVE_DURATION = 24;
const ease = "easeInOut" as const;

function sineYs(phase: number, base: number, amp: number) {
  return SAMPLE_X.map((x) => {
    const t = (x / 1760) * Math.PI * 2 + phase;
    return Math.round(base + Math.sin(t) * amp);
  });
}

function pathFromYs(ys: number[]) {
  return [
    `M ${SAMPLE_X[0]} ${ys[0]}`,
    `C ${SAMPLE_X[1]} ${ys[1]} ${SAMPLE_X[2]} ${ys[2]} ${SAMPLE_X[3]} ${ys[3]}`,
    `C ${SAMPLE_X[4]} ${ys[4]} ${SAMPLE_X[5]} ${ys[5]} ${SAMPLE_X[6]} ${ys[6]}`,
    `C ${SAMPLE_X[7]} ${ys[7]} ${SAMPLE_X[8]} ${ys[8]} ${SAMPLE_X[9]} ${ys[9]}`,
  ].join(" ");
}

function mirrorYs(ys: number[]) {
  return ys.map((y) => MIRROR_AXIS * 2 - y);
}

const LINES = PHASES.map((phase) => pathFromYs(sineYs(phase, BASE_Y, AMPLITUDE)));
const REFLECTIONS = PHASES.map((phase) =>
  pathFromYs(mirrorYs(sineYs(phase, BASE_Y, AMPLITUDE))),
);

export function HeroWave() {
  const reduceMotion = useReducedMotion();
  const id = useId();
  const sides = `${id}-sides`;
  const mask = `${id}-mask`;
  const reflectionMask = `${id}-reflection`;
  const fadeDown = `${id}-fade-down`;
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
          <linearGradient id={fadeDown} x1="0" y1="0" x2="0" y2="1">
            <stop offset="48%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="82%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id={mask}>
            <rect width="1600" height="900" fill={`url(#${sides})`} />
          </mask>
          <mask id={reflectionMask}>
            <rect width="1600" height="900" fill={`url(#${fadeDown})`} />
          </mask>
          <filter id={glow} x="-12%" y="-80%" width="124%" height="260%">
            <feGaussianBlur stdDeviation="26" />
          </filter>
          <filter id={core} x="-6%" y="-40%" width="112%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g mask={`url(#${mask})`}>
          <g mask={`url(#${reflectionMask})`}>
            <WavePair
              paths={REFLECTIONS}
              reduceMotion={!!reduceMotion}
              glow={`url(#${glow})`}
              core={`url(#${core})`}
              glowWidth={36}
              glowOpacity={0.14}
              coreWidth={6}
              coreOpacity={0.32}
            />
          </g>
          <WavePair
            paths={LINES}
            reduceMotion={!!reduceMotion}
            glow={`url(#${glow})`}
            core={`url(#${core})`}
            glowWidth={36}
            glowOpacity={0.2}
            coreWidth={7.5}
            coreOpacity={0.9}
          />
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
        strokeOpacity={coreOpacity}
        filter={core}
      />
    </>
  );
}
