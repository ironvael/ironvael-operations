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
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
            {finalCta.headline}
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" className="h-12 min-h-[44px] w-full justify-center px-8 text-base sm:w-auto">
              <Link href="/contact">
                {finalCta.primaryCta}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 min-h-[44px] w-full justify-center px-8 text-base sm:w-auto">
              <a href={`mailto:${site.email}`}>{finalCta.secondaryCta}</a>
            </Button>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
