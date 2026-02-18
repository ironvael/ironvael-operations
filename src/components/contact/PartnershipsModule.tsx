import { contactPage } from "@/lib/copy";

export function PartnershipsModule() {
  return (
    <div className="space-y-8">
      <p className="text-[15px] leading-relaxed text-muted-foreground">
        {contactPage.partnerships.text}
      </p>
      <div className="rounded-sm border border-border/60 bg-background/30 px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Email
        </p>
        <a
          href={`mailto:${contactPage.partnerships.email}`}
          className="mt-2 block text-[17px] font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          {contactPage.partnerships.email}
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        {contactPage.partnerships.note}
      </p>
    </div>
  );
}
