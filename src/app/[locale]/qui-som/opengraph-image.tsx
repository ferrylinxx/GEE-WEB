import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Qui som - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "L'equip", title: "Qui som", desc: "Economistes i arquitectes especialitzats en consultoria econòmica i territorial a Barcelona" },
  es: { section: "El equipo", title: "Quiénes somos", desc: "Economistas y arquitectos especializados en consultoría económica y territorial en Barcelona" },
  en: { section: "The Team", title: "Who we are", desc: "Economists and architects specialised in economic and territorial consulting in Barcelona" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
