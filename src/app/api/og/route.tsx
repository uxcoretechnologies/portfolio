import { ImageResponse } from "next/og";
import { site } from "@/lib/data/site";

export const runtime = "edge";

// Single dynamic Open Graph / Twitter card image, reused across every page
// via `?title=`/`&eyebrow=` query params (see src/lib/seo.ts) instead of a
// static asset per page — every route gets a real, on-brand 1200x630 card
// with its own title, not a generic shared image.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? site.tagline).slice(0, 120);
  const eyebrow = searchParams.get("eyebrow")?.slice(0, 40);

  const fontSize = title.length > 60 ? 54 : title.length > 36 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#142a4b",
          backgroundImage: "linear-gradient(135deg, #142a4b 0%, #0c2778 55%, #1c3766 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Soft ambient glow blobs, no blur (unsupported in the image renderer) — just low-opacity color washes for depth */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            backgroundColor: "rgba(16, 77, 252, 0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            backgroundColor: "rgba(95, 43, 201, 0.3)",
            display: "flex",
          }}
        />

        {/* Header: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 12,
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#8bacff",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            U
          </div>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 700, color: "#ffffff", letterSpacing: -0.5 }}>
            {site.shortName}
            <span style={{ color: "#8bacff", marginLeft: 8, fontWeight: 500 }}>Technologies</span>
          </div>
        </div>

        {/* Body: eyebrow + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          {eyebrow && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                padding: "8px 20px",
                borderRadius: 999,
                backgroundColor: "rgba(139, 172, 255, 0.16)",
                color: "#b9c4de",
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </div>
          )}
          <div
            style={{
              display: "flex",
              fontSize,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#8b9ac2",
          }}
        >
          <div style={{ display: "flex" }}>{site.tagline}</div>
          <div style={{ display: "flex" }}>uxcoretechnologies.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
