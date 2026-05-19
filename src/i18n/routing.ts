import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ca", "es", "en"],
  defaultLocale: "ca",
  // Català sense prefix: geeconomics.com/ → català
  // Castellà: geeconomics.com/es/...
  // English: geeconomics.com/en/...
  localePrefix: "as-needed",
});
