type LogoProps = {
  /** Hide the wordmark and render the monogram alone. */
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 text-fg ${className ?? ""}`}>
      <svg
        viewBox="0 0 72 72"
        role="img"
        aria-label="LaverageAI monogram"
        className="h-9 w-9 shrink-0"
      >
        <path
          d="M12 10h8v37c0 2.6.4 4.9 1.3 6.7L40 37.5l4.9 6-24.7 18.7C14.8 59.1 12 54.1 12 47V10Z"
          fill="currentColor"
        />
        <path d="M39.1 20 62 59h-9.2L39.2 35.8 29.8 51h-9.1L39.1 20Z" fill="currentColor" />
        <path d="m35.2 52.1 8.2 0 4 6.9h-8.1l-4.1-6.9Z" fill="currentColor" opacity=".65" />
      </svg>
      {!compact && (
        <span className="text-sm font-semibold tracking-[0.08em] whitespace-nowrap">
          LAVERAGE <strong className="font-extrabold">AI</strong>
        </span>
      )}
    </span>
  );
}
