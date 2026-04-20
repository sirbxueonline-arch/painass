import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Bakı Ağrı Klinikası";
  const subtitle = searchParams.get("subtitle") ?? "Ağrısız həyat üçün ixtisaslaşmış həkim köməyi";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "#faf9f7",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Teal sidebar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "8px",
            height: "100%",
            background: "#0b6b7a",
          }}
        />

        {/* Top teal bar */}
        <div
          style={{
            background: "#0b6b7a",
            padding: "48px 72px 48px 80px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "rgba(255,255,255,0.2)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none">
              <rect x="8.5" y="2" width="3" height="16" rx="1.5" fill="white" />
              <rect x="2" y="8.5" width="16" height="3" rx="1.5" fill="white" />
            </svg>
          </div>
          <div style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
            Bakı Ağrı Klinikası
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 80px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#1a1816",
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#6b6460",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            padding: "24px 80px",
            borderTop: "1px solid #e8e4de",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#8a8178", fontSize: "18px" }}>pain.az</span>
          <span style={{ color: "#0b6b7a", fontSize: "16px", fontWeight: "600" }}>
            +994 55 460 71 70
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
