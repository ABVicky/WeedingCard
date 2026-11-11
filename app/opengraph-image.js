import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import wedding from "@/data/wedding";

export const alt = wedding.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// WhatsApp, iMessage, Facebook & Twitter luxury link preview card
export default function OpengraphImage() {
  const cwd = process.cwd();
  const cinzelData = fs.readFileSync(path.join(cwd, "public/fonts/Cinzel-SemiBold.ttf"));
  const playfairData = fs.readFileSync(path.join(cwd, "public/fonts/PlayfairDisplay-Italic.ttf"));
  const ganeshBase64 = fs.readFileSync(path.join(cwd, "public/images/ganesh_gold.png")).toString("base64");

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
          background: "radial-gradient(ellipse at 50% 48%, #561622 0%, #380C15 65%, #1C0409 100%)",
          color: "#E2BC72",
          position: "relative",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Outer decorative gold border */}
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 22,
            right: 22,
            bottom: 22,
            border: "2px solid rgba(226, 188, 114, 0.75)",
            borderRadius: 14,
            display: "flex",
          }}
        />

        {/* Inner delicate gold border */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            right: 30,
            bottom: 30,
            border: "1px solid rgba(226, 188, 114, 0.35)",
            borderRadius: 10,
            display: "flex",
          }}
        />

        {/* Corner 1: Top-Left */}
        <div style={{ position: "absolute", top: 38, left: 38, display: "flex" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M0 0 L28 0 M0 0 L0 28 M8 8 L22 8 M8 8 L8 22" stroke="#E2BC72" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="#E2BC72" />
          </svg>
        </div>

        {/* Corner 2: Top-Right */}
        <div style={{ position: "absolute", top: 38, right: 38, display: "flex", transform: "scaleX(-1)" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M0 0 L28 0 M0 0 L0 28 M8 8 L22 8 M8 8 L8 22" stroke="#E2BC72" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="#E2BC72" />
          </svg>
        </div>

        {/* Corner 3: Bottom-Left */}
        <div style={{ position: "absolute", bottom: 38, left: 38, display: "flex", transform: "scaleY(-1)" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M0 0 L28 0 M0 0 L0 28 M8 8 L22 8 M8 8 L8 22" stroke="#E2BC72" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="#E2BC72" />
          </svg>
        </div>

        {/* Corner 4: Bottom-Right */}
        <div style={{ position: "absolute", bottom: 38, right: 38, display: "flex", transform: "scale(-1, -1)" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M0 0 L28 0 M0 0 L0 28 M8 8 L22 8 M8 8 L8 22" stroke="#E2BC72" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="2.5" fill="#E2BC72" />
          </svg>
        </div>

        {/* Top Header: Ganesha & Invocation */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            src={`data:image/png;base64,${ganeshBase64}`}
            alt="Shri Ganesh"
            width="64"
            height="64"
            style={{ objectFit: "contain", marginBottom: 6 }}
          />
          <div
            style={{
              fontFamily: "Cinzel",
              fontSize: 16,
              letterSpacing: 5,
              color: "#E2BC72",
              fontWeight: 600,
            }}
          >
            ॥ SHREE GANESHAYA NAMAH ॥
          </div>
          <div
            style={{
              fontFamily: "Cinzel",
              fontSize: 13,
              letterSpacing: 6,
              color: "#F0D7C2",
              marginTop: 10,
              textTransform: "uppercase",
              opacity: 0.9,
            }}
          >
            Save The Date For The Wedding Of
          </div>
        </div>

        {/* Centerpiece: Couple Names */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: 74,
            fontStyle: "italic",
            color: "#FFF1D6",
            marginTop: 4,
            marginBottom: 2,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "0 2px 24px rgba(226, 188, 114, 0.45)",
          }}
        >
          <span>Aashutosh</span>
          <span style={{ fontSize: 44, color: "#E2BC72", margin: "0 18px", fontStyle: "normal" }}>&amp;</span>
          <span>Atisha</span>
        </div>

        {/* Filigree Divider */}
        <div style={{ display: "flex", alignItems: "center", marginTop: 4, marginBottom: 14 }}>
          <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, transparent, #E2BC72)" }} />
          <div
            style={{
              width: 9,
              height: 9,
              margin: "0 14px",
              background: "#E2BC72",
              transform: "rotate(45deg)",
              boxShadow: "0 0 8px rgba(226, 188, 114, 0.7)",
            }}
          />
          <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, #E2BC72, transparent)" }} />
        </div>

        {/* Family Greeting */}
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: 17,
            fontStyle: "italic",
            color: "#F3E5D4",
            marginBottom: 16,
            opacity: 0.95,
          }}
        >
          The Jaiswal &amp; Tibrewal Families Cordially Invite You
        </div>

        {/* Ceremonies & Dates Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 22px",
              background: "rgba(226, 188, 114, 0.12)",
              border: "1px solid rgba(226, 188, 114, 0.45)",
              borderRadius: 30,
              fontFamily: "Cinzel",
              fontSize: 13,
              letterSpacing: 2,
              color: "#F6E6D3",
            }}
          >
            <span style={{ marginRight: 8 }}>🪘</span>
            <span>TILAK &amp; SANGEET · 1ST DEC 2026</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "7px 22px",
              background: "rgba(226, 188, 114, 0.2)",
              border: "1px solid rgba(226, 188, 114, 0.6)",
              borderRadius: 30,
              fontFamily: "Cinzel",
              fontSize: 13,
              letterSpacing: 2,
              color: "#FFF2DB",
            }}
          >
            <span style={{ marginRight: 8 }}>🪷</span>
            <span>WEDDING CEREMONY · 4TH DEC 2026</span>
          </div>
        </div>

        {/* Watermark Signature */}
        <div
          style={{
            position: "absolute",
            bottom: 34,
            fontFamily: "Cinzel",
            fontSize: 11,
            letterSpacing: 4,
            color: "rgba(226, 188, 114, 0.6)",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Designed by ABVicky · A Sacred Union
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cinzel",
          data: cinzelData,
          style: "normal",
          weight: 600,
        },
        {
          name: "Playfair Display",
          data: playfairData,
          style: "italic",
          weight: 600,
        },
      ],
    }
  );
}
