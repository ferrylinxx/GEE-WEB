import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "../globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReset from "@/components/ScrollReset";
import CookieConsent from "@/components/CookieConsent";

import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://geeconomics.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("homeTitle"),
      template: `%s | Gabinet Estudis Econòmics`,
    },
    description: t("homeDescription"),
    keywords:
      locale === "es"
        ? [
            "consultoría económica",
            "estudios económicos",
            "análisis estratégico",
            "impacto económico",
            "evaluación urbanística",
            "dictámenes periciales",
            "Barcelona",
            "Cataluña",
            "GEE",
            "Gabinete Estudios Económicos",
          ]
        : locale === "en"
          ? [
              "economic consulting",
              "economic studies",
              "strategic analysis",
              "economic impact",
              "urban evaluation",
              "expert reports",
              "Barcelona",
              "Catalonia",
              "Spain",
              "GEE",
            ]
          : [
              "consultoria econòmica",
              "estudis econòmics",
              "anàlisi estratègica",
              "impacte econòmic",
              "avaluació urbanística",
              "dictàmens pericials",
              "Barcelona",
              "Catalunya",
              "GEE",
              "Gabinet Estudis Econòmics",
            ],
    authors: [{ name: "Gabinet Estudis Econòmics" }],
    creator: "Gabinet Estudis Econòmics",
    publisher: "Gabinet Estudis Econòmics",
    formatDetection: { email: false, telephone: false },
    manifest: "/manifest.json",
    openGraph: {
      type: "website",
      locale: locale === "ca" ? "ca_ES" : locale === "es" ? "es_ES" : "en_US",
      alternateLocale:
        locale === "ca"
          ? ["es_ES", "en_US"]
          : locale === "es"
            ? ["ca_ES", "en_US"]
            : ["ca_ES", "es_ES"],
      url: siteUrl,
      siteName: "Gabinet Estudis Econòmics",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Gabinet Estudis Econòmics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gabinet Estudis Econòmics",
      description: t("homeDescription"),
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: locale === "ca" ? siteUrl : `${siteUrl}/${locale}`,
      languages: {
        ca: siteUrl,
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
        "x-default": siteUrl,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/favicon.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [
        { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
      ],
      shortcut: ["/favicon.ico"],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ca" | "es" | "en")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gabinet Estudis Econòmics",
    alternateName: "GEE",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    foundingDate: "1989",
    description:
      "Consultoria econòmica especialitzada en anàlisi estratègica, impacte econòmic, avaluació urbanística i dictàmens pericials.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Passatge de Forasté, 4, Bis, Local 7",
      addressLocality: "Barcelona",
      postalCode: "08022",
      addressCountry: "ES",
      addressRegion: "Catalunya",
    },
    areaServed: { "@type": "Place", name: "Catalunya, Espanya" },
    knowsAbout: [
      "Anàlisi estratègica",
      "Impacte econòmic",
      "Avaluació urbanística",
      "Dictàmens pericials",
      "Valoració d'intangibles",
    ],
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#localbusiness`,
    name: "Gabinet Estudis Econòmics",
    alternateName: "GEE",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Consultoria econòmica especialitzada en anàlisi estratègica, impacte econòmic, avaluació urbanística i dictàmens pericials a Barcelona des de 1989.",
    telephone: "+34932119744",
    email: "gllg@geeconomics.com",
    foundingDate: "1989",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Passatge de Forasté, 4, Bis, Local 7",
      addressLocality: "Barcelona",
      postalCode: "08022",
      addressRegion: "Catalunya",
      addressCountry: "ES",
    },
    geo: { "@type": "GeoCoordinates", latitude: 41.4133, longitude: 2.1278 },
    areaServed: [
      { "@type": "City", name: "Barcelona" },
      { "@type": "AdministrativeArea", name: "Catalunya" },
      { "@type": "Country", name: "Espanya" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serveis de consultoria econòmica",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anàlisi Estratègica",
            description:
              "Anàlisi estratègica de projectes amb rigor i independència.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estudis d'Impacte Econòmic",
            description:
              "Estudi de l'impacte econòmic d'infraestructures i projectes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Avaluació Urbanística",
            description:
              "Avaluació socioeconòmica de temes urbanístics.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valoració d'Intangibles",
            description:
              "Valoració d'actius intangibles, marques, patents.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dictàmens Pericials",
            description:
              "Elaboració de dictàmens pericials econòmics.",
          },
        },
      ],
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inici", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Presentació",
        item: `${siteUrl}/presentacio`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Què fem",
        item: `${siteUrl}/que-fem`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Qui som",
        item: `${siteUrl}/qui-som`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Clients",
        item: `${siteUrl}/clients`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contacte",
        item: `${siteUrl}/contacte`,
      },
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {routing.locales.map((l) => (
          <link
            key={l}
            rel="alternate"
            hrefLang={l}
            href={l === "ca" ? siteUrl : `${siteUrl}/${l}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, "\\u003c"),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <ScrollReset />
          {children}
          <ScrollToTop />
          <CookieConsent />
        </NextIntlClientProvider>
        <GoogleAnalytics />
        <Analytics />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269718356198501"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
