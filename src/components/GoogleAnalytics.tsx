"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-SKH25BEE1T";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Track page views on route change
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_ID, {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // Track scroll depth (25%, 50%, 75%, 100%)
  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const reached = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !reached.has(threshold)) {
          reached.add(threshold);
          window.gtag("event", "scroll_depth", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            value: threshold,
            page_path: pathname,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Track time on page (15s, 30s, 60s, 120s, 300s)
  useEffect(() => {
    const intervals = [15, 30, 60, 120, 300];
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (const seconds of intervals) {
      timers.push(
        setTimeout(() => {
          window.gtag("event", "time_on_page", {
            event_category: "engagement",
            event_label: `${seconds}s`,
            value: seconds,
            page_path: pathname,
          });
        }, seconds * 1000)
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  // Track outbound link clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href && href.startsWith("http") && !href.includes("geeconomics.com")) {
        window.gtag("event", "click", {
          event_category: "outbound",
          event_label: href,
          transport_type: "beacon",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Track CTA button clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest("a, button");
      if (!btn) return;

      const text = btn.textContent?.trim();
      const href = btn.getAttribute("href");

      // Track navigation to key pages
      if (href === "/contacte" || href === "/que-fem") {
        window.gtag("event", "cta_click", {
          event_category: "conversion",
          event_label: text,
          page_path: pathname,
          destination: href,
        });
      }

      // Track form submit button
      if (btn.getAttribute("type") === "submit") {
        window.gtag("event", "form_submit_attempt", {
          event_category: "conversion",
          event_label: text,
          page_path: pathname,
        });
      }

      // Track phone/email clicks
      if (href?.startsWith("tel:") || href?.startsWith("mailto:")) {
        window.gtag("event", "contact_click", {
          event_category: "conversion",
          event_label: href,
          page_path: pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  );
}
