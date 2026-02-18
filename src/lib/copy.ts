/**
 * Ironvael Operations — Site Copy
 * Edit all marketing and page content here.
 */

export const site = {
  name: "Ironvael Operations",
  tagline: "Forged in Permanence",
  email: "hello@ironvael.com",
  description:
    "Ironvael Operations builds the systems, infrastructure, and operating foundations that businesses rely on for the long term.",
} as const;

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/engagement", label: "Engagement" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const hero = {
  headline: "Forged in Permanence.",
  subhead:
    "Ironvael Operations builds the systems, infrastructure, and operating foundations that businesses rely on for the long term.",
  primaryCta: "Request an Engagement",
  secondaryCta: "Email Ironvael",
} as const;

export const problem = {
  headline: "Most businesses are built on temporary solutions.",
  items: [
    "Roles are unclear.",
    "Systems don't scale.",
    "Tools are duct-taped together.",
    "The founder carries everything.",
  ],
  resolution: "Ironvael replaces temporary solutions with permanent structure.",
} as const;

export const forgeModel = {
  headline: "The Forge Model",
  blocks: [
    {
      title: "Foundation",
      inputs: "Entity structure, compliance, legal framework.",
      builds: "Registered entities, operating agreements, compliance infrastructure.",
      outcome: "A legal and structural base that supports scale.",
    },
    {
      title: "Systems",
      inputs: "Operations, SOPs, cadence, metrics.",
      builds: "Documented processes, meeting rhythms, performance dashboards.",
      outcome: "Predictable delivery and clear accountability.",
    },
    {
      title: "Infrastructure",
      inputs: "Tools, automation, dashboards, integrations.",
      builds: "Integrated tech stack, automated workflows, visibility layers.",
      outcome: "Operations that run without constant manual intervention.",
    },
    {
      title: "Growth Engines",
      inputs: "Marketing, web, acquisition systems.",
      builds: "Brand positioning, web presence, lead capture, conversion paths.",
      outcome: "Sustainable acquisition and predictable pipeline.",
    },
  ],
} as const;

export const capabilities = {
  headline: "Capabilities",
  intro: "Domains of the forge.",
  items: [
    {
      title: "Operations Consulting",
      description: "Process design, team structure, operational cadence.",
    },
    {
      title: "Business Infrastructure",
      description: "Tech stack, integrations, automation, dashboards.",
    },
    {
      title: "Compliance & Entity Structuring",
      description: "Entity formation, operating agreements, regulatory alignment.",
    },
    {
      title: "Web & Digital Systems",
      description: "Websites, landing pages, forms, CRM integration.",
    },
    {
      title: "Brand & Positioning",
      description: "Positioning strategy, messaging, visual identity.",
    },
    {
      title: "Founder Advisory",
      description: "Operating counsel for founders scaling into permanence.",
    },
  ],
} as const;

export const outcomes = {
  headline: "Outcomes",
  items: [
    "Founders reclaim 10–20 hours per week.",
    "Delivery becomes predictable.",
    "Margins increase through process clarity.",
    "Systems replace constant firefighting.",
  ],
} as const;

export const finalCta = {
  headline: "Build something that lasts.",
  primaryCta: "Request an Engagement",
  secondaryCta: "Email Ironvael",
} as const;

export const capabilitiesPage = {
  intro:
    "Structured like an industrial specification document. Each capability represents a domain of the forge.",
  sections: [
    {
      title: "Operations Consulting",
      covers: "Process design, team structure, operational cadence, meeting rhythms, and accountability models.",
      for: "Businesses where the founder is the bottleneck, or where delivery quality is inconsistent.",
      outcomes: ["Clear role definitions", "Documented SOPs", "Predictable delivery cycles"],
      examples: ["Operations audit", "Team structure design", "Cadence implementation"],
    },
    {
      title: "Business Infrastructure",
      covers: "Tech stack selection, integrations, automation, dashboards, and data visibility.",
      for: "Companies running on duct-taped tools with no single source of truth.",
      outcomes: ["Integrated toolchain", "Automated workflows", "Real-time visibility"],
      examples: ["CRM + operations stack", "Reporting dashboard build", "Workflow automation"],
    },
    {
      title: "Compliance & Entity Structuring",
      covers: "Entity formation, operating agreements, regulatory alignment, and compliance frameworks.",
      for: "Early-stage companies, funded startups, or businesses with unclear legal structure.",
      outcomes: ["Proper entity structure", "Compliant operations", "Clear ownership"],
      examples: ["LLC formation + operating agreement", "Compliance audit", "Entity restructuring"],
    },
    {
      title: "Web & Digital Systems",
      covers: "Websites, landing pages, forms, lead capture, and CRM integration.",
      for: "Businesses with no web presence, outdated sites, or broken lead flows.",
      outcomes: ["Professional web presence", "Lead capture that works", "CRM-ready infrastructure"],
      examples: ["Website build", "Landing page system", "Form and CRM integration"],
    },
    {
      title: "Brand & Positioning",
      covers: "Positioning strategy, messaging, visual identity, and market clarity.",
      for: "Companies with unclear value proposition or generic market presence.",
      outcomes: ["Clear positioning", "Consistent messaging", "Differentiated presence"],
      examples: ["Positioning workshop", "Brand refresh", "Messaging framework"],
    },
    {
      title: "Founder Advisory",
      covers: "Operating counsel for founders scaling into permanence.",
      for: "Founders who need a sparring partner on operations, structure, and scale.",
      outcomes: ["Strategic clarity", "Decision frameworks", "Operating discipline"],
      examples: ["Monthly retainer", "Strategy sessions", "Scale readiness review"],
    },
  ],
} as const;

