import { ImageResponse } from "next/og";
import { OGSubpageLayout } from "@/lib/og-template";

export const runtime = "edge";
export const alt = "Gabinet Estudis Econòmics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(<OGSubpageLayout />, { ...size });
}
