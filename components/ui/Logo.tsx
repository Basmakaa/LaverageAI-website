import Image from "next/image";

type LogoProps = {
  /** Hide the wordmark and render the monogram alone. */
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 text-fg ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="LaverageAI"
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-md"
        priority
      />
      {!compact && (
        <span className="text-sm font-semibold tracking-[0.08em] whitespace-nowrap">
          LAVERAGE <strong className="font-extrabold">AI</strong>
        </span>
      )}
    </span>
  );
}
