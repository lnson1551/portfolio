import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-wudsbhooqk";
import imgCat from "../../assets/4b761285ad3cf2f424b3a04b5cf43a69973554fa.png";
import imgHeroMap from "../../assets/figma-home/hero-map.png";
import imgCardFishmap from "../../assets/figma-home/card-fishmap.png";
import imgCardSupership from "../../assets/figma-home/card-supership.png";
import imgCardAcciona from "../../assets/figma-home/card-acciona.png";
import imgCardWinx from "../../assets/figma-home/card-winx.png";
import imgCardUnivini from "../../assets/figma-home/card-univini.png";
import imgCardSignify from "../../assets/figma-home/card-signify.png";
import imgShowcaseBig from "../../assets/figma-home/showcase-big.png";
import imgLogoAcciona from "../../assets/figma-home/logo-supership.png";
import imgLogoSupership from "../../assets/figma-home/logo-winx.png";
import imgLogoWinx from "../../assets/figma-home/logo-univini.png";
import imgLogoUnivini from "../../assets/figma-home/logo-fishmap.png";
import {
  CONTACT_EMAIL,
  HOME_NAV_ITEMS,
  LINKEDIN_LABEL,
  LINKEDIN_URL,
  MAILTO_HREF,
  SITE_NAME,
} from "../config/site";
import { useWindowWidth } from "../hooks/useWindowWidth";

const HOME_DARK = "#0015b7";
const HOME_ACCENT = "#0015b7";
const DISPLAY_FONT = "'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif";

// ─── Work Data ───────────────────────────────────────────────────────────────
const works = [
  {
    id: "fishmap",
    category: "Social app",
    title: "Fishmap",
    subtitle: "[Social app for anglers]",
    description:
      "Fishmap is a social mobile app for people who enjoy fishing. Users can share catches, explore fishing spots, and view community data.",
    image: imgCardFishmap,
    route: "/work/fishmap",
  },
  {
    id: "supership",
    category: "Logistics platform",
    title: "Supership",
    subtitle: "[Logistics platform]",
    description:
      "SuperShip is a delivery service built for e-commerce sellers. It focuses on fast delivery, reliable cash-on-delivery (COD), and strong customer support.",
    image: imgCardSupership,
    route: "/work/supership",
  },
  {
    id: "acciona",
    category: "Design system",
    title: "Acciona",
    subtitle: "[Internal Design system]",
    description: "Design system built for internal teams at Acciona to keep products consistent, scalable, and accessible across all digital touchpoints.",
    image: imgCardAcciona,
    route: "/work/acciona",
  },
  {
    id: "winx",
    category: "Loyalty app",
    title: "WinX Membership 🔒",
    subtitle: "[Loyalty mobile app]",
    description:
      "WinX is a loyalty retail application designed for customers of WinMart, WinMart+, WiN, and partner brands.",
    image: imgCardWinx,
    route: "/work/winx",
  },
  {
    id: "univini",
    category: "Social platform",
    title: "UniVini",
    subtitle: "[Social application for expats & locals]",
    description:
      "UniVini is a social platform that connects expats and locals through real-time conversation and shared experiences.",
    image: imgCardUnivini,
    route: "/work/univini",
  },
  {
    id: "signify",
    category: "AI app",
    title: "Signify",
    subtitle: "[Sign languages AI real-time interpret for Deaf-Mute community]",
    description:
      "An app offers an AI-powered, seamless sign language learning and translation experience, making communication in sign language intuitive and efficient.",
    image: imgCardSignify,
    route: "/work/signify",
  },
];

