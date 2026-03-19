import { logoBase64 } from "./og-logo";

export function OGSubpageLayout() {
  return (
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
  );
}
