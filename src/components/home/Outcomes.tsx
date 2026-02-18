"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/Section";
import { outcomes } from "@/lib/copy";

export function Outcomes() {
  return (
    <Section>
      <SectionContent>
        <motion.h2
          className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {outcomes.headline}
        </motion.h2>
        <ul className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 sm:grid-cols-2">
          {outcomes.items.map((outcome, i) => (
            <motion.li
              key={outcome}
              className="border-l-2 border-primary/50 pl-5 text-base text-muted-foreground sm:pl-6 sm:text-lg"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {outcome}
            </motion.li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
}
