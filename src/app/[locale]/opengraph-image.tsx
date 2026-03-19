import { ImageResponse } from "next/og";
import { logoBase64 } from "@/lib/og-logo";

export const runtime = "edge";
export const alt = "Gabinet Estudis Econòmics - Consultoria econòmica a Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { subtitle: string; tagline: string }> = {
  ca: {
    subtitle: "ESTUDIS ECONÒMICS",
    tagline: "Consultoria econòmica a Barcelona des de 1989",
  },
  es: {
    subtitle: "ESTUDIOS ECONÓMICOS",
    tagline: "Consultoría económica en Barcelona desde 1989",
  },
  en: {
    subtitle: "ECONOMIC STUDIES",
    tagline: "Economic consulting in Barcelona since 1989",
  },
};

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = texts[locale] || texts.ca;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1a3a5c 0%, #0f2a44 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo */}
        <img
          src={logoBase64}
          width={140}
          height={60}
          style={{ marginBottom: 32, objectFit: "contain" }}
        />
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#c8a96e",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "0.05em",
            marginBottom: 8,
          }}
        >
          GABINET
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#c8a96e",
            letterSpacing: "0.3em",
            marginBottom: 40,
          }}
        >
          {t.subtitle}
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#c8a96e",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {t.tagline}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          geeconomics.com
        </div>
      </div>
    ),
    { ...size }
  );
}
