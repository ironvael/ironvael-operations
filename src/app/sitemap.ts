import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/capabilities`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/engagement`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
