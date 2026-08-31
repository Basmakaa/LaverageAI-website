"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import type { GalleryPhoto } from "@/types";

const DESKTOP_VISIBLE = 3;
const MOBILE_QUERY = "(min-width: 768px)";

function useVisibleCount() {
  const [count, setCount] = useState(DESKTOP_VISIBLE);

  useEffect(() => {
    const desktop = window.matchMedia(MOBILE_QUERY);
    const sync = () => setCount(desktop.matches ? DESKTOP_VISIBLE : 1);
    sync();
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, []);

  return count;
}

function wrap(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function GalleryCarousel({ photos }: { photos: GalleryPhoto[] }) {
  const visible = useVisibleCount();
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const x = useMotionValue(0);

  const pageCount = Math.max(1, Math.ceil(photos.length / visible));
  const pages = Array.from({ length: pageCount }, (_, i) =>
    photos.slice(i * visible, i * visible + visible),
  );
  const pageRef = useRef(page);
  pageRef.current = page;

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => setViewportWidth(viewport.clientWidth);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, pageCount - 1));
  }, [pageCount]);

  useEffect(() => {
    x.set(-pageRef.current * viewportWidth);
  }, [viewportWidth, x]);

  const goTo = useCallback(
    (nextPage: number) => {
      const target = wrap(nextPage, pageCount);
      setPage(target);

      if (!viewportWidth) return;

      const destination = -target * viewportWidth;
      if (reduceMotion) {
        x.set(destination);
        return;
      }

      void animate(x, destination, {
        type: "tween",
        duration: 0.55,
        ease: [0.22, 0.75, 0.2, 1],
      });
    },
    [pageCount, reduceMotion, viewportWidth, x],
  );

  if (photos.length === 0) return null;

  return (
    <div
      className="mt-8"
      role="region"
      aria-roledescription="carousel"
      aria-label="Workshop photos"
    >
      <div className="relative">
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            className="flex cursor-grab active:cursor-grabbing touch-pan-y"
            style={{ x, width: pageCount > 1 ? `${pageCount * 100}%` : "100%" }}
            drag={pageCount > 1 ? "x" : false}
            dragConstraints={{
              left: -Math.max(0, (pageCount - 1) * viewportWidth),
              right: 0,
            }}
            dragElastic={0.16}
            onDragEnd={(_, info) => {
              const threshold = Math.min(80, viewportWidth * 0.18);
              if (info.offset.x < -threshold || info.velocity.x < -500) {
                goTo(page + 1);
                return;
              }
              if (info.offset.x > threshold || info.velocity.x > 500) {
                goTo(page - 1);
                return;
              }
              goTo(page);
            }}
          >
            {pages.map((pagePhotos, pageIndex) => (
              <div
                key={pagePhotos[0]?.src ?? pageIndex}
                className="flex gap-4"
                style={{ width: `${100 / pageCount}%` }}
              >
                {pagePhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="min-w-0 overflow-hidden rounded-2xl border border-line bg-card"
                    style={{
                      flex: `0 0 calc((100% - ${(visible - 1) * 1}rem) / ${visible})`,
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={682}
                      height={1024}
                      quality={95}
                      unoptimized
                      sizes="(min-width: 768px) 33vw, 92vw"
                      draggable={false}
                      className="aspect-[3/4] h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {pageCount > 1 ? (
          <>
            <CarouselButton
              label="Previous photos"
              onClick={() => goTo(page - 1)}
              className="absolute top-1/2 left-3 z-10 -translate-y-1/2 max-md:hidden"
            >
              <ChevronLeft className="size-5" strokeWidth={1.75} />
            </CarouselButton>
            <CarouselButton
              label="Next photos"
              onClick={() => goTo(page + 1)}
              className="absolute top-1/2 right-3 z-10 -translate-y-1/2 max-md:hidden"
            >
              <ChevronRight className="size-5" strokeWidth={1.75} />
            </CarouselButton>
          </>
        ) : null}
      </div>

      {pageCount > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselButton
            label="Previous photos"
            onClick={() => goTo(page - 1)}
            className="md:hidden"
          >
            <ChevronLeft className="size-5" strokeWidth={1.75} />
          </CarouselButton>

          <div className="flex items-center gap-2" role="tablist" aria-label="Gallery pages">
            {pages.map((_, i) => {
              const active = i === page;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show photos ${i * visible + 1} to ${Math.min((i + 1) * visible, photos.length)}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              );
            })}
          </div>

          <CarouselButton
            label="Next photos"
            onClick={() => goTo(page + 1)}
            className="md:hidden"
          >
            <ChevronRight className="size-5" strokeWidth={1.75} />
          </CarouselButton>
        </div>
      ) : null}

      <p className="sr-only" aria-live="polite">
        Showing photos {page * visible + 1} to {Math.min((page + 1) * visible, photos.length)} of{" "}
        {photos.length}
      </p>
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  className,
  children,
}: {
  label: string;
  onClick: () => void;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex size-11 items-center justify-center rounded-full border border-line bg-[#111111]/90 text-fg shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:bg-white/[0.08] ${className ?? ""}`}
    >
      {children}
    </button>
  );
}
