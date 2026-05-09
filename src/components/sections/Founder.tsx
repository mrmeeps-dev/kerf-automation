import Image from "next/image";

import { site } from "@/content/site";

import { SectionReveal } from "../SectionReveal";

export function Founder() {
  return (
    <SectionReveal
      id="about"
      className="scroll-mt-24 border-t border-border-soft bg-white py-16 md:scroll-mt-28 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3 md:gap-12 lg:gap-16">
          <div className="flex justify-center md:col-span-1 md:justify-end">
            <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full border border-border-soft shadow-md ring-1 ring-border-soft md:h-64 md:w-64">
              <Image
                src="/brand/founder-kyle-hamilton.jpg"
                alt="Kyle Hamilton, Principal Operational Engineer"
                width={429}
                height={484}
                className="h-full w-full object-cover object-center"
                sizes="(max-width: 768px) 192px, 256px"
                priority={false}
              />
            </div>
          </div>

          <div className="text-left md:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {site.founder.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
              {site.founder.body}
            </p>
            <p className="mt-8 text-base text-foreground md:text-lg">
              <span className="font-bold">{site.founder.signatureName}</span>
              <span className="font-normal text-muted">
                , {site.founder.signatureRole}
              </span>
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
