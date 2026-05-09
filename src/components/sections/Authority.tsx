import { site } from "@/content/site";
import { TrustBrandLogos } from "@/components/TrustBrandLogos";

import { SectionReveal } from "../SectionReveal";

export function Authority() {
  return (
    <SectionReveal className="border-t border-border-soft bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl md:leading-snug">
          {site.authority.heading}
        </h2>

        <TrustBrandLogos className="mt-14 md:mt-20" />

        <div className="mx-auto mt-14 max-w-prose space-y-6 text-left text-lg leading-relaxed text-muted md:mt-20 md:text-xl">
          {site.authority.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
