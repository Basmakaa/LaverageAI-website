type ArrowButtonProps = {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
  className?: string;
};

export function ArrowButton({ direction, label, onClick, className }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`grid size-11 place-items-center transition-colors duration-300 ${className ?? "text-faint hover:text-fg"}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        aria-hidden="true"
      >
        {direction === "prev" ? (
          <path
            d="M14.5 5.5 8 12l6.5 6.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9.5 5.5 16 12l-6.5 6.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}
