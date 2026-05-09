import {
  CheckCircle2,
  Database,
  FileText,
  LayoutDashboard,
  Table2,
  Unplug,
} from "lucide-react";

/**
 * Desktop: full lucide metaphor. Mobile: single lightweight SVG (same story, less noise).
 */
export function HeroVisual() {
  return (
    <>
      <div className="md:hidden">
        <HeroVisualMobile />
      </div>
      <div className="hidden md:block">
        <HeroVisualDesktop />
      </div>
    </>
  );
}

/** Compact SVG — chaos → kerf → aligned rows; scales as one unit on narrow screens. */
function HeroVisualMobile() {
  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-2xl border border-border-soft bg-white px-4 py-5 shadow-sm">
        <svg
          viewBox="0 0 400 156"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full max-h-[180px]"
          role="img"
          aria-label="From fragmented manual work to consistent automated workflows"
        >
          <title>From fragmented manual work to consistent automated workflows</title>
          <defs>
            <linearGradient
              id="heroKerfGrad"
              x1="196.5"
              y1="20"
              x2="196.5"
              y2="136"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#70cbcc" />
              <stop offset="0.5" stopColor="#49babc" />
              <stop offset="1" stopColor="#70cbcc" />
            </linearGradient>
          </defs>
          {/* Left: tilted grid “noise” */}
          <g opacity={0.55} transform="translate(14 34) rotate(-10 46 36)">
            <rect
              width={94}
              height={74}
              rx={4}
              fill="#faf9f7"
              stroke="#e7e5e4"
              strokeWidth={1}
            />
            <path
              d="M0 24h94M0 48h94M31 0v74M62 0v74"
              stroke="#e7e5e4"
              strokeWidth={1}
            />
            <rect
              x={34}
              y={28}
              width={14}
              height={14}
              rx={2}
              fill="#49babc"
              fillOpacity={0.14}
            />
            <rect
              x={10}
              y={8}
              width={12}
              height={12}
              rx={2}
              fill="#49babc"
              fillOpacity={0.1}
            />
          </g>
          <circle cx={118} cy={48} r={3} fill="#49babc" fillOpacity={0.4} />
          <circle cx={130} cy={98} r={2.5} fill="#737373" fillOpacity={0.35} />
          {/* Center kerf */}
          <rect
            x={194}
            y={20}
            width={5}
            height={116}
            rx={2.5}
            fill="url(#heroKerfGrad)"
          />
          {/* Right: aligned checklist rows */}
          <g fill="none">
            <g transform="translate(228 28)">
              <rect
                width={164}
                height={28}
                rx={7}
                fill="#f5f4f1"
                stroke="#49babc"
                strokeOpacity={0.28}
                strokeWidth={1}
              />
              <path
                d="M 14 14 L 17 17 L 24 10"
                stroke="#49babc"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={36}
                y={11}
                width={108}
                height={6}
                rx={2}
                fill="#49babc"
                fillOpacity={0.22}
              />
            </g>
            <g transform="translate(228 64)">
              <rect
                width={164}
                height={28}
                rx={7}
                fill="#f5f4f1"
                stroke="#49babc"
                strokeOpacity={0.28}
                strokeWidth={1}
              />
              <path
                d="M 14 14 L 17 17 L 24 10"
                stroke="#49babc"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={36}
                y={11}
                width={108}
                height={6}
                rx={2}
                fill="#49babc"
                fillOpacity={0.22}
              />
            </g>
            <g transform="translate(228 100)">
              <rect
                width={164}
                height={28}
                rx={7}
                fill="#f5f4f1"
                stroke="#49babc"
                strokeOpacity={0.28}
                strokeWidth={1}
              />
              <path
                d="M 14 14 L 17 17 L 24 10"
                stroke="#49babc"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={36}
                y={11}
                width={108}
                height={6}
                rx={2}
                fill="#49babc"
                fillOpacity={0.22}
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeroVisualDesktop() {
  return (
    <div className="relative mx-auto w-full">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-border-soft bg-white p-6 shadow-sm"
        aria-hidden
      >
        <div className="grid min-h-[240px] grid-cols-[1fr_auto_1fr] items-center gap-5 lg:gap-8">
          <div className="relative h-44 min-h-0 w-full min-w-0">
            <div
              className="absolute left-0 top-2 grid w-[9rem] rotate-[-10deg] grid-cols-6 gap-px rounded-md border border-border-soft bg-border-soft p-px opacity-55 shadow-sm"
              style={{ transformOrigin: "top left" }}
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square bg-white ${i % 5 === 0 ? "bg-kerf-teal/15" : ""} ${i === 11 ? "bg-kerf-teal/25" : ""}`}
                />
              ))}
            </div>

            <Database
              className="absolute left-[42%] top-8 h-10 w-10 -rotate-12 text-kerf-teal/75"
              strokeWidth={1.65}
            />
            <FileText
              className="absolute right-4 top-10 h-8 w-8 rotate-[14deg] text-foreground/45"
              strokeWidth={1.65}
            />
            <Table2
              className="absolute bottom-6 left-6 h-8 w-8 rotate-[6deg] text-muted"
              strokeWidth={1.65}
            />
            <Unplug
              className="absolute bottom-10 right-8 h-7 w-7 -rotate-[18deg] text-foreground/40"
              strokeWidth={1.65}
            />
            <div className="absolute bottom-4 left-1/4 flex gap-1 opacity-60">
              <span className="h-2 w-2 rounded-full bg-kerf-teal/50" />
              <span className="h-2 w-2 rounded-full bg-muted" />
              <span className="h-2 w-2 rounded-full bg-border-soft" />
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center px-0.5">
            <div className="relative h-44 w-[3px]">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-kerf-teal-light via-kerf-teal to-kerf-teal-light opacity-95 shadow-[0_0_22px_rgba(73,186,188,0.5)]"
                aria-hidden
              />
            </div>
          </div>

          <div className="flex min-w-0 w-full max-w-none flex-col justify-self-end gap-3">
            <div className="rounded-lg border border-kerf-teal/20 bg-surface-subtle/80 p-3 ring-1 ring-kerf-teal/10">
              <div className="mb-2 flex items-center justify-between gap-2 border-b border-border-soft pb-2">
                <LayoutDashboard
                  className="h-5 w-5 text-kerf-teal"
                  strokeWidth={1.75}
                />
                <div className="h-1.5 flex-1 rounded-full bg-kerf-teal/25" />
              </div>
              <div className="space-y-2">
                <ConnectedRow label="Reconciled" />
                <ConnectedRow label="Validated" />
                <ConnectedRow label="Synced" />
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <CheckCircle2
                className="h-6 w-6 text-kerf-teal"
                strokeWidth={1.75}
              />
              <div className="h-px w-8 bg-kerf-teal/35" />
              <CheckCircle2
                className="h-6 w-6 text-kerf-teal"
                strokeWidth={1.75}
              />
              <div className="h-px w-8 bg-kerf-teal/35" />
              <CheckCircle2
                className="h-6 w-6 text-kerf-teal"
                strokeWidth={1.75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConnectedRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-left">
      <CheckCircle2
        className="h-4 w-4 shrink-0 text-kerf-teal"
        strokeWidth={2}
      />
      <div className="h-2 flex-1 rounded-sm bg-kerf-teal/20" />
      <span className="w-14 shrink-0 text-[10px] font-medium uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}
