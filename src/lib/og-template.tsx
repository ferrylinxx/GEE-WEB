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
        background: "transparent",
      }}
    >
      <img
        src={logoBase64}
        width={900}
        height={387}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
