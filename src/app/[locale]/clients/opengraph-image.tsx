import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Clients - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: { section: "Confiança", title: "Clients", desc: "Institucions públiques, ajuntaments, empreses privades i organismes que confien en la nostra experiència" },
  es: { section: "Confianza", title: "Clientes", desc: "Instituciones públicas, ayuntamientos, empresas privadas y organismos que confían en nuestra experiencia" },
  en: { section: "Trust", title: "Clients", desc: "Public institutions, councils, private companies and organisations that trust our experience" },
};

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;
  return new ImageResponse(<OGSubpageLayout {...t} />, { ...size });
}
