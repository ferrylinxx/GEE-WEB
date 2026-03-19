import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Política de Cookies - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Legal", title: "Política de Cookies", desc: "Informació sobre les galetes que utilitzem i com gestionar-les" },
  es: { section: "Legal", title: "Política de Cookies", desc: "Información sobre las cookies que utilizamos y cómo gestionarlas" },
  en: { section: "Legal", title: "Cookie Policy", desc: "Information about the cookies we use and how to manage them" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
