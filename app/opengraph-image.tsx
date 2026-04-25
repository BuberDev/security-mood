import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

async function getLogoData() {
  const logo = await readFile(join(process.cwd(), "public", "security_mood_logo.png"), "base64");
  return `data:image/png;base64,${logo}`;
}

export default async function OpenGraphImage() {
  const logo = await getLogoData();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #050505 0%, #111111 42%, #1b1408 72%, #090909 100%)",
          color: "#f8f3e7",
          padding: "56px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(216, 180, 96, 0.18), transparent 34%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.08), transparent 28%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src={logo}
            alt="Security Mood logo"
            width={96}
            height={96}
            style={{ borderRadius: "24px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 22,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#d8b560",
              }}
            >
              Security Mood
            </span>
            <span style={{ fontSize: 20, color: "rgba(248, 243, 231, 0.78)", marginTop: 6 }}>
              Home security, preparedness, and privacy gear
            </span>
          </div>
        </div>

        <div
          style={{
            maxWidth: 840,
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              border: "1px solid rgba(216, 181, 96, 0.35)",
              borderRadius: 999,
              padding: "10px 18px",
              color: "#d8b560",
              fontSize: 20,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            SEO-ready buying guides
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Find the right security product, then move to Amazon when you are ready.
          </div>

          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(248, 243, 231, 0.84)",
              maxWidth: 720,
            }}
          >
            Canonical product pages, strong internal linking, and structured content designed for Google, Pinterest,
            and AI discovery.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(248, 243, 231, 0.68)",
            fontSize: 18,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>securitymood.com</span>
          <span>llms.txt · sitemap.xml · robots.txt</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
