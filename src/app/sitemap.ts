import type { MetadataRoute } from "next";

const siteUrl = "https://geeconomics.com";
const defaultLocale = "ca";
const locales = ["ca", "es", "en"] as const;

type PageConfig = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
  lastModified: string;
  images?: string[];
};

const pages: PageConfig[] = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1.0,
    lastModified: "2026-03-18",
    images: [
      `${siteUrl}/images/image1.png`,
      `${siteUrl}/images/banner2-lleida.jpeg`,
      `${siteUrl}/images/banner3-eolics.jpeg`,
    ],
  },
  {
    path: "/presentacio",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-03-18",
    images: [`${siteUrl}/logo.png`],
  },
  {
    path: "/que-fem",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: "2026-03-18",
  },
  {
    path: "/qui-som",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-03-18",
  },
  {
    path: "/clients",
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: "2026-03-18",
  },
  {
    path: "/contacte",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: "2026-03-18",
  },
  {
    path: "/politica-privacitat",
    changeFrequency: "yearly",
    priority: 0.2,
    lastModified: "2026-03-01",
  },
  {
    path: "/politica-cookies",
    changeFrequency: "yearly",
    priority: 0.2,
    lastModified: "2026-03-01",
  },
];

function buildUrl(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    // Build hreflang alternates for all locales
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = buildUrl(locale, page.path);
    }
    languages["x-default"] = buildUrl(defaultLocale, page.path);

    // One entry per locale, each with full alternates
    for (const locale of locales) {
      entries.push({
        url: buildUrl(locale, page.path),
        lastModified: new Date(page.lastModified),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
        ...(page.images ? { images: page.images } : {}),
      });
    }
  }

  return entries;
}
