import { ImageResponse } from "next/og";
import wedding from "@/data/wedding";

export const alt = wedding.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// WhatsApp / social link preview, generated from the config.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#511E2C",
          color: "#E2BC72",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 10, color: "#F3DCCB" }}>SAVE THE DATE</div>
        <div style={{ fontSize: 68, fontStyle: "italic", marginTop: 16, textAlign: "center", padding: "0 40px" }}>
          {`${wedding.groom.name} & ${wedding.bride.name}`}
        </div>
        <div style={{ display: "flex", alignItems: "center", marginTop: 12 }}>
          <div style={{ width: 140, height: 2, background: "#C49A4A" }} />
          <div style={{ width: 12, height: 12, margin: "0 16px", background: "#C49A4A", transform: "rotate(45deg)" }} />
          <div style={{ width: 140, height: 2, background: "#C49A4A" }} />
        </div>
        <div style={{ fontSize: 40, marginTop: 24, color: "#F3DCCB" }}>
          {wedding.scratch.map((s) => s.value).join(" · ")}
        </div>
      </div>
    ),
    size
  );
}
