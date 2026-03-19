import { ImageResponse } from "next/og";
import { logoBase64 } from "@/lib/og-logo";

export const runtime = "edge";
export const alt = "Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ffffff",
        }}
      >
        <img
          src={logoBase64}
          width={500}
          height={215}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
