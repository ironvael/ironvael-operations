"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/Section";
import { problem } from "@/lib/copy";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Problem() {
  return (
    <Section className="border-y border-border/50 bg-card/30">
      <SectionContent>
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            variants={item}
          >
            {problem.headline}
          </motion.h2>
          <ul className="mt-8 space-y-4">
            {problem.items.map((statement) => (
              <motion.li
                key={statement}
                className="text-lg text-muted-foreground"
                variants={item}
              >
                {statement}
              </motion.li>
            ))}
          </ul>
          <motion.p
            className="mt-12 text-xl font-medium text-foreground"
            variants={item}
          >
            {problem.resolution}
          </motion.p>
        </motion.div>
      </SectionContent>
    </Section>
  );
}
