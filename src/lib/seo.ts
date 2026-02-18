/**
 * Centralized SEO configuration
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ironvael.com";

export const seo = {
  siteName: "Ironvael Operations",
  defaultTitle: "Ironvael Operations — Forged in Permanence",
  defaultDescription:
    "Ironvael Operations builds the systems, infrastructure, and operating foundations that businesses rely on for the long term.",
  locale: "en_US",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE as string | undefined, // e.g. "@ironvael"
  keywords: [
    "operations consulting",
    "business infrastructure",
    "entity formation",
    "compliance",
    "founder advisory",
    "operating firm",
    "durable systems",
    "business operations",
  ],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seo.siteName,
    url: siteUrl,
    description: seo.defaultDescription,
    slogan: "Forged in Permanence",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@ironvael.com",
      contactType: "general",
      url: absoluteUrl("/contact"),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    url: siteUrl,
    description: seo.defaultDescription,
    publisher: {
      "@type": "Organization",
      name: seo.siteName,
    },
  };
}
