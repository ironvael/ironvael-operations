import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/Section";
import { capabilitiesPage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Operations consulting, business infrastructure, compliance, web systems, brand positioning, and founder advisory.",
  openGraph: {
    title: "Capabilities | Ironvael Operations",
    description:
      "Operations consulting, business infrastructure, compliance, web systems, brand positioning, and founder advisory.",
    url: "/capabilities",
  },
  alternates: {
    canonical: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-32">
      <Section>
        <SectionContent className="max-w-4xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Capabilities
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:mt-6 sm:text-lg">
            {capabilitiesPage.intro}
          </p>
          <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24">
            {capabilitiesPage.sections.map((section) => (
              <article
                key={section.title}
                className="border-b border-border/50 pb-12 last:border-0 last:pb-0 sm:pb-16"
              >
                <div className="text-xs font-medium tracking-wider text-muted-foreground">
                  Specification
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-8 space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-sm font-medium text-foreground/90">
                      What this domain covers
                    </h3>
                    <p className="mt-1">{section.covers}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground/90">
                      Who it's for
                    </h3>
                    <p className="mt-1">{section.for}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground/90">
                      Typical outcomes
                    </h3>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {section.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground/90">
                      Example engagements
                    </h3>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      {section.examples.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
