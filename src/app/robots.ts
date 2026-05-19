import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/*?v=",
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: "https://geeconomics.com/sitemap.xml",
    host: "https://geeconomics.com",
  };
}
