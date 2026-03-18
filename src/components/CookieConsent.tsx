"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

/**
 * GDPR Cookie Consent Banner — Google Consent Mode v2 compliant
 *
 * Flow:
 * 1. On page load, GoogleAnalytics sets consent defaults to 'denied' for all storage
 * 2. GA loads but does NOT set cookies (cookieless pings only)
 * 3. This banner appears after 1.5s if no prior consent
 * 4. User accepts → gtag('consent', 'update', { analytics_storage: 'granted' })
 *    - GA starts setting cookies and collecting full data
 * 5. User rejects → consent stays 'denied', GA continues cookieless pings only
 * 6. Choice is persisted in localStorage for future visits
 *
 * This complies with:
 * - RGPD / GDPR (EU 2016/679)
 * - LSSI-CE (Spain, Ley 34/2002)
 * - Google EU User Consent Policy
 * - Google Consent Mode v2 (required from March 2024)
 */

function updateGoogleConsent(granted: boolean) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: granted ? "granted" : "denied",
    });

    // Fire a custom event so GA knows consent was updated
    window.gtag("event", "consent_update", {
      event_category: "consent",
      event_label: granted ? "accepted" : "rejected",
    });
  }
}

export default function CookieConsent() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gee-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
    // If already consented, the GoogleAnalytics inline script already restored it
  }, []);

  const handleAccept = () => {
    updateGoogleConsent(true);
    closeBar("accepted");
  };

  const handleReject = () => {
    updateGoogleConsent(false);
    closeBar("rejected");
  };

  const closeBar = (value: string) => {
    setClosing(true);
    localStorage.setItem("gee-cookie-consent", value);
    localStorage.setItem("gee-cookie-consent-date", new Date().toISOString());
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("title")}
      aria-describedby="cookie-consent-description"
      className={`fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        closing
          ? "opacity-0 translate-y-full"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Shadow overlay */}
      <div className="absolute inset-0 -top-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 pb-5">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 border border-[var(--color-primary)]/5 overflow-hidden">
          {/* Top accent line */}
          <div className="h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

          <div className="p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              {/* Shield icon */}
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--color-primary)] mb-1.5">
                  {t("title")}
                </h3>
                <p id="cookie-consent-description" className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  {t("description")}{" "}
                  <Link
                    href="/politica-cookies"
                    className="text-[var(--color-accent)] font-medium hover:underline"
                  >
                    {t("learnMore")}
                  </Link>
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2.5 shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-medium text-[var(--color-text-muted)] border border-[var(--color-primary)]/10 rounded-xl hover:bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/20 transition-all duration-200"
                >
                  {t("reject")}
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary-light)] transition-all duration-200 shadow-sm"
                >
                  {t("accept")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
