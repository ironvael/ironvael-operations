"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionContent } from "@/components/Section";
import { finalCta, site } from "@/lib/copy";

export function FinalCta() {
  return (
    <Section className="border-t border-border/50 bg-card/30">
      <SectionContent>
        <motion.div
          className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base">
              <Link href="/contact">
                {finalCta.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
              <a href={`mailto:${site.email}`}>{finalCta.secondaryCta}</a>
            </Button>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
