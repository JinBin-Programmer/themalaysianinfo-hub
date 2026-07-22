import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "The Malaysian Info";
  const icon = searchParams.get("icon") || "🇲🇾";
  const category = searchParams.get("category") || "Portal Maklumat Malaysia";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #7f1d1d 60%, #991b1b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: "48px 80px",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ fontSize: 80, marginBottom: 24, lineHeight: 1 }}>{icon}</div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: 800,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
              marginTop: 16,
              fontWeight: 500,
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "rgba(255,255,255,0.5)",
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              background: "rgba(255,255,255,0.2)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            🇲🇾
          </div>
          themalaysianinfo.online
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
