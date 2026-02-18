"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionContent } from "@/components/Section";
import { capabilities } from "@/lib/copy";

export function CapabilitiesSummary() {
  return (
    <Section className="border-y border-border/50 bg-card/20">
      <SectionContent>
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {capabilities.headline}
            </h2>
            <p className="mt-4 text-muted-foreground">{capabilities.intro}</p>
          </div>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            View all capabilities
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="border border-border/50 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
