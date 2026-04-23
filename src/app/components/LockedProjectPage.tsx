import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  CONTACT_EMAIL,
  LOCKED_PROJECT_NAV_ITEMS,
  MAILTO_HREF,
} from "../config/site";
import { useWindowWidth } from "../hooks/useWindowWidth";
import svgPaths from "../../imports/svg-wudsbhooqk";

interface LockedProjectPageProps {
  title: string;
  category: string;
  description: string;
}

export function LockedProjectPage({ title, category, description }: LockedProjectPageProps) {
  const navigate = useNavigate();
  const w = useWindowWidth();
  const isDesktop = w >= 1280;
  const isMobile = w < 768;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      {isDesktop && (
        <aside
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100vh",
            width: "160px",
            display: "flex",
            flexDirection: "column",
            zIndex: 100,
            backgroundColor: "#0015b7",
            borderRight: "1px solid #fefcfc",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{ borderBottom: "1px solid #fefcfc", flexShrink: 0, cursor: "pointer", background: "transparent", width: "100%" }}
          >
            <div style={{ padding: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "28px", color: "#fefcfc" }}>
                ← Back
              </p>
            </div>
          </button>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {LOCKED_PROJECT_NAV_ITEMS.map((item) => (
              <div key={item} style={{ width: "100%", borderBottom: "1px solid #fefcfc", borderTop: "1px solid #fefcfc", marginBottom: "-1px" }}>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#fefcfc" }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => (window.location.href = MAILTO_HREF)}
            style={{ borderTop: "1px solid #fefcfc", flexShrink: 0, width: "100%", background: "transparent", cursor: "pointer" }}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: "#fefcfc", whiteSpace: "nowrap" }}>
                Contact
              </p>
              <div style={{ overflow: "clip", position: "relative", flexShrink: 0, width: "20px", height: "20px" }}>
                <div style={{ position: "absolute", inset: "20.83%" }}>
                  <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                    <path d={svgPaths.p221d400} fill="#fefcfc" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </aside>
      )}

      {/* ── Mobile / Tablet Top Bar ── */}
      {!isDesktop && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "60px",
              zIndex: 200,
              backgroundColor: "#0015b7",
              borderBottom: "1px solid #fefcfc",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <button
              onClick={() => navigate("/")}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px 0" }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fefcfc" }}>
                ← Back
              </p>
            </button>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-end" }}
            >
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "18px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", opacity: mobileMenuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              style={{
                position: "fixed",
                top: "60px",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 199,
                backgroundColor: "#0015b7",
                display: "flex",
                flexDirection: "column",
                padding: "40px 32px",
              }}
            >
              <button
                onClick={() => { window.location.href = MAILTO_HREF; setMobileMenuOpen(false); }}
                style={{ background: "#fefcfc", border: "none", padding: "16px 32px", cursor: "pointer", marginTop: "auto" }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0015b7", textAlign: "center" }}>
                  Contact — {CONTACT_EMAIL}
                </p>
              </button>
            </div>
          )}
        </>
      )}

      {/* ── Main content ── */}
      <div
        style={{
          marginLeft: isDesktop ? "160px" : "0",
          paddingTop: isDesktop ? "0" : "60px",
          minHeight: "100vh",
          backgroundColor: "#f6f6f6",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Blue hero */}
        <div
          style={{
            backgroundColor: "#0015b7",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: isMobile ? "48px 20px" : "96px 60px",
          }}
        >
          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: isMobile ? "36px" : "80px",
                lineHeight: isMobile ? "44px" : "80px",
                color: "#fefcfc",
                wordBreak: "break-word",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: isMobile ? "14px" : "18px",
                lineHeight: "28px",
                color: "rgba(254,252,252,0.6)",
                marginTop: "12px",
              }}
            >
              [ {category} ]
            </p>
          </div>

          {/* Locked frame */}
          <div style={{ width: "100%", maxWidth: "760px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "-2px" }}>
              <div style={{ backgroundColor: "#fefcfc", width: "8px", height: "8px" }} />
              <div style={{ backgroundColor: "#fefcfc", width: "8px", height: "8px" }} />
            </div>

            <div
              style={{
                border: "1px solid #fefcfc",
                backgroundColor: "rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: isMobile ? "48px 24px" : "80px 40px",
                gap: "24px",
                minHeight: isMobile ? "280px" : "360px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 40 40" fill="none" width="40" height="40">
                  <rect x="8" y="18" width="24" height="18" rx="3" fill="#fefcfc" />
                  <path d="M13 18V14C13 10.134 16.134 7 20 7C23.866 7 27 10.134 27 14V18" stroke="#fefcfc" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <circle cx="20" cy="27" r="3" fill="#0015b7" />
                  <rect x="19" y="27" width="2" height="5" rx="1" fill="#0015b7" />
                </svg>
              </div>

              <div style={{ textAlign: "center", maxWidth: "440px" }}>
                <p style={{ fontFamily: "'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif", fontWeight: 700, fontSize: isMobile ? "20px" : "24px", lineHeight: "32px", color: "#fefcfc", marginBottom: "12px" }}>
                  Protected by NDA
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", lineHeight: "24px", color: "rgba(254,252,252,0.65)" }}>
                  {description}
                </p>
              </div>

              <a
                href="mailto:lnson1551@gmail.com"
                style={{
                  marginTop: "8px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: isMobile ? "10px 20px" : "12px 28px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isMobile ? "14px" : "16px", color: "#fefcfc", whiteSpace: "nowrap" }}>
                  Request access
                </p>
                <span style={{ color: "#fefcfc", fontSize: "18px" }}>→</span>
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-2px" }}>
              <div style={{ backgroundColor: "#fefcfc", width: "8px", height: "8px" }} />
              <div style={{ backgroundColor: "#fefcfc", width: "8px", height: "8px" }} />
            </div>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "rgba(254,252,252,0.45)", marginTop: "32px", textAlign: "center" }}>
            Available upon request — reach out to learn more about this project.
          </p>
        </div>
      </div>
    </>
  );
}
