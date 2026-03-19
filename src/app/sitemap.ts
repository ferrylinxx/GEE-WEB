import type { MetadataRoute } from "next";

const siteUrl = "https://geeconomics.com";
const defaultLocale = "ca";
const locales = ["ca", "es", "en"] as const;

// Se actualiza automáticamente con cada build/deploy
const buildDate = new Date();

type PageConfig = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  images?: string[];
};

const pages: PageConfig[] = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1.0,
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
    images: [`${siteUrl}/logo.png`],
  },
  {
    path: "/que-fem",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/qui-som",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/clients",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contacte",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/politica-privacitat",
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    path: "/politica-cookies",
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

function buildUrl(locale: string, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = buildUrl(locale, page.path);
    }
    languages["x-default"] = buildUrl(defaultLocale, page.path);

    for (const locale of locales) {
      entries.push({
        url: buildUrl(locale, page.path),
        lastModified: buildDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages },
        ...(page.images ? { images: page.images } : {}),
      });
    }
  }

  return entries;
}
