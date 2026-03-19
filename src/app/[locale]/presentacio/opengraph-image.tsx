import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Presentació - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Presentació", title: "Des de 1989", desc: "Més de 30 anys d'experiència en consultoria econòmica a Barcelona" },
  es: { section: "Presentación", title: "Desde 1989", desc: "Más de 30 años de experiencia en consultoría económica en Barcelona" },
  en: { section: "About Us", title: "Since 1989", desc: "Over 30 years of experience in economic consulting in Barcelona" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
