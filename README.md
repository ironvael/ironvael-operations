# Ironvael Operations

*Forged in Permanence.*

A Next.js website for Ironvael Operations—an operating firm that builds durable business infrastructure.

---

## Critique of the Previous Site (Generic Consulting Template)

If the prior site was a typical consulting template, it likely suffered from:

- **Generic value props** — Phrases like "solutions," "partnership," "results-driven" that could apply to any firm
- **Startup aesthetic** — Bright gradients, rounded corners, playful CTAs, tech-blue accents
- **Copy that sounds like marketing** — Buzzwords (unlock, leverage, optimize) instead of substance
- **Testimonial bloat** — Social proof that feels manufactured rather than earned
- **Shallow structure** — Services as interchangeable cards with no depth or hierarchy
- **No philosophy** — No clear point of view; tone indistinguishable from competitors

The refactor addresses this by grounding everything in the forge metaphor: durable, industrial, technical. Copy reads like specification, not pitch.

---

## Component Structure

```
src/
├── app/
│   ├── api/lead/route.ts      # Form handler (POST /api/lead)
│   ├── capabilities/page.tsx
│   ├── engagement/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   ├── page.tsx               # Home
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── ForgeModel.tsx
│   │   ├── CapabilitiesSummary.tsx
│   │   ├── Outcomes.tsx
│   │   └── FinalCta.tsx
│   ├── ui/                    # shadcn: button, input, textarea
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Section.tsx            # Layout wrapper
└── lib/
    ├── copy.ts                # All site copy (single source of truth)
    └── utils.ts
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Icons:** lucide-react
- **Motion:** Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where Copy Lives

All marketing and page content is centralized in:

```
src/lib/copy.ts
```

Edit this file to change:

- **Site metadata:** `site`, `nav`
- **Home page:** `hero`, `problem`, `forgeModel`, `capabilities`, `outcomes`, `finalCta`
- **Capabilities page:** `capabilitiesPage`
- **Engagement page:** `engagementPage`
- **About page:** `aboutPage`
- **Contact page:** `contactPage`

No copy is hardcoded in components. Update `copy.ts` and the site reflects it.

## How to Edit Capabilities

Capabilities are defined in `src/lib/copy.ts` in two places:

1. **`capabilities`** — Used on the home page summary (title + short description)
2. **`capabilitiesPage.sections`** — Used on the full Capabilities page (spec-style with covers, for, outcomes, examples)

Each section in `capabilitiesPage.sections` has:

- `title` — Capability name
- `covers` — What this domain covers
- `for` — Who it’s for
- `outcomes` — Typical outcomes (array)
- `examples` — Example engagements (array)

Add or remove sections in both `capabilities.items` and `capabilitiesPage.sections` to stay in sync.

## Form & CRM Integration

The contact form posts to `/api/lead` with:

```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "challenge": "string"
}
```

### Current Behavior

- Validates required fields (`name`, `email`, `primaryConstraint`)
- Sends an email via Resend (if `RESEND_API_KEY` is set)
- Logs the lead to the console
- Returns `{ success: true }` or an error

### Resend (Configured)

Leads are emailed via Resend. Set in `.env.local`:

```bash
RESEND_API_KEY=re_xxxx           # Required for email delivery
RESEND_FROM_EMAIL=Ironvael <noreply@ironvael.com>   # Default: onboarding@resend.dev (sandbox)
RESEND_TO_EMAIL=hello@ironvael.com                  # Where leads are sent (default: hello@ironvael.com)
```

- **Sandbox:** With `onboarding@resend.dev`, emails only reach the address you signed up with.
- **Production:** Verify your domain in the Resend dashboard, then set `RESEND_FROM_EMAIL` to your verified address.
- **Reply-to:** The visitor’s email is set as reply-to, so you can reply directly.

### Wiring to a CRM

Edit `src/app/api/lead/route.ts`. After building the `lead` object, add your integration:

**HubSpot**
```bash
npm install @hubspot/api-client
```
```ts
import { Client } from "@hubspot/api-client";
const hubspot = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });
await hubspot.crm.contacts.basicApi.create({
  properties: {
    email: lead.email,
    firstname: lead.name,
    company: lead.company ?? "",
    message: lead.challenge,
  },
});
```

**Notion**
```bash
npm install @notionhq/client
```
```ts
import { Client } from "@notionhq/client";
const notion = new Client({ auth: process.env.NOTION_API_KEY });
await notion.pages.create({
  parent: { database_id: process.env.NOTION_LEADS_DB_ID! },
  properties: {
    Name: { title: [{ text: { content: lead.name } }] },
    Email: { email: lead.email },
    Company: { rich_text: [{ text: { content: lead.company ?? "" } }] },
    Challenge: { rich_text: [{ text: { content: lead.challenge } }] },
  },
});
```

**Airtable**
```bash
npm install airtable
```
```ts
import Airtable from "airtable";
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);
await base("Leads").create([{
  fields: {
    Name: lead.name,
    Email: lead.email,
    Company: lead.company ?? "",
    Challenge: lead.challenge,
  },
}]);
```

Add the required env vars to `.env.local` and deploy.

## SEO

- **Config:** `src/lib/seo.ts` (site URL, keywords)
- **Layout:** metadataBase, Open Graph, Twitter cards, robots, JSON-LD (Organization + WebSite)
- **Pages:** Unique title, description, canonical URL, Open Graph
- **Sitemap:** `/sitemap.xml` — set `NEXT_PUBLIC_SITE_URL` for production
- **Robots:** `/robots.txt`
- **Favicon:** `public/favicon.ico` — wired in layout
- **OG image:** `public/og.png` (1200×630) — wired in layout
- **Verification:** `GOOGLE_SITE_VERIFICATION`, `YANDEX_VERIFICATION` in `.env.local`
- **Twitter:** `NEXT_PUBLIC_TWITTER_HANDLE` (e.g. `@ironvael`) in `.env.local`
- Robots: `/robots.txt` (allows all, references sitemap)

## Project Structure

```
src/
├── app/
│   ├── api/lead/         # Form submission handler
│   ├── capabilities/
│   ├── engagement/
│   ├── about/
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx          # Home
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/             # Home page sections
│   ├── ui/               # shadcn components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Header.tsx
└── lib/
    ├── copy.ts           # All site copy
    └── utils.ts
```

## Design System

- **Colors:** Charcoal, dark steel, black stone (see `globals.css` `:root`)
- **Typography:** Archivo (headings), DM Sans (body)
- **Philosophy:** Dominant, timeless, calm, industrial. No bright colors or playful elements.
