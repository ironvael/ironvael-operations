import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionContent } from "@/components/Section";
import { engagementPage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Engagement — Ironvael Operations",
  description:
    "How we work: Audit, Build, and Operator engagement types. Fixed-scope audits, custom builds, and ongoing partnerships.",
};

export default function EngagementPage() {
  return (
    <main className="min-h-screen pt-32">
      <Section>
        <SectionContent className="max-w-4xl">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {engagementPage.headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {engagementPage.intro}
          </p>
          <div className="mt-16 space-y-8">
            {engagementPage.types.map((type, i) => (
              <article
                key={type.title}
                className="border border-border/50 bg-card/20 p-8"
              >
                <div className="text-xs font-medium tracking-wider text-muted-foreground">
                  0{i + 1}
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {type.title}
                </h2>
                <p className="mt-4 text-muted-foreground">{type.description}</p>
                <p className="mt-4 text-sm font-medium text-foreground/90">
                  Outcome: {type.outcome}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/contact">
                Request an Engagement
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
