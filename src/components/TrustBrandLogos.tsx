import { siGoogle, siMeta } from "simple-icons";

/**
 * Google’s mark reads lighter than Meta’s infinity at equal pixel height —
 * scale the G up slightly so perceived weight matches.
 */
function GoogleMark({
  compact,
  tone,
}: {
  compact?: boolean;
  tone?: "default" | "soft";
}) {
  const soft = tone === "soft";
  const color =
    soft && compact
      ? "text-muted grayscale opacity-[0.72]"
      : "text-neutral-700 grayscale";
  return (
    <span
      className={
        compact
          ? soft
            ? "inline-flex h-8 w-[5.25rem] items-center justify-center sm:h-9 sm:w-[5.75rem]"
            : "inline-flex h-10 w-[6.25rem] items-center justify-center sm:h-11 sm:w-[7rem]"
          : "inline-flex h-14 w-[8.5rem] items-center justify-center md:h-16 md:w-[9.5rem]"
      }
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={
          compact
            ? soft
              ? `h-[1.5rem] w-auto origin-center scale-[1.12] sm:h-[1.625rem] ${color}`
              : `h-[2rem] w-auto origin-center scale-[1.14] sm:h-[2.25rem] sm:scale-[1.12] ${color}`
            : `h-[2.75rem] w-auto origin-center scale-[1.14] md:h-[3rem] md:scale-[1.12] ${color}`
        }
        aria-label={siGoogle.title}
      >
        <title>{siGoogle.title}</title>
        <path fill="currentColor" d={siGoogle.path} />
      </svg>
    </span>
  );
}

function MetaMark({
  compact,
  tone,
}: {
  compact?: boolean;
  tone?: "default" | "soft";
}) {
  const soft = tone === "soft";
  const color =
    soft && compact
      ? "text-muted grayscale opacity-[0.72]"
      : "text-neutral-700 grayscale";
  return (
    <span
      className={
        compact
          ? soft
            ? "inline-flex h-8 w-[5.25rem] items-center justify-center sm:h-9 sm:w-[5.75rem]"
            : "inline-flex h-10 w-[6.25rem] items-center justify-center sm:h-11 sm:w-[7rem]"
          : "inline-flex h-14 w-[8.5rem] items-center justify-center md:h-16 md:w-[9.5rem]"
      }
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={
          compact
            ? soft
              ? `h-[1.35rem] w-auto sm:h-[1.45rem] ${color}`
              : `h-[1.75rem] w-auto sm:h-[2rem] ${color}`
            : `h-[2.35rem] w-auto md:h-[2.65rem] ${color}`
        }
        aria-label={siMeta.title}
      >
        <title>{siMeta.title}</title>
        <path fill="currentColor" d={siMeta.path} />
      </svg>
    </span>
  );
}

/** Prior-employer marks: balanced weight, flat on background (no tray affordance). */
export function TrustBrandLogos({
  className = "",
  size = "default",
  tone = "default",
}: {
  className?: string;
  size?: "default" | "compact";
  /** Hero / inline: lighter color and smaller marks so they sit with body copy. */
  tone?: "default" | "soft";
}) {
  const compact = size === "compact";
  return (
    <div
      className={`flex flex-row flex-wrap items-center ${compact && tone === "soft" ? "gap-x-5 gap-y-2 md:gap-x-6" : "gap-x-8 gap-y-3 md:gap-x-12"} ${compact ? "" : "mx-auto max-w-lg justify-center md:max-w-xl md:flex-nowrap md:gap-x-16"} ${className}`}
      role="group"
      aria-label="Prior experience at Google and Meta"
    >
      <GoogleMark compact={compact} tone={tone} />
      <MetaMark compact={compact} tone={tone} />
    </div>
  );
}
