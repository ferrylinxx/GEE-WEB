import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
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

  return (
    <html lang="ca" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
