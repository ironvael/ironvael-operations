"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings2,
  Globe,
  Scale,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { InquiryForm } from "./InquiryForm";
import { PartnershipsModule } from "./PartnershipsModule";
import { contactPage, type ContactRoute } from "@/lib/copy";
import { cn } from "@/lib/utils";

const ROUTE_ICONS: Record<ContactRoute, LucideIcon> = {
  ops: Settings2,
  web: Globe,
  compliance: Scale,
  partnerships: Handshake,
};

const ROUTE_TITLES: Record<ContactRoute, string> = {
  ops: "Operations & Infrastructure",
  web: "Web / Brand / Marketing",
  compliance: "Entity Formation & Compliance",
  partnerships: "Partnerships",
};

const VALID_TYPES: ContactRoute[] = [
  "ops",
  "web",
  "compliance",
  "partnerships",
];

export function ContactPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const selected: ContactRoute =
    typeParam && VALID_TYPES.includes(typeParam as ContactRoute)
      ? (typeParam as ContactRoute)
      : "ops";

  const setRoute = useCallback(
    (route: ContactRoute) => {
      router.replace(`/contact?type=${route}`, { scroll: false });
    },
    [router]
  );

  useEffect(() => {
    if (!typeParam || !VALID_TYPES.includes(typeParam as ContactRoute)) {
      router.replace("/contact?type=ops", { scroll: false });
    }
  }, [typeParam, router]);

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8">
      {/* Header */}
      <header className="mb-16">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {contactPage.hero.headline}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          {contactPage.hero.subtext}
        </p>
        <p className="mt-4 text-sm text-muted-foreground/80">
          {contactPage.hero.microtext}
        </p>
      </header>

      {/* Two-column grid */}
      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Left: Routing cards */}
        <aside>
          <h2 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {contactPage.routing.title}
          </h2>
          <div className="space-y-3">
            {contactPage.routing.cards.map((card) => {
              const Icon = ROUTE_ICONS[card.id];
              const isSelected = selected === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setRoute(card.id)}
                  className={cn(
                    "flex w-full items-start gap-4 rounded-md border px-4 py-4 text-left transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isSelected
                      ? "border-primary/50 bg-card/60"
                      : "border-border/50 bg-card/20 hover:border-border hover:bg-card/40"
                  )}
                  aria-pressed={isSelected}
                  aria-label={`Select ${card.title}`}
                >
                  <Icon
                    className={cn(
                      "mt-0.5 size-5 shrink-0",
                      isSelected ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  <div className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block font-medium",
                        isSelected ? "text-foreground" : "text-muted-foreground"
                      )}
                    >
                      {card.title}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      {card.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right: Dynamic panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="min-w-0"
          >
          <Card className="rounded-sm border-2 border-border/60 bg-card/30 px-6 py-12 shadow-none sm:px-12 sm:py-14">
            <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
              {selected === "partnerships"
                ? ROUTE_TITLES.partnerships
                : `Request: ${ROUTE_TITLES[selected]}`}
            </h2>
            <div className="mt-8">
              {selected === "partnerships" ? (
                <PartnershipsModule />
              ) : (
                <InquiryForm route={selected} />
              )}
            </div>
          </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom: What happens next */}
      <section className="mt-20 border-t border-border/50 pt-16">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          {contactPage.expectations.headline}
        </h2>
        <ul className="mt-6 space-y-3">
          {contactPage.expectations.items.map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