// ─── Global CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @keyframes blink {
    50% { opacity: 0; }
  }
  @keyframes catJump {
    0%   { transform: translateY(0); }
    30%  { transform: translateY(-28px); }
    60%  { transform: translateY(-12px); }
    100% { transform: translateY(0); }
  }
  @keyframes catRunBounce {
    0%, 100% { transform: translateY(0) scaleY(1) scaleX(1); }
    25%       { transform: translateY(-6px) scaleY(0.88) scaleX(1.1); }
    75%       { transform: translateY(-3px) scaleY(0.94) scaleX(1.05); }
  }
  @keyframes catIdleBounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-3px); }
  }
  @keyframes fadeSlideIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes menuSlideDown {
    from { opacity: 0; transform: translateY(-12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-interactive-surface {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-interactive-grid {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }
  .hero-interactive-grid canvas {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
  .hero-interactive-surface > *:not(.hero-interactive-grid) {
    position: relative;
    z-index: 1;
  }
  .soft-section-ready {
    opacity: 0;
    transform: translateY(24px);
    filter: saturate(0.94);
    transition:
      opacity 620ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
      filter 620ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform, filter;
  }
  .soft-section-ready.is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: saturate(1);
  }
  @media (prefers-reduced-motion: reduce) {
    .soft-section-ready {
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
      transition: none !important;
    }
  }
  .cat-idle    { animation: catIdleBounce 0.7s ease-in-out infinite; }
  .cat-running { animation: catRunBounce 0.35s ease-in-out infinite; }
  .cat-jumping { animation: catJump 0.5s cubic-bezier(0.33, 1, 0.68, 1) forwards !important; }
  .mobile-menu-open { animation: menuSlideDown 0.25s ease forwards; }
`;

// ─── Desktop Sidebar ──────────────────────────────────────────────────────────
interface SidebarProps {
  isLightSection: boolean;
  name: string;
  onNavClick: (section: string) => void;
}

function Sidebar({ isLightSection, name, onNavClick }: SidebarProps) {
  const [catX, setCatX] = useState(10);
  const [catDir, setCatDir] = useState(1);
  const [catJumping, setCatJumping] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const catXRef = useRef(10);
  const runTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const MAX_X = 160 - 82;
    const walk = () => {
      const newX = Math.floor(Math.random() * MAX_X);
      setCatDir(newX >= catXRef.current ? 1 : -1);
      catXRef.current = newX;
      setCatX(newX);
      setIsRunning(true);
      clearTimeout(runTimerRef.current);
      runTimerRef.current = setTimeout(() => setIsRunning(false), 850);
    };
    walk();
    const id = setInterval(walk, 2000);
    return () => {
      clearInterval(id);
      clearTimeout(runTimerRef.current);
    };
  }, []);

  const handleCatMouseEnter = useCallback(() => {
    if (catJumping) return;
    setCatJumping(true);
    setTimeout(() => setCatJumping(false), 550);
  }, [catJumping]);

  const sidebarBg = isLightSection ? "#f6f6f6" : HOME_DARK;
  const textColor = isLightSection ? "#1e1c1c" : "#fefcfc";
  const sideBorder = isLightSection ? "#1e1c1c" : "#fefcfc";

  return (
    <aside
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "160px",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
        backgroundColor: sidebarBg,
        borderRight: `1px solid ${sideBorder}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
        overflow: "visible",
      }}
    >
      <div
        style={{
          borderBottom: `1px solid ${sideBorder}`,
          transition: "border-color 0.4s ease",
          flexShrink: 0,
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "12px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "28px",
              color: textColor,
              transition: "color 0.4s ease",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            {SITE_NAME}
          </p>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {HOME_NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => onNavClick(item)}
            style={{
              width: "100%",
              textAlign: "left",
              borderBottom: `1px solid ${sideBorder}`,
              borderTop: `1px solid ${sideBorder}`,
              marginBottom: "-1px",
              background: "transparent",
              cursor: "pointer",
              transition: "border-color 0.4s ease",
            }}
          >
            <div style={{ padding: "16px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: textColor,
                  transition: "color 0.4s ease",
                }}
              >
                {item}
              </p>
            </div>
          </button>
        ))}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `${catX}px`,
            transition: "left 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            cursor: "pointer",
            zIndex: 5,
          }}
          onMouseEnter={handleCatMouseEnter}
        >
          {name && (
            <div
              style={{
                position: "absolute",
                bottom: "68px",
                left: catX > 30 ? "-28px" : "4px",
                zIndex: 10,
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              <div
                style={{
                  background: "white",
                  border: "1px solid #0015b7",
                  boxShadow: "-3px 5px 0px 0px #1e1c1c",
                  padding: "5px 10px",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    lineHeight: "1.4",
                    color: "#1e1c1c",
                    maxWidth: "110px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {name}!
                </p>
                <div style={{ position: "absolute", bottom: "-9px", left: "10px" }}>
                  <svg viewBox="0 0 8 10" fill="none" width="8" height="10">
                    <path d="M0 0H8L0 10V0Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          <div style={{ transform: `scaleX(${catDir})` }}>
            <img
              src={imgCat}
              alt="cat"
              className={catJumping ? "cat-jumping" : isRunning ? "cat-running" : "cat-idle"}
              style={{
                width: "78px",
                height: "auto",
                display: "block",
                imageRendering: "pixelated",
              }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => (window.location.href = MAILTO_HREF)}
        style={{
          borderTop: `1px solid ${sideBorder}`,
          transition: "border-color 0.4s ease",
          flexShrink: 0,
          width: "100%",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "16px" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              color: textColor,
              transition: "color 0.4s ease",
              whiteSpace: "nowrap",
            }}
          >
            Contact
          </p>
          <div style={{ overflow: "clip", position: "relative", flexShrink: 0, width: "20px", height: "20px" }}>
            <div style={{ position: "absolute", inset: "20.83%" }}>
              <svg
                style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }}
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 11.6667 11.6667"
              >
                <path d={svgPaths.p221d400} fill={textColor} />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </aside>
  );
}

// ─── Mobile Top Bar ───────────────────────────────────────────────────────────
interface MobileTopBarProps {
  isLightSection: boolean;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

function MobileTopBar({ isLightSection, onMenuToggle, isMenuOpen }: MobileTopBarProps) {
  const bg = isLightSection ? "#f6f6f6" : HOME_DARK;
  const textColor = isLightSection ? "#1e1c1c" : "#fefcfc";
  const borderColor = isLightSection ? "#1e1c1c" : "#fefcfc";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "60px",
        zIndex: 100,
        backgroundColor: bg,
        borderBottom: `1px solid ${borderColor}`,
        transition: "background-color 0.4s ease, border-color 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: textColor,
          transition: "color 0.4s ease",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {SITE_NAME}
      </p>

      <button
        onClick={onMenuToggle}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          alignItems: "flex-end",
        }}
        aria-label="Toggle menu"
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: textColor,
            transition: "all 0.3s ease",
            transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "18px",
            height: "2px",
            backgroundColor: textColor,
            transition: "all 0.3s ease",
            opacity: isMenuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: textColor,
            transition: "all 0.3s ease",
            transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>
    </div>
  );
}

