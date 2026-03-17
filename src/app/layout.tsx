import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://geeconomics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabinet Estudis Econòmics | Consultoria Econòmica a Barcelona",
    template: "%s | Gabinet Estudis Econòmics",
  },
  description:
    "Gabinet Estudis Econòmics (GEE) - Des de 1989 desenvolupem treballs d'anàlisi estratègica, impacte econòmic, avaluació urbanística i dictàmens pericials a Barcelona.",
  keywords: [
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
  formatDetection: {
    email: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: siteUrl,
    siteName: "Gabinet Estudis Econòmics",
    title: "Gabinet Estudis Econòmics | Consultoria Econòmica a Barcelona",
    description:
      "Des de 1989 desenvolupem treballs d'anàlisi estratègica, impacte econòmic, avaluació urbanística i dictàmens pericials.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gabinet Estudis Econòmics - Consultoria econòmica a Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabinet Estudis Econòmics",
    description:
      "Consultoria econòmica a Barcelona des de 1989. Anàlisi estratègica, impacte econòmic i dictàmens pericials.",
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
    canonical: siteUrl,
    languages: {
      "ca": siteUrl,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    areaServed: {
      "@type": "Place",
      name: "Catalunya, Espanya",
    },
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.4133,
      longitude: 2.1278,
    },
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
              "Anàlisi estratègica de projectes amb rigor i independència per a la presa de decisions informada.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estudis d'Impacte Econòmic",
            description:
              "Estudi de l'impacte econòmic d'infraestructures i projectes sobre el territori i la població.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Avaluació Urbanística",
            description:
              "Avaluació socioeconòmica de temes urbanístics i desenvolupament urbà integral.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Valoració d'Intangibles",
            description:
              "Valoració d'actius intangibles, marques, patents i propietat intel·lectual.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dictàmens Pericials",
            description:
              "Elaboració de dictàmens pericials econòmics per a processos judicials.",
          },
        },
      ],
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inici",
        item: siteUrl,
      },
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
    <html lang="ca" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <link rel="alternate" hrefLang="ca" href={siteUrl} />
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
            __html: JSON.stringify(jsonLdLocalBusiness).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdBreadcrumb).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
