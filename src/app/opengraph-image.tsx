import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gabinet Estudis Econòmics - Consultoria econòmica a Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
        {/* Decorative line */}
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
          ESTUDIS ECONÒMICS
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
          Consultoria econòmica a Barcelona des de 1989
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
