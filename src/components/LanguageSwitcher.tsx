"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  ca: "CA",
  es: "ES",
  en: "EN",
};

interface LanguageSwitcherProps {
  textColor?: "light" | "dark";
}

export default function LanguageSwitcher({
  textColor = "dark",
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as "ca" | "es" | "en" });
  };

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => {
        const isActive = l === locale;
        return (
          <button
            key={l}
            onClick={() => handleChange(l)}
            className={`px-2.5 py-1 text-xs font-semibold tracking-wide rounded-md transition-all duration-200 ${
              isActive
                ? textColor === "light"
                  ? "bg-white/15 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/40"
                  : "bg-[var(--color-accent)]/10 text-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/30"
                : textColor === "light"
                  ? "text-white/50 hover:text-white hover:bg-white/10"
                  : "text-[var(--color-primary)]/50 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
            }`}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
}
