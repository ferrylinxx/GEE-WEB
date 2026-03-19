import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Política de Privadesa - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Legal", title: "Política de Privadesa", desc: "Informació sobre el tractament de dades personals i els vostres drets" },
  es: { section: "Legal", title: "Política de Privacidad", desc: "Información sobre el tratamiento de datos personales y sus derechos" },
  en: { section: "Legal", title: "Privacy Policy", desc: "Information about personal data processing and your rights" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
