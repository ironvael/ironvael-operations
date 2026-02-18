import type { Metadata } from "next";
import { Section, SectionContent } from "@/components/Section";
import { aboutPage } from "@/lib/copy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ironvael Operations is the operating arm of Ironvael—building systems, infrastructure, and foundations for durability and permanence.",
  openGraph: {
    title: "About | Ironvael Operations",
    description:
      "Ironvael Operations is the operating arm of Ironvael—building systems, infrastructure, and foundations for durability and permanence.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-32">
      <Section>
        <SectionContent className="max-w-3xl">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {aboutPage.headline}
          </h1>
          <div className="mt-12 space-y-10 sm:mt-16 sm:space-y-12">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Venture Studio
              </h2>
              <p className="mt-4 text-muted-foreground">
                {aboutPage.ventureStudio}
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Operating Arm
              </h2>
              <p className="mt-4 text-muted-foreground">
                {aboutPage.operationsArm}
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Philosophy
              </h2>
              <p className="mt-4 text-muted-foreground">
                {aboutPage.philosophy}
              </p>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Values
              </h2>
              <ul className="mt-6 space-y-4">
                {aboutPage.values.map((value) => (
                  <li key={value.name}>
                    <span className="font-medium text-foreground">
                      {value.name}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      — {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border/50 pt-12">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Founder
              </h2>
              <p className="mt-2 font-medium text-foreground">
                {aboutPage.founder.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {aboutPage.founder.title}
              </p>
              <p className="mt-4 text-muted-foreground">
                {aboutPage.founder.bio}
              </p>
            </div>
          </div>
        </SectionContent>
      </Section>
    </main>
  );
}
