"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, site } from "@/lib/copy";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center px-6 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl w-full">
        <motion.h1
          className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.subhead}
        </motion.p>
        <motion.div
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/contact">
              {hero.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
            <a href={`mailto:${site.email}`}>{hero.secondaryCta}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
