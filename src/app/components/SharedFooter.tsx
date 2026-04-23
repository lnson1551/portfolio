import svgPaths from "../../imports/svg-wudsbhooqk";
import {
  LINKEDIN_URL,
  SITE_NAME,
} from "../config/site";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function SharedFooter() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;

  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";

  return (
    <footer style={{ backgroundColor: "#1e1c1c", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          padding: `40px ${hPad}`,
        }}
      >
        {/* Social row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: isMobile ? "12px" : "22px", alignItems: "center", flexShrink: 0 }}>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: isMobile ? "48px" : "60px",
                height: isMobile ? "48px" : "60px",
                backgroundColor: "rgba(255,255,255,0.1)",
                textDecoration: "none",
              }}
            >
              <svg fill="none" viewBox="0 0 30 30" width={isMobile ? "24" : "30"} height={isMobile ? "24" : "30"}>
                <path d={svgPaths.p27a4ec00} fill="#FEFCFC" />
                <path d={svgPaths.p30a3c2f0} fill="#FEFCFC" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ width: "100%" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#d6d6d6",
            }}
          >
            © 2026 All Rights Reserved - {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
