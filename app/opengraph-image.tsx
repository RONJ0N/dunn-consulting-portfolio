import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — AI Websites & Automation for Local Businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(160deg, #0a0e14 45%, #0d1b22 75%, #0e2230 100%)",
          color: "#eef2f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#34d399",
              color: "#0a0e14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>{SITE.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            Stop losing customers you&apos;ve already earned.
          </div>
          <div style={{ fontSize: 30, color: "#93a1b4", maxWidth: 900 }}>
            AI websites, chatbots, and 24/7 voice receptionists for local businesses.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
