import { ClipboardList, Link2Off, Table2 } from "lucide-react";

import { site } from "@/content/site";

import { SectionReveal } from "../SectionReveal";

const icons = [Table2, Link2Off, ClipboardList] as const;

export function Symptoms() {
  return (
    <SectionReveal
      id="services"
      className="scroll-mt-24 bg-background pb-16 pt-24 md:scroll-mt-28 md:pb-28 md:pt-40"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {site.symptoms.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {site.symptoms.subtext}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {site.symptoms.pains.map((pain, i) => {
            const Icon = icons[i] ?? Table2;
            return (
              <article
                key={pain.title}
                className="flex flex-col rounded-2xl border border-border-soft bg-white p-6 shadow-sm md:p-8"
              >
                <Icon
                  className="mb-4 h-9 w-9 text-kerf-teal"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {pain.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{pain.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