// ─── Mobile Menu Overlay ──────────────────────────────────────────────────────
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (section: string) => void;
}

function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps) {
  if (!isOpen) return null;
  return (
    <div
      className="mobile-menu-open"
      style={{
        position: "fixed",
        top: "60px",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99,
        backgroundColor: HOME_DARK,
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      {/* Nav items */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 32px" }}>
        {HOME_NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => { onNavClick(item); onClose(); }}
            style={{
              background: "transparent",
              border: "none",
              borderBottom: "1px solid rgba(254,252,252,0.2)",
              padding: "20px 0",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "36px",
                color: "#fefcfc",
              }}
            >
              {item}
            </p>
          </button>
        ))}
      </div>

      {/* Contact */}
      <div style={{ padding: "32px" }}>
        <button
          onClick={() => { window.location.href = MAILTO_HREF; onClose(); }}
          style={{
            background: "#fefcfc",
            border: "none",
            padding: "16px 32px",
            cursor: "pointer",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#0015b7",
            }}
          >
            Contact — {CONTACT_EMAIL}
          </p>
        </button>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
interface HeroSectionProps {
  name: string;
  onNameChange: (n: string) => void;
}

function HeroCompositionStage({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
  const stageWidth = isMobile ? "min(100%, 360px)" : isTablet ? "min(100%, 430px)" : "100%";
  const captionFont = isMobile ? "10px" : isTablet ? "12px" : "15px";
  const captionLine = isMobile ? "15px" : isTablet ? "18px" : "24px";

  return (
    <div style={{ width: stageWidth, maxWidth: "100%", margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          aspectRatio: "1 / 1.26",
        }}
      >
        {/* Map frame + progress/caption stack */}
        <div
          style={{
            position: "absolute",
            left: "8%",
            top: "6%",
            width: "84%",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 2,
            minWidth: 0,
          }}
        >
          {/* Map layer */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              border: "1px solid #fefcfc",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
              }}
            >
              <img
                src={imgHeroMap}
                alt="Vietnam journey collage"
                style={{
                  position: "absolute",
                  inset: "11% 11% 14% 11%",
                  width: "78%",
                  height: "75%",
                  objectFit: "contain",
                  objectPosition: "center center",
                }}
              />
            </div>

            <p
              style={{
                position: "absolute",
                right: "4.2%",
                bottom: "4.2%",
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: isMobile ? "11px" : isTablet ? "12px" : "16px",
                lineHeight: isMobile ? "14px" : isTablet ? "16px" : "22px",
                color: "#fefcfc",
                whiteSpace: "nowrap",
                margin: 0,
                zIndex: 2,
              }}
            >
              16/63 provinces
            </p>

            {[
              { top: "-6px", left: "-6px" },
              { top: "-6px", right: "-6px" },
              { bottom: "-6px", left: "-6px" },
              { bottom: "-6px", right: "-6px" },
            ].map((position, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#fefcfc",
                  ...position,
                }}
              />
            ))}
          </div>

          {/* Progress + caption block */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(63, minmax(0, 1fr))",
              gap: "2px",
              alignItems: "stretch",
              height: isMobile ? "8px" : "12px",
            }}
          >
            {Array.from({ length: 63 }).map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  opacity: index < 16 ? 1 : 0.3,
                }}
              />
            ))}
          </div>

          <p
            style={{
              margin: isMobile ? "8px 0 0" : "12px 0 0",
              fontFamily: "'Space Mono', monospace",
              fontWeight: 400,
              fontSize: captionFont,
              lineHeight: captionLine,
              color: "#fefcfc",
              width: "100%",
              textAlign: "left",
            }}
          >
            I wanna dive deeper into my origins 🇻🇳, and share my friends about my country
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ name, onNameChange }: HeroSectionProps) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const gridLayerRef = useRef<HTMLDivElement>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const desktopContentWidth = Math.max(900, w - 280);

  const headingSize = isMobile ? "48px" : isTablet ? "52px" : w < 1440 ? "66px" : "80px";
  const headingLine = isMobile ? "52px" : isTablet ? "58px" : w < 1440 ? "68px" : "80px";
  const inputSize = isMobile ? "48px" : isTablet ? "40px" : "60px";
  const inputLine = isMobile ? "52px" : isTablet ? "48px" : "72px";
  const boxHeight = isMobile ? "58px" : isTablet ? "60px" : "72px";
  const charWidth = isMobile ? 30 : isTablet ? 26 : 24;
  const inputMinW = isMobile ? 70 : isTablet ? 80 : 72;
  const descSize = isMobile ? "13px" : "16px";
  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";
  const topPad = isMobile ? "88px" : isTablet ? "96px" : "72px";
  const desktopTextMax = Math.max(440, Math.min(620, desktopContentWidth - 620));

  useEffect(() => {
    const layer = gridLayerRef.current;
    const canvas = gridCanvasRef.current;
    if (!layer || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId = 0;
    const squareSize = 80;
    const hoverCells: { x: number; y: number; alpha: number; fading: boolean; lastTouched: number }[] = [];

    const initGrid = () => {
      const rect = layer.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = width;
      canvas.height = height;
      hoverCells.length = 0;
      for (let x = 0; x < width; x += squareSize) {
        for (let y = 0; y < height; y += squareSize) {
          hoverCells.push({ x, y, alpha: 0, fading: false, lastTouched: 0 });
        }
      }
    };

    const getCellAt = (x: number, y: number) =>
      hoverCells.find((cell) => x >= cell.x && x < cell.x + squareSize && y >= cell.y && y < cell.y + squareSize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = layer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;
      const cell = getCellAt(x, y);
      if (cell && cell.alpha === 0) {
        cell.alpha = 1;
        cell.lastTouched = Date.now();
        cell.fading = false;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      for (let i = 0; i < hoverCells.length; i += 1) {
        const cell = hoverCells[i];
        if (cell.alpha > 0 && !cell.fading && now - cell.lastTouched > 500) {
          cell.fading = true;
        }
        if (cell.fading) {
          cell.alpha -= 0.015;
          if (cell.alpha <= 0) {
            cell.alpha = 0;
            cell.fading = false;
          }
        }
        if (cell.alpha > 0) {
          const centerX = cell.x + squareSize / 2;
          const centerY = cell.y + squareSize / 2;
          const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, squareSize);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${Math.min(1, cell.alpha)})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.3;
          ctx.strokeRect(cell.x + 0.5, cell.y + 0.5, squareSize - 1, squareSize - 1);
        }
      }

      animationId = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(() => initGrid());
    resizeObserver.observe(layer);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    initGrid();
    draw();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationId);
    };
  }, [isMobile, isTablet]);

  return (
    <section
      className="hero-interactive-surface"
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: HOME_DARK,
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="hero-interactive-grid" ref={gridLayerRef}>
        <canvas ref={gridCanvasRef} />
      </div>

      {/* ── Email / LinkedIn top bar (desktop only) ── */}
      {!isMobile && !isTablet && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px 60px",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "16px",
              color: "#fefcfc",
            }}
          >
            <span>
              Email:{" "}
              <a href={MAILTO_HREF} style={{ color: "#fefcfc", cursor: "pointer", textDecoration: "underline" }}>
                {CONTACT_EMAIL}
              </a>
            </span>
            <span>
              LinkedIn:{" "}
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={{ color: "#fefcfc", cursor: "pointer", textDecoration: "underline" }}>
                {LINKEDIN_LABEL}
              </a>
            </span>
          </div>
        </div>
      )}

      {/* ── Main content ── */}
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : isTablet ? "flex-start" : "space-between",
          alignItems: isMobile ? "center" : isTablet ? "flex-start" : "stretch",
          flexDirection: isMobile || isTablet ? "column" : "row",
          flex: 1,
          padding: `${topPad} ${hPad} ${isMobile ? "32px" : "40px"}`,
          minHeight: isMobile ? "calc(100vh - 60px)" : "100vh",
          gap: isMobile ? "18px" : isTablet ? "40px" : "32px",
        }}
      >
        {/* Left: text */}
        <div
          style={{
            flex: isMobile || isTablet ? "1 1 auto" : `0 1 ${desktopTextMax}px`,
            maxWidth: isMobile || isTablet ? "100%" : `${desktopTextMax}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "center",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "20px" : "40px",
              alignItems: isMobile ? "center" : "flex-start",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: isMobile ? "center" : "flex-start" }}>
              <p
                style={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 700,
                  fontSize: headingSize,
                  lineHeight: headingLine,
                  color: "#fefcfc",
                  whiteSpace: isMobile ? "normal" : "nowrap",
                  wordBreak: "break-word",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Call me by your name!
              </p>

              {/* Editable name area */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "white",
                  padding: isMobile ? "3px 12px" : "4px 12px",
                  boxShadow: "-6px 9px 0px 0px #000",
                  minWidth: isMobile ? "auto" : "auto",
                  height: boxHeight,
                  cursor: "text",
                  flexWrap: "nowrap",
                  maxWidth: "100%",
                }}
                onClick={(e) => {
                  const input = (e.currentTarget as HTMLElement).querySelector("input");
                  input?.focus();
                }}
              >
                <span
                  style={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 700,
                    fontSize: inputSize,
                    lineHeight: inputLine,
                    color: "#1e1c1c",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  I'm&nbsp;
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => onNameChange(e.target.value)}
                  placeholder="SeaV"
                  style={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 700,
                    fontSize: inputSize,
                    lineHeight: inputLine,
                    color: "#1e1c1c",
                    width: `${Math.max(inputMinW, name.length * charWidth)}px`,
                    caretColor: "#e07000",
                    padding: "0",
                    margin: 0,
                    outline: "none",
                    border: "none",
                    background: "transparent",
                    minWidth: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 700,
                    fontSize: inputSize,
                    lineHeight: inputLine,
                    color: "#e07000",
                    animation: "blink 1s step-end infinite",
                    marginLeft: "-2px",
                    flexShrink: 0,
                  }}
                >
                  |
                </span>
              </div>
            </div>

            {/* Description */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: descSize,
                lineHeight: isMobile ? "20px" : "24px",
                color: "#fefcfc",
                maxWidth: isMobile ? "100%" : "560px",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <p>Product Designer with 3+ years of experience, specializing in workflow optimization and scalable design systems.</p>
              <p>I actively explore tools like Figma MCP and emerging technologies to shape more efficient and future-ready design processes.</p>
            </div>

            {/* Contact links on mobile */}
            {(isMobile || isTablet) && (
              <div
                style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              lineHeight: "15px",
              color: "rgba(254,252,252,0.7)",
              marginTop: "4px",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <span style={{ whiteSpace: "nowrap" }}>
              <a href={MAILTO_HREF} style={{ color: "rgba(254,252,252,0.7)", textDecoration: "underline" }}>
                {CONTACT_EMAIL}
                  </a>
                </span>
                <span style={{ whiteSpace: "nowrap" }}>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" style={{ color: "rgba(254,252,252,0.7)", textDecoration: "underline" }}>
                    {LINKEDIN_LABEL}
                  </a>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: fixed-ratio Vietnam composition */}
        <div
          style={{
            flex: isMobile || isTablet ? "0 0 auto" : "0 0 clamp(400px, 34vw, 520px)",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile || isTablet ? "center" : "flex-end",
            position: "relative",
            width: isMobile || isTablet ? "100%" : "clamp(400px, 34vw, 520px)",
            maxWidth: "100%",
            minWidth: 0,
          }}
        >
          <HeroCompositionStage isMobile={isMobile} isTablet={isTablet} />
        </div>
      </div>

      <style>{GLOBAL_CSS}</style>
    </section>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────
interface WorkCardProps {
  work: (typeof works)[0];
  index: number;
  onViewDetails: (route: string) => void;
  cardRef: (el: HTMLDivElement | null) => void;
  stickyTop: number;
  stickyEnabled: boolean;
  zIndex: number;
  stackGap: number;
}

function WorkCard({ work, index, onViewDetails, cardRef, stickyTop, stickyEnabled, zIndex, stackGap }: WorkCardProps) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;

  return (
    <div
      ref={cardRef}
      className="relative w-full"
      style={{
        backgroundColor: "#f6f6f6",
        border: "1px solid #1e1c1c",
        marginBottom: 0,
        position: stickyEnabled ? "sticky" : "relative",
        top: stickyEnabled ? `${stickyTop + index * stackGap}px` : "auto",
        zIndex,
      }}
    >
      {/* Card header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "12px 20px" : "16px 40px",
          borderBottom: "1px solid #1e1c1c",
        }}
      >
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ borderRadius: "50%", width: "12px", height: "12px", backgroundColor: "#ff4800", border: "1px solid #1e1c1c" }} />
          <div style={{ borderRadius: "50%", width: "12px", height: "12px", backgroundColor: "#6817f5", border: "1px solid #1e1c1c" }} />
        </div>
        <p
          style={{
            marginLeft: isMobile ? "16px" : "36px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? "14px" : "18px",
            lineHeight: "28px",
            color: "#1e1c1c",
            whiteSpace: "nowrap",
          }}
        >
          {work.category}
        </p>
      </div>

      {/* Card body */}
      <div style={{ borderBottom: "1px solid #1e1c1c" }}>
        {isMobile ? (
          /* Mobile: stack — image first, text below */
          <div>
            {/* Image */}
            <div style={{ width: "100%", aspectRatio: "612/400", position: "relative" }}>
              <img
                src={work.image}
                alt={work.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Text */}
            <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontFamily: DISPLAY_FONT, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "#1e1c1c" }}>
                  {work.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "20px", color: "#626060" }}>
                  {work.subtitle}
                </p>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "#1e1c1c" }}>
                {work.description}
              </p>
              <button
                onClick={() => onViewDetails(work.route)}
                style={{ cursor: "pointer", background: "transparent", border: "none", padding: 0, alignSelf: "flex-start" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "24px", backgroundColor: "#d6d6d6", paddingLeft: "20px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "28px", color: "#1e1c1c", whiteSpace: "nowrap" }}>
                    View details
                  </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", backgroundColor: HOME_ACCENT }}>
                    <div style={{ overflow: "clip", position: "relative", flexShrink: 0, width: "22px", height: "22px" }}>
                      <div style={{ position: "absolute", inset: "20.83%" }}>
                        <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333">
                          <path d={svgPaths.p3dd08400} fill="#FEFCFC" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* Tablet / Desktop: side by side */
          <div
            style={{
              display: "flex",
              gap: isTablet ? "40px" : "80px",
              alignItems: "flex-start",
              padding: isTablet ? "32px 32px" : "40px 40px",
            }}
          >
            {/* Text side */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: "1 0 0",
                minHeight: isTablet ? "220px" : "280px",
                minWidth: 0,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p
                    style={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 700,
                      fontSize: isTablet ? "28px" : "36px",
                      lineHeight: isTablet ? "36px" : "48px",
                      color: "#1e1c1c",
                    }}
                  >
                    {work.title}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "#626060" }}>
                    {work.subtitle}
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isTablet ? "14px" : "16px", lineHeight: "24px", color: "#1e1c1c" }}>
                  {work.description}
                </p>
              </div>

              {/* View details button */}
              <div style={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
                <button
                  onClick={() => onViewDetails(work.route)}
                  style={{ cursor: "pointer", background: "transparent", border: "none", padding: 0 }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "32px", backgroundColor: "#d6d6d6", paddingLeft: "32px" }}>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "#1e1c1c", whiteSpace: "nowrap" }}>
                      View details
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", backgroundColor: HOME_ACCENT }}>
                      <div style={{ overflow: "clip", position: "relative", flexShrink: 0, width: "28px", height: "28px" }}>
                        <div style={{ position: "absolute", inset: "20.83%" }}>
                          <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333">
                            <path d={svgPaths.p3dd08400} fill="#FEFCFC" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Image side */}
            <div style={{ flex: "1 0 0", aspectRatio: "612/400", position: "relative", minWidth: 0 }}>
              <img
                src={work.image}
                alt={work.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function WebsiteDesignLinksBlock() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;

  const websiteLinks = [
    { label: "Electric bird", href: "https://electricbird.vn/" },
    { label: "Hoianese", href: "https://hoianese.com/" },
    { label: "Helloclever", href: "https://helloclever.co/" },
  ];

  return (
    <div
      style={{
        borderBottom: "1px solid #1e1c1c",
        padding: isMobile ? "24px 20px" : isTablet ? "32px" : "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : isTablet ? "32px" : "56px",
          alignItems: isMobile ? "stretch" : "flex-start",
        }}
      >
        <div style={{ flex: isMobile ? "1 1 auto" : "0 0 48%", minWidth: 0 }}>
          <p
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 700,
              fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
              lineHeight: isMobile ? "36px" : isTablet ? "44px" : "56px",
              color: "#1e1c1c",
              marginBottom: isMobile ? "8px" : "12px",
            }}
          >
            Website Design
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", lineHeight: "24px", color: "#1e1c1c" }}>
            Collaboration with branding department and clients to create a website can serve their business with aesthetic.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ border: "1px solid #dfe2e4", backgroundColor: "#f7f7f7" }}>
            {websiteLinks.map((item, index) => {
              const content = (
                <>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? "18px" : "20px", lineHeight: "32px", color: "#1e1c1c" }}>
                    {item.label}
                  </span>
                  <span aria-hidden="true" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: isMobile ? "28px" : "40px", lineHeight: 1, color: "#1e1c1c" }}>
                    ↗
                  </span>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    textDecoration: "none",
                    padding: isMobile ? "14px 16px" : "16px 24px",
                    borderBottom: index === websiteLinks.length - 1 ? "none" : "1px solid #dfe2e4",
                  }}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: isMobile ? "14px 16px" : "16px 24px",
                    borderBottom: index === websiteLinks.length - 1 ? "none" : "1px solid #dfe2e4",
                  }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Featured Works Section ───────────────────────────────────────────────────
function FeaturedWorksSection({ onViewDetails }: { onViewDetails: (route: string) => void }) {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const isDesktop = w >= 1024;

  const STICKY_TOP = isDesktop ? 80 : isMobile ? 72 : 60;
  const STACK_GAP = 0;
  const CARD_TOP_GAP = isMobile ? 12 : 16;
  const stickyEnabled = true;
  const stackTail = isDesktop ? 320 : isTablet ? 240 : 220;

  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!stickyEnabled) {
      setActiveCard(0);
      return;
    }
    const handleScroll = () => {
      let newActive = 0;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const triggerTop = STICKY_TOP + i * STACK_GAP;
        if (rect.top <= triggerTop + 1) {
          newActive = i;
        }
      });

      setActiveCard(newActive);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [STICKY_TOP, STACK_GAP, stickyEnabled]);

  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";

  return (
    <section id="works" className="relative w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <div style={{ padding: `${isMobile ? "48px" : "96px"} ${hPad}` }}>
        {/* ── Sticky section header ── */}
        <div
          className="sticky z-50"
          style={{ top: `${STICKY_TOP}px`, backgroundColor: "#f6f6f6", paddingBottom: "16px" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <p
              style={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 700,
                fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
                lineHeight: isMobile ? "36px" : isTablet ? "44px" : "56px",
                color: "#1e1c1c",
              }}
            >
              Featured works
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ position: "relative", width: isMobile ? "40px" : "80px", height: "8px" }}>
                <div style={{ position: "absolute", top: "50%", left: 0, right: 0, borderTop: "1px dashed #1e1c1c", transform: "translateY(-50%)" }} />
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#1e1c1c",
                  whiteSpace: "nowrap",
                  minWidth: "48px",
                }}
              >
                {activeCard + 1}/{works.length}
              </p>
            </div>
          </div>
        </div>

        {/* ── Stacking cards ── */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: `${CARD_TOP_GAP}px` }}>
          {works.map((work, i) => (
            <WorkCard
              key={work.id}
              work={work}
              index={i}
              onViewDetails={onViewDetails}
              cardRef={(el) => { cardRefs.current[i] = el; }}
              stickyTop={STICKY_TOP}
              stickyEnabled={stickyEnabled}
              zIndex={i + 1}
              stackGap={STACK_GAP}
            />
          ))}
          <WebsiteDesignLinksBlock />
          {stickyEnabled && <div style={{ height: `${stackTail}px` }} />}
        </div>
      </div>
    </section>
  );
}

// ─── Big Photo Section ──────────────���─────────────────────────────────────────
function BigPhotoSection() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";
  const photoHeight = isMobile ? "220px" : isTablet ? "360px" : "540px";

  return (
    <section id="photo" className="relative w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <div style={{ padding: `0 ${hPad} ${isMobile ? "48px" : "96px"}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "-1px" }}>
          <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
          <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
        </div>
        <div style={{ padding: "0 7px" }}>
          <div style={{ position: "relative", border: "1px solid #1e1c1c" }}>
            <div style={{ padding: isMobile ? "8px" : "20px" }}>
              <div style={{ position: "relative", width: "100%", overflow: "hidden", height: photoHeight }}>
                <img
                  src={imgShowcaseBig}
                  alt="People dining together"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-1px" }}>
          <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
          <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
        </div>
      </div>
    </section>
  );
}

