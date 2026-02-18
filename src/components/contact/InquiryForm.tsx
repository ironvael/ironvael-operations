"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactPage,
  type ContactRoute,
} from "@/lib/copy";

const ROUTE_TITLES: Record<Exclude<ContactRoute, "partnerships">, string> = {
  ops: "Operations & Infrastructure",
  web: "Web / Brand / Marketing",
  compliance: "Entity Formation & Compliance",
};

const inputBase =
  "h-12 min-h-[44px] w-full rounded-sm border border-border/70 bg-background/50 px-4 text-base transition-[border-color,box-shadow] placeholder:text-muted-foreground/60 focus-visible:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/10 disabled:opacity-50 sm:text-[15px]";

interface InquiryFormProps {
  route: Exclude<ContactRoute, "partnerships">;
}

export function InquiryForm({ route }: InquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [budgetRange, setBudgetRange] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const details = String(formData.get("details")).trim();
    const budgetLabel =
      contactPage.form.budgetOptions.find((o) => o.value === budgetRange)
        ?.label ?? budgetRange;
    const timelineLabel =
      contactPage.form.timelineOptions.find((o) => o.value === timeline)
        ?.label ?? timeline;

    const primaryConstraint = `[Inquiry: ${ROUTE_TITLES[route]} | Budget: ${budgetLabel} | Timeline: ${timelineLabel}]\n\n${details}`;

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      primaryConstraint,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setBudgetRange("");
        setTimeline("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const detailsLabel = contactPage.form.labels.details[route];
  const framing = contactPage.form.framing[route];

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border border-foreground/20 bg-foreground/5">
            <Check className="size-5 text-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-medium text-foreground">Request received.</p>
            <p className="text-sm text-muted-foreground">
              We will respond when there is alignment.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {framing}
      </p>

      <div className="space-y-6">
        <fieldset className="space-y-6">
          <legend className="sr-only">Contact</legend>
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {contactPage.form.labels.name}
            </label>
            <Input
              id="name"
              name="name"
              required
              className={inputBase}
              disabled={status === "loading"}
              aria-required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {contactPage.form.labels.email}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className={inputBase}
              disabled={status === "loading"}
              aria-required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {contactPage.form.labels.company}
            </label>
            <Input
              id="company"
              name="company"
              className={inputBase}
              disabled={status === "loading"}
            />
          </div>
        </fieldset>

        <div className="border-t border-border/40 pt-6">
          <fieldset className="space-y-6">
            <legend className="sr-only">Engagement scope</legend>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="budgetRange"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  {contactPage.form.labels.budgetRange}
                </label>
                <Select
                  value={budgetRange}
                  onValueChange={setBudgetRange}
                  disabled={status === "loading"}
                >
                  <SelectTrigger
                    id="budgetRange"
                    className={`${inputBase} flex w-full items-center justify-between`}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactPage.form.budgetOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="timeline"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  {contactPage.form.labels.timeline}
                </label>
                <Select
                  value={timeline}
                  onValueChange={setTimeline}
                  disabled={status === "loading"}
                >
                  <SelectTrigger
                    id="timeline"
                    className={`${inputBase} flex w-full items-center justify-between`}
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactPage.form.timelineOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="space-y-2 border-t border-border/40 pt-6">
          <label
            htmlFor="details"
            className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            {detailsLabel}
          </label>
          <Textarea
            id="details"
            name="details"
            required
            rows={6}
            className={`${inputBase} min-h-[140px] resize-y py-4`}
            disabled={status === "loading"}
            aria-required
          />
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          size="lg"
          className="h-14 w-full min-w-[200px] rounded-sm border-2 border-foreground bg-foreground px-10 py-6 text-base font-semibold text-background transition-colors hover:bg-foreground/95 hover:text-background sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : contactPage.form.submitLabel}
        </Button>
        {status === "error" && (
          <p className="mt-4 text-sm text-muted-foreground">
            Submission failed. Please email{" "}
            <a
              href="mailto:hello@ironvael.com"
              className="underline underline-offset-2 hover:no-underline"
            >
              hello@ironvael.com
            </a>{" "}
            directly.
          </p>
        )}
      </div>
    </form>
  );
}
