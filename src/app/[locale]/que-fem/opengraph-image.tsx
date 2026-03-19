import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Què fem - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Serveis", title: "Què fem", desc: "Anàlisi estratègica, estudis d'impacte econòmic, avaluació urbanística, valoració d'intangibles i dictàmens pericials" },
  es: { section: "Servicios", title: "Qué hacemos", desc: "Análisis estratégico, estudios de impacto económico, evaluación urbanística, valoración de intangibles y dictámenes periciales" },
  en: { section: "Services", title: "What we do", desc: "Strategic analysis, economic impact studies, urban evaluation, intangible valuation and expert reports" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
