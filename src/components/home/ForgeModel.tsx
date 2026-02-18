"use client";

import { motion } from "framer-motion";
import { Section, SectionContent } from "@/components/Section";
import { forgeModel } from "@/lib/copy";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const blockVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function ForgeModel() {
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
          {forgeModel.headline}
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {forgeModel.blocks.map((blockData, i) => (
            <motion.article
              key={blockData.title}
              className="border border-border/50 bg-card/30 p-5 sm:p-6"
              variants={blockVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs font-medium tracking-wider text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                {blockData.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground/80">Inputs:</span>{" "}
                  {blockData.inputs}
                </div>
                <div>
                  <span className="font-medium text-foreground/80">What we build:</span>{" "}
                  {blockData.builds}
                </div>
                <div>
                  <span className="font-medium text-foreground/80">Outcome:</span>{" "}
                  {blockData.outcome}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
