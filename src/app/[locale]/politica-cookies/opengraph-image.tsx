import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Política de Cookies - Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const texts: Record<string, { section: string; title: string; desc: string }> = {
  ca: {
    section: "Legal",
    title: "Política de Cookies",
    desc: "Informació sobre les galetes que utilitzem i com gestionar-les",
  },
  es: {
    section: "Legal",
    title: "Política de Cookies",
    desc: "Información sobre las cookies que utilizamos y cómo gestionarlas",
  },
  en: {
    section: "Legal",
    title: "Cookie Policy",
    desc: "Information about the cookies we use and how to manage them",
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
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #1a3a5c 0%, #0f2a44 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ width: "48px", height: "4px", background: "#c8a96e", borderRadius: "2px" }} />
          <span style={{ color: "#c8a96e", fontSize: "20px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase" }}>
            {t.section}
          </span>
        </div>
        <h1 style={{ color: "#ffffff", fontSize: "56px", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
          {t.title}
        </h1>
        <div style={{ marginTop: "24px", width: "80px", height: "4px", background: "linear-gradient(90deg, #c8a96e, #d4b87a)", borderRadius: "2px" }} />
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "24px", marginTop: "32px", maxWidth: "700px", lineHeight: 1.5 }}>
          {t.desc}
        </p>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px", marginTop: "auto" }}>
          geeconomics.com
        </p>
      </div>
    ),
    { ...size }
  );
}
