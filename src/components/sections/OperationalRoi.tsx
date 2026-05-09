import { CalendarClock, FileText, GitBranch } from "lucide-react";

import { site } from "@/content/site";

import { SectionReveal } from "../SectionReveal";

const icons = [CalendarClock, GitBranch, FileText] as const;

export function OperationalRoi() {
  return (
    <SectionReveal
      id="results"
      className="scroll-mt-24 border-t border-border-soft bg-background py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {site.operationalRoi.heading}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {site.operationalRoi.results.map((item, i) => {
            const Icon = icons[i] ?? CalendarClock;
            return (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm md:p-8"
              >
                <Icon
                  className="mb-4 h-9 w-9 text-kerf-teal"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
