import { logoBase64 } from "./og-logo";

interface OGSubpageProps {
  section: string;
  title: string;
  desc: string;
}

export function OGSubpageLayout({ section, title, desc }: OGSubpageProps) {
  return (
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
      {/* Logo top-right */}
      <img
        src={logoBase64}
        width={120}
        height={52}
        style={{
          position: "absolute",
          top: 40,
          right: 60,
          objectFit: "contain",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
        <div style={{ width: "48px", height: "4px", background: "#c8a96e", borderRadius: "2px" }} />
        <span style={{ color: "#c8a96e", fontSize: "20px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase" }}>
          {section}
        </span>
      </div>
      <h1 style={{ color: "#ffffff", fontSize: "64px", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
        {title}
      </h1>
      <div style={{ marginTop: "24px", width: "80px", height: "4px", background: "linear-gradient(90deg, #c8a96e, #d4b87a)", borderRadius: "2px" }} />
      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "24px", marginTop: "32px", maxWidth: "700px", lineHeight: 1.5 }}>
        {desc}
      </p>
      <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px", marginTop: "auto" }}>
        geeconomics.com
      </p>
    </div>
  );
}
