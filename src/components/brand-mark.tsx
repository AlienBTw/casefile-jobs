import { cn } from "@/lib/cn";

/** Casefile Jobs' mark, as in src/app/icon.svg, in the primary colours, so it turns light in the dark scheme. Decorative: put the name next to it. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="64" height="64" rx="14.08" className="fill-primary" />
      <path
        className="fill-on-primary"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 18h11l4 5h13a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H18a3 3 0 0 1-3-3V21a3 3 0 0 1 3-3Zm4 13v2.5h20V31H22Zm0 6v2.5h13V37H22Z"
      />
    </svg>
  );
}