// ─── About Me Section ─────────────────────────────────────────────────────────
function AboutMeSection() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";
  const vPad = isMobile ? "48px" : "96px";

  return (
    <section id="about" className="relative w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
          gap: isMobile ? "24px" : isTablet ? "32px" : "80px",
          alignItems: "flex-start",
          padding: `${vPad} ${hPad}`,
        }}
      >
        <p
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 700,
            fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
            lineHeight: isMobile ? "36px" : isTablet ? "44px" : "56px",
            color: "#1e1c1c",
            width: isMobile || isTablet ? "100%" : "400px",
            maxWidth: isMobile || isTablet ? "100%" : "400px",
            flexShrink: 0,
          }}
        >
          About me
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", lineHeight: "24px", color: "#1e1c1c" }}>
            Product Designer with 3+ years of experience, specializing in workflow optimization and scalable design systems.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: isMobile ? "14px" : "16px", lineHeight: "24px", color: "#1e1c1c" }}>
            I actively explore tools like Figma MCP and emerging technologies to shape more efficient and future-ready design processes.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Section ───────────────────────────────────────────────────────
function ExperienceSection() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";
  const vPad = isMobile ? "48px" : "96px";

  const experiences = [
    { company: "Enosta", period: "(11/2024 – 04/2026)", role: "Product designer", hasBorder: true },
    { company: "Freelancer", period: "(05/2024 – 10/2024)", role: "Product designer", hasBorder: true },
    { company: "Leonis", period: "(09/2022 – 03/2024)", role: "UX/UI Designer", hasBorder: false },
  ];

  return (
    <section id="experience" className="relative w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
          gap: isMobile ? "24px" : isTablet ? "32px" : "80px",
          alignItems: "flex-start",
          padding: `${vPad} ${hPad}`,
        }}
      >
        <p
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 700,
            fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
            lineHeight: isMobile ? "36px" : "56px",
            color: "#1e1c1c",
            width: isMobile || isTablet ? "100%" : "400px",
            maxWidth: isMobile || isTablet ? "100%" : "400px",
            flexShrink: 0,
          }}
        >
          Experience
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "32px", width: "100%" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "100%",
                ...(exp.hasBorder ? { borderBottom: "1px solid #1e1c1c" } : {}),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  justifyContent: "space-between",
                  gap: isMobile ? "4px" : "0",
                  paddingBottom: "24px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isMobile ? "18px" : "24px", lineHeight: "32px", color: "#1e1c1c" }}>
                    {exp.company}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#626060" }}>
                    {exp.period}
                  </p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: isMobile ? "14px" : "20px", lineHeight: "28px", color: isMobile ? "#626060" : "#1e1c1c" }}>
                  {exp.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Companies Section ────────────────────────────────────────────────────────
function CompaniesSection() {
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const hPad = isMobile ? "20px" : isTablet ? "40px" : "60px";
  const vPad = isMobile ? "48px" : "96px";

  return (
    <section id="companies" className="relative w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
          gap: isMobile ? "24px" : isTablet ? "32px" : "80px",
          alignItems: "flex-start",
          padding: `${vPad} ${hPad}`,
        }}
      >
        <div
          style={{
            fontFamily: DISPLAY_FONT,
            fontWeight: 700,
            fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
            lineHeight: isMobile ? "36px" : "56px",
            color: "#1e1c1c",
            width: isMobile || isTablet ? "100%" : "400px",
            maxWidth: isMobile || isTablet ? "100%" : "400px",
            flexShrink: 0,
          }}
        >
          <p>Companies & Clients</p>
          <p>I worked with</p>
        </div>

        <div style={{ flex: 1, minWidth: 0, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "-1px" }}>
            <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
            <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
          </div>
          <div style={{ padding: "0 7px" }}>
            {/* Row 1 */}
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "-1px" }}>
              <div style={{ flex: 1, minWidth: 0, marginRight: "-1px", border: "1px solid black", height: isMobile ? "80px" : "120px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "16px" }}>
                  <div style={{ position: "relative", width: isMobile ? "100px" : "166px", height: isMobile ? "42px" : "70px" }}>
                    <img
                      src={imgLogoAcciona}
                      alt="Acciona"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0, marginRight: "-1px", border: "1px solid black", height: isMobile ? "80px" : "120px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "16px" }}>
                  <div style={{ position: "relative", width: isMobile ? "120px" : "196px", height: isMobile ? "36px" : "60px" }}>
                    <img
                      src={imgLogoSupership}
                      alt="Supership"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div style={{ display: "flex", alignItems: "flex-start", marginBottom: "-1px" }}>
              <div style={{ flex: 1, minWidth: 0, marginRight: "-1px", border: "1px solid black", height: isMobile ? "80px" : "120px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "16px" }}>
                  <div style={{ position: "relative", width: isMobile ? "100px" : "163px", height: isMobile ? "24px" : "40px" }}>
                    <img
                      src={imgLogoWinx}
                      alt="WinMart"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0, marginRight: "-1px", border: "1px solid black", height: isMobile ? "80px" : "120px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "16px" }}>
                  <div style={{ position: "relative", width: isMobile ? "90px" : "147px", height: isMobile ? "34px" : "56px" }}>
                    <img
                      src={imgLogoUnivini}
                      alt="UniVini"
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "-1px" }}>
            <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
            <div style={{ backgroundColor: "#1e1c1c", width: "8px", height: "8px" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const navigate = useNavigate();
  const w = useWindowWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const isDesktop = w >= 1024;

  const [name, setName] = useState("");
  const [isLightSection, setIsLightSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // ── Typewriter animation ──
  useEffect(() => {
    const TARGET = "SeaV";
    let i = 0;
    let intervalId: ReturnType<typeof setInterval>;
    const startTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        i++;
        setName(TARGET.slice(0, i));
        if (i >= TARGET.length) clearInterval(intervalId);
      }, 180);
    }, 700);
    return () => { clearTimeout(startTimeout); clearInterval(intervalId); };
  }, []);

  // ── Track scroll for sidebar color ──
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || window.innerHeight;
      setIsLightSection(window.scrollY >= heroHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Soft reveal animation for each non-hero section
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]:not(#hero)")
    );

    if (sections.length === 0) return;

    if (prefersReduced) {
      sections.forEach((section) => {
        section.classList.remove("soft-section-ready");
        section.classList.add("is-visible");
        section.style.transitionDelay = "0ms";
      });
      return;
    }

    sections.forEach((section, index) => {
      section.classList.add("soft-section-ready");
      section.classList.remove("is-visible");
      section.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("soft-section-ready");
        section.classList.remove("is-visible");
        section.style.transitionDelay = "";
      });
    };
  }, []);

  const handleNavClick = useCallback(
    (section: string) => {
      const map: Record<string, React.RefObject<HTMLElement | null>> = {
        Home: heroRef as React.RefObject<HTMLElement | null>,
        Works: worksRef as React.RefObject<HTMLElement | null>,
        "About me": aboutRef as React.RefObject<HTMLElement | null>,
      };
      map[section]?.current?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  const handleViewDetails = useCallback(
    (route: string) => navigate(route),
    [navigate]
  );

  return (
    <div style={{ position: "relative", backgroundColor: "#f6f6f6" }}>
      {/* ── Desktop Sidebar ── */}
      {isDesktop && (
        <Sidebar
          isLightSection={isLightSection}
          name={name}
          onNavClick={handleNavClick}
        />
      )}

      {/* ── Mobile / Tablet Top Bar ── */}
      {!isDesktop && (
        <>
          <MobileTopBar
            isLightSection={isLightSection}
            onMenuToggle={() => setMobileMenuOpen((o) => !o)}
            isMenuOpen={mobileMenuOpen}
          />
          <MobileMenu
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            onNavClick={handleNavClick}
          />
        </>
      )}

      {/* ── Main content ── */}
      <main
        style={{
          marginLeft: isDesktop ? "160px" : "0",
          paddingTop: isDesktop ? "0" : "60px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div ref={heroRef as React.RefObject<HTMLDivElement>}>
          <HeroSection name={name} onNameChange={setName} />
        </div>

        <div ref={worksRef as React.RefObject<HTMLDivElement>}>
          <FeaturedWorksSection onViewDetails={handleViewDetails} />
        </div>

        <BigPhotoSection />

        <div ref={aboutRef as React.RefObject<HTMLDivElement>}>
          <AboutMeSection />
        </div>

        <ExperienceSection />
        <CompaniesSection />
      </main>
    </div>
  );
}
