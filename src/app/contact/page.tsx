import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact — Ironvael Operations",
  description:
    "Contact Ironvael. Choose your path. We respond when there is alignment. Forged in Permanence.",
};

function ContactLoading() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8">
      <div className="h-12 w-64 animate-pulse rounded bg-card/60" />
      <div className="mt-4 h-6 w-96 animate-pulse rounded bg-card/40" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<ContactLoading />}>
        <ContactPageContent />
      </Suspense>
    </main>
  );
}
