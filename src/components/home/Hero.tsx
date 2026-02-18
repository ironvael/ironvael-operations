"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero, site } from "@/lib/copy";

export function Hero() {
  return (
    <section className="relative flex min-h-[85svh] flex-col justify-center px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl w-full">
        <motion.h1
          className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.subhead}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4 sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Button asChild size="lg" className="h-12 min-h-[44px] w-full justify-center px-8 text-base sm:w-auto sm:min-w-0">
            <Link href="/contact">
              {hero.primaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 min-h-[44px] w-full justify-center px-8 text-base sm:w-auto">
            <a href={`mailto:${site.email}`}>{hero.secondaryCta}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
