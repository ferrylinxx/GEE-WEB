import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Contacte - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Contacta'ns", title: "Contacte", desc: "Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona · +34 932 119 744" },
  es: { section: "Contáctanos", title: "Contacto", desc: "Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona · +34 932 119 744" },
  en: { section: "Get in touch", title: "Contact", desc: "Passatge de Forasté, 4, Bis, Local 7, 08022 Barcelona · +34 932 119 744" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