export const engagementPage = {
  headline: "How We Work",
  intro: "Three engagement types. No visible pricing. Focus on outcomes.",
  types: [
    {
      title: "Audit",
      description: "Fixed-scope operational or infrastructure audit.",
      outcome: "A clear picture of what exists, what's missing, and what to build next.",
    },
    {
      title: "Build",
      description: "Custom engagement to design and implement systems.",
      outcome: "Working infrastructure delivered and documented.",
    },
    {
      title: "Operator",
      description: "Ongoing monthly partnership.",
      outcome: "Continuous improvement and operating support.",
    },
  ],
} as const;

export const aboutPage = {
  headline: "About Ironvael",
  ventureStudio:
    "Ironvael operates as a venture studio. We build and hold businesses that are designed to last.",
  operationsArm:
    "Ironvael Operations is the operating arm—the forge where we build systems, infrastructure, and foundations for our portfolio and for select clients.",
  philosophy:
    "Our philosophy is systems-first: durability over speed, permanence over shortcuts, structure over duct tape.",
  values: [
    { name: "Durability", description: "We build what lasts." },
    { name: "Clarity", description: "We eliminate ambiguity." },
    { name: "Ownership", description: "We take responsibility for outcomes." },
    { name: "Craft", description: "We do the work well." },
  ],
  founder: {
    name: "Founder",
    title: "Ironvael Operations",
    bio: "Operator and builder. Focused on durable business infrastructure and systems that scale.",
  },
} as const;

export type ContactRoute = "ops" | "web" | "compliance" | "partnerships";

export const contactPage = {
  hero: {
    headline: "Contact Ironvael",
    subtext: "Choose your path. We respond when there is alignment.",
    microtext: "Forged in Permanence. No temporary fixes.",
  },
  routing: {
    title: "Inquiry Type",
    cards: [
      {
        id: "ops" as const,
        title: "Operations & Infrastructure",
        desc: "Systems, process, tooling, and execution support.",
      },
      {
        id: "web" as const,
        title: "Web / Brand / Marketing",
        desc: "Web builds, positioning, SEO, and growth foundations.",
      },
      {
        id: "compliance" as const,
        title: "Entity Formation & Compliance",
        desc: "LLC setup, structure, readiness, and operational compliance.",
      },
      {
        id: "partnerships" as const,
        title: "Partnerships",
        desc: "Vendors, collaborators, and strategic alignment.",
      },
    ],
  },
  form: {
    labels: {
      name: "Name",
      email: "Email",
      company: "Company / Project",
      budgetRange: "Budget Range",
      timeline: "Timeline",
      details: {
        ops: "What is failing under scale?",
        web: "What outcome must this deliver?",
        compliance: "What are you trying to formalize or de-risk?",
      },
    },
    budgetOptions: [
      { value: "under-1k", label: "Under $1k" },
      { value: "1k-5k", label: "$1k–$5k" },
      { value: "5k-15k", label: "$5k–$15k" },
      { value: "15k-50k", label: "$15k–$50k" },
      { value: "50k-plus", label: "$50k+" },
    ],
    timelineOptions: [
      { value: "asap", label: "ASAP" },
      { value: "2-4-weeks", label: "2–4 weeks" },
      { value: "1-2-months", label: "1–2 months" },
      { value: "flexible", label: "Flexible" },
    ],
    submitLabel: "Submit Inquiry",
    framing: {
      ops: "Operations engagements focus on systems that last. Describe what is failing and what you need to stabilize.",
      web: "Web and marketing engagements require clarity on outcome. Describe the result that matters.",
      compliance: "Entity and compliance work demands precision. Describe what you need to formalize.",
    },
  },
  partnerships: {
    title: "Partnerships",
    text: "For aligned operators and serious proposals.",
    email: "hello@ironvael.com",
    note: "Include context + a concrete proposal.",
  },
  expectations: {
    headline: "What happens next",
    items: [
      "Reviewed directly.",
      "If aligned, we respond with next steps.",
      "If not aligned, we may not respond.",
    ],
  },
} as const;
