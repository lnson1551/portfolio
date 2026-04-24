import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-wudsbhooqk";
import { CONTACT_EMAIL, MAILTO_HREF, SUPERSHIP_ENABLED } from "../config/site";
import { useWindowWidth } from "../hooks/useWindowWidth";

interface DetailPageLayoutProps {
  children: React.ReactNode;
  navSections?: { label: string; target: string }[];
}

// ── useIsLightSection: true once scrolled past hero (100vh) ───────────────────
function useIsLightSection() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const handle = () => {
      // Hero is 100vh — switch when 85% through
      setIsLight(window.scrollY >= window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return isLight;
}

// ── CSS injected globally for all detail pages ─────────────────────────────────
const DETAIL_CSS = `
  /* ── Font: preserve PP NeueBit display styling ── */
  [class*="PP_NeueBit"], [class*="PP NeueBit"] {
    font-family: 'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif !important;
    font-weight: 700 !important;
  }

  /* ── Hide the Figma-generated sidebar ── */
  [data-name="Menu"] {
    display: none !important;
  }

  /* ── Hide decorative summary widget (cat/photo/chat bubble) on detail heroes ── */
  [data-name="Summary Container"] {
    display: none !important;
  }
  [data-name="Summary Image"] {
    display: none !important;
  }

  /* ── Figma root wrappers: remove size-full so height is natural ── */
  [data-name$="Social app for fishers"],
  [data-name$="Logistics platform"],
  [data-name$="Design system"],
  [data-name$="WinX Membership"],
  [data-name="UniVini"],
  [data-name="Signify"] {
    height: auto !important;
    min-height: unset !important;
    background-color: #f6f6f6 !important;
  }

  /* ── Hero: 100vh, no fixed 800px ── */
  [data-name="Hero/Variant2"] {
    height: 100vh !important;
    min-height: 100vh !important;
    position: relative !important;
    overflow: hidden !important;
    isolation: isolate !important;
  }
  [data-name="Hero/Variant2"] .detail-hero-interactive-grid {
    position: absolute !important;
    inset: 0 !important;
    pointer-events: none !important;
    z-index: 0 !important;
  }
  [data-name="Hero/Variant2"] .detail-hero-interactive-grid canvas {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    opacity: 1 !important;
  }
  [data-name="Hero/Variant2"] > div {
    overflow: visible !important;
    height: 100% !important;
    position: relative !important;
    z-index: 1 !important;
  }

  /* ── Hero logos: keep all project logos white ── */
  [data-name="Hero/Variant2"] [data-name="Logo"] img {
    filter: brightness(0) invert(1) !important;
  }
  [data-name="Hero/Variant2"] [data-name="Logo"] svg path,
  [data-name="Hero/Variant2"] [data-name="Logo"] svg rect,
  [data-name="Hero/Variant2"] [data-name="Logo"] svg circle,
  [data-name="Hero/Variant2"] [data-name="Logo"] svg ellipse,
  [data-name="Hero/Variant2"] [data-name="Logo"] svg polygon {
    fill: #fefcfc !important;
    stroke: #fefcfc !important;
  }
  [data-name="Hero/Variant2"] [data-name="Logo"] p,
  [data-name="Hero/Variant2"] [data-name="Logo"] span,
  [data-name="Hero/Variant2"] [data-name="Logo"] div {
    color: #fefcfc !important;
  }

  /* ── TeamBar: equal-height columns ── */
  [data-name="TeamBar"] .flex {
    align-items: stretch !important;
  }
  [data-name="TeamBar"] .overflow-clip {
    overflow: visible !important;
  }
  [data-name="TeamBar"] .h-\\[220px\\] {
    height: auto !important;
    min-height: 0 !important;
  }
  [data-name="TeamBar"] [data-name="Container"] {
    height: auto !important;
    align-self: stretch !important;
  }

  /* ── Hide the original Figma footer (we render SharedFooter instead) ── */
  [data-name="Footer"] {
    display: none !important;
  }

  ${!SUPERSHIP_ENABLED ? `
  /* ── Temporarily hide Supership from "More works" cards ── */
  [data-name="More Work Container"] a[href="/work/supership"] {
    display: none !important;
  }
  ` : ""}

  /* ── Reflection section titles use the same display style as major section headings ── */
  [data-name="ReflectionSection"] > div > p:first-child {
    font-family: 'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif !important;
    font-weight: 700 !important;
    font-size: 48px !important;
    line-height: 56px !important;
    letter-spacing: 0 !important;
  }

  /* ══════════════════════════════════════════════════════════════
     MOBILE RESPONSIVE OVERRIDES  (< 768px)
     ══════════════════════════════════════════════════════════════ */
  @media (max-width: 767px) {

    /* ── Horizontal padding: 60px → 20px ── */
    [class*="px-[60px]"] {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    /* ── Vertical padding: 96px → 48px ── */
    [class*="py-[96px]"] {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }

    /* ── Contact bar in hero ── */
    [data-name="Contact Container"] {
      display: none !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      flex-wrap: nowrap !important;
      gap: 6px !important;
      padding-top: 16px !important;
      padding-bottom: 16px !important;
    }
    [data-name="Contact Container"] * {
      min-width: 0 !important;
    }
    [data-name="Contact Container"] p,
    [data-name="Contact Container"] span,
    [data-name="Contact Container"] a {
      font-size: 12px !important;
      line-height: 16px !important;
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }

    /* ── Hero decorative summary bubble ── */
    [data-name="Summary Container"] {
      display: none !important;
    }

    /* ── Hero logo repositioning ── */
    [data-name="Logo"] {
      right: 20px !important;
      bottom: 20px !important;
    }

    /* ── Project content container (image frame) ── */
    [data-name="Project Content Container"] {
      width: 100% !important;
      max-width: 100% !important;
    }

    /* ── Hero height ── */
    [data-name="Hero/Variant2"] {
      height: auto !important;
      min-height: unset !important;
    }
    [data-name="Hero/Variant2"] > div {
      height: auto !important;
      min-height: unset !important;
      justify-content: flex-start !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    [data-name="Hero/Variant2"] .px-\\[60px\\] {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    [data-name="Hero/Variant2"] .py-\\[96px\\] {
      padding-top: 96px !important;
      padding-bottom: 96px !important;
    }
    [data-name="Hero/Variant2"] [data-name="Content Block"] {
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 16px !important;
      width: 100% !important;
    }
    [data-name="Hero/Variant2"] [data-name="Project Content Container"] {
      width: 100% !important;
      max-width: 320px !important;
      align-items: center !important;
      justify-content: center !important;
      padding-bottom: 0 !important;
    }
    [data-name="Hero/Variant2"] [data-name="Project Info"] {
      width: 100% !important;
      max-width: 100% !important;
      padding: 0 !important;
      gap: 8px !important;
    }
    [data-name="Hero/Variant2"] [data-name="Project Info"] > p,
    [data-name="Hero/Variant2"] [data-name="Project Details Container"] p {
      text-align: center !important;
      white-space: normal !important;
      min-width: 0 !important;
      width: 100% !important;
    }
    [data-name="Hero/Variant2"] [data-name="Project Details Container"] {
      width: 100% !important;
      justify-content: center !important;
      opacity: 0.7 !important;
    }
    [data-name="Hero/Variant2"] [data-name="Project Image Container"] {
      width: 100% !important;
      max-width: 320px !important;
      align-self: center !important;
    }
    [data-name="Hero/Variant2"] [class*="text-[80px]"] {
      font-size: 44px !important;
      line-height: 1 !important;
    }
    [data-name="Hero/Variant2"] [class*="text-[18px]"] {
      font-size: 12px !important;
      line-height: 18px !important;
    }
    [data-name="Hero/Variant2"] [data-name="Cloud"] {
      display: none !important;
    }
    [data-name="Hero/Variant2"] .absolute[data-name="Logo"] {
      display: none !important;
    }

    /* ── Major 2-column sections stack on mobile ── */
    [data-name="ContextSection"] > div,
    [data-name="ChallengesSection"] > div,
    [data-name="QuestionsSection"] > div,
    [data-name="ReflectionSection"] > div,
    [data-name="Impact Container"] {
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      align-items: stretch !important;
      gap: 32px !important;
    }
    [data-name="ContextSection"] > div > *,
    [data-name="ChallengesSection"] > div > *,
    [data-name="QuestionsSection"] > div > *,
    [data-name="ReflectionSection"] > div > *,
    [data-name="Impact Container"] > * {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      flex: 1 1 100% !important;
    }
    [data-name="ContextSection"] [class*="min-w-\\[343px\\]"],
    [data-name="QuestionsSection"] [class*="min-w-\\[343px\\]"],
    [data-name="ReflectionSection"] [class*="min-w-\\[343px\\]"],
    [data-name="DesignPlanSection"] [class*="min-w-\\[343px\\]"],
    [data-name="DiagnosisSection"] [class*="min-w-\\[343px\\]"],
    [data-name="ImpactSection"] [class*="min-w-\\[343px\\]"] {
      min-width: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    /* ── More Works: stack cards vertically ── */
    [data-name="More Work Container"] {
      flex-direction: column !important;
      gap: 24px !important;
    }
    [data-name="More Work Container"] > div {
      min-width: 0 !important;
      width: 100% !important;
    }

    /* ── ScreenCard: full width ── */
    [data-name="ScreenCard"] {
      min-width: 0 !important;
      max-width: 100% !important;
      width: 100% !important;
      flex: 1 1 100% !important;
    }

    /* ── Design principles and feature grids collapse to one column ── */
    [data-name="Redesign Container"],
    [data-name="Findings Container"] {
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      align-items: stretch !important;
      gap: 24px !important;
    }
    [data-name="Redesign Container"] > *,
    [data-name="Findings Container"] > * {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      flex: 1 1 100% !important;
    }

    /* ── TeamBar: one column ── */
    [data-name="TeamBar"] {
      height: auto !important;
      min-height: 0 !important;
    }
    [data-name="TeamBar"] > div {
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      gap: 0 !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }
    [data-name="TeamBar"] [class*="flex-[1_0_0]"] {
      min-width: 100% !important;
      max-width: 100% !important;
      width: 100% !important;
      flex: 1 1 100% !important;
      margin-right: 0 !important;
      align-self: auto !important;
    }
    [data-name="TeamBar"] [class*="h-[220px]"],
    [data-name="TeamBar"] [class*="size-full"] {
      height: auto !important;
      min-height: 0 !important;
    }
    [data-name="TeamBar"] [data-name="Container"] > div,
    [data-name="TeamBar"] [data-name="Container"] .size-full {
      height: auto !important;
      min-height: 0 !important;
    }
    [data-name="TeamBar"] ul {
      width: 100% !important;
      min-width: 0 !important;
    }
    [data-name="TeamBar"] li,
    [data-name="TeamBar"] span,
    [data-name="TeamBar"] p {
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      white-space: normal !important;
    }
    [data-name="TeamBar"] .py-\\[40px\\] {
      padding-top: 24px !important;
      padding-bottom: 24px !important;
    }

    /* ── Fixed widths → fluid ── */
    [class*="w-[400px]"] {
      width: 100% !important;
    }
    [class*="max-w-[400px]"] {
      max-width: 100% !important;
    }
    [class*="min-w-[343px]"] {
      min-width: 0 !important;
    }
    [class*="w-[480px]"] {
      width: 100% !important;
      max-width: 100% !important;
    }
    [class*="w-[680px]"],
    [class*="max-w-[680px]"],
    [class*="w-[612px]"],
    [class*="max-w-[612px]"] {
      width: 100% !important;
      max-width: 100% !important;
    }

    /* ── Large font sizes → readable on mobile ── */
    [class*="text-[80px]"] {
      font-size: 40px !important;
      line-height: 1.05 !important;
    }
    [class*="text-[56px]"] {
      font-size: 32px !important;
      line-height: 1.15 !important;
    }
    [class*="text-[48px]"] {
      font-size: 28px !important;
      line-height: 1.3 !important;
    }
    [class*="text-[36px]"] {
      font-size: 24px !important;
      line-height: 1.3 !important;
    }
    [class*="text-[32px]"] {
      font-size: 22px !important;
      line-height: 1.3 !important;
    }
    [class*="text-[28px]"] {
      font-size: 20px !important;
      line-height: 1.3 !important;
    }
    [class*="text-[24px]"] {
      font-size: 18px !important;
      line-height: 1.4 !important;
    }
    [data-name="ReflectionSection"] > div > p:first-child {
      font-size: 28px !important;
      line-height: 36px !important;
    }
    [data-name="TeamBar"] [class*="text-[18px]"] {
      font-size: 16px !important;
      line-height: 24px !important;
    }

    /* ── Large gaps → smaller ── */
    [class*="gap-[80px]"] {
      gap: 32px !important;
    }
    [class*="gap-[60px]"] {
      gap: 24px !important;
    }

    /* ── ImpactSection: allow metric boxes to wrap ── */
    [data-name="ImpactSection"] .flex {
      flex-wrap: wrap !important;
    }
    [data-name="ImpactSection"] [class*="max-w-[400px]"] {
      max-width: 100% !important;
      flex: 1 1 100% !important;
    }

    /* ── Prevent horizontal overflow ── */
    [data-name$="Social app for fishers"],
    [data-name$="Logistics platform"],
    [data-name$="Design system"],
    [data-name$="WinX Membership"],
    [data-name="UniVini"],
    [data-name="Signify"] {
      overflow-x: hidden !important;
    }
  }

  /* ══════════════════════════════════════════════════════════════
     TABLET RESPONSIVE OVERRIDES  (768px – 1279px)
     ══════════════════════════════════════════════════════════════ */
  @media (min-width: 768px) and (max-width: 1279px) {

    /* ── Horizontal padding: 60px → 32px ── */
    [class*="px-[60px]"] {
      padding-left: 32px !important;
      padding-right: 32px !important;
    }

    /* ── Vertical padding: 96px → 64px ── */
    [class*="py-[96px]"] {
      padding-top: 64px !important;
      padding-bottom: 64px !important;
    }

    /* ── More Works: 2-up grid ── */
    [data-name="More Work Container"] {
      flex-wrap: wrap !important;
      gap: 20px !important;
    }
    [data-name="More Work Container"] > div {
      min-width: calc(50% - 10px) !important;
      flex: 1 1 calc(50% - 10px) !important;
    }

    /* ── Project content container ── */
    [data-name="Project Content Container"] {
      width: 100% !important;
      max-width: 100% !important;
    }
    [data-name="Hero/Variant2"] [data-name="Content Block"] {
      gap: 28px !important;
      justify-content: center !important;
    }
    [data-name="ContextSection"] > div,
    [data-name="ChallengesSection"] > div,
    [data-name="QuestionsSection"] > div,
    [data-name="ReflectionSection"] > div,
    [data-name="Impact Container"] {
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 40px !important;
    }
    [data-name="ContextSection"] > div > *,
    [data-name="ChallengesSection"] > div > *,
    [data-name="QuestionsSection"] > div > *,
    [data-name="ReflectionSection"] > div > *,
    [data-name="Impact Container"] > * {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      flex: 1 1 100% !important;
    }
    [data-name="Redesign Container"],
    [data-name="Findings Container"] {
      flex-wrap: wrap !important;
      gap: 20px !important;
    }
    [data-name="Redesign Container"] > *,
    [data-name="Findings Container"] > * {
      min-width: calc(50% - 10px) !important;
      flex: 1 1 calc(50% - 10px) !important;
    }
    [data-name="TeamBar"] > div {
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      gap: 0 !important;
      height: auto !important;
      min-height: 0 !important;
      overflow: visible !important;
    }
    [data-name="TeamBar"] [class*="flex-[1_0_0]"] {
      min-width: 100% !important;
      max-width: 100% !important;
      width: 100% !important;
      flex: 1 1 100% !important;
      margin-right: 0 !important;
      align-self: auto !important;
    }
    [data-name="TeamBar"] {
      height: auto !important;
      min-height: 0 !important;
    }
    [data-name="TeamBar"] [class*="h-[220px]"],
    [data-name="TeamBar"] [class*="size-full"] {
      height: auto !important;
      min-height: 0 !important;
    }
    [data-name="TeamBar"] ul {
      width: 100% !important;
      min-width: 0 !important;
    }
    [data-name="TeamBar"] li,
    [data-name="TeamBar"] span,
    [data-name="TeamBar"] p {
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
      white-space: normal !important;
    }

    /* ── Font sizes ── */
    [class*="text-[80px]"] {
      font-size: 56px !important;
      line-height: 1.05 !important;
    }
    [class*="text-[56px]"] {
      font-size: 42px !important;
      line-height: 1.1 !important;
    }
    [class*="text-[48px]"] {
      font-size: 36px !important;
      line-height: 1.2 !important;
    }
    [class*="text-[36px]"] {
      font-size: 28px !important;
      line-height: 1.2 !important;
    }
    [data-name="ReflectionSection"] > div > p:first-child {
      font-size: 36px !important;
      line-height: 44px !important;
    }
  }
`;

// ── Default nav sections ───────────────────────────────────────────────────────
const DEFAULT_SECTIONS = [
  { label: "Context", target: "ContextSection" },
  { label: "Results", target: "ImpactSection" },
  { label: "Learned", target: "ReflectionSection" },
];

function scrollToSection(dataName: string) {
  const el = document.querySelector(`[data-name="${dataName}"]`);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DetailPageLayout({
  children,
  navSections = DEFAULT_SECTIONS,
}: DetailPageLayoutProps) {
  const navigate = useNavigate();
  const w = useWindowWidth();
  const isDesktop = w >= 1280;
  const isLight = useIsLightSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Derived sidebar colors — same logic as homepage Sidebar
  const sidebarBg     = isLight ? "#f6f6f6" : "#0015b7";
  const sidebarText   = isLight ? "#1e1c1c" : "#fefcfc";
  const sidebarBorder = isLight ? "#1e1c1c" : "#fefcfc";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (isDesktop) setMobileMenuOpen(false);
  }, [isDesktop]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Matrix hero effect (detail pages)
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const setupGridForHero = (hero: HTMLElement) => {
      if (hero.querySelector(":scope > .detail-hero-interactive-grid")) return;

      const layer = document.createElement("div");
      layer.className = "detail-hero-interactive-grid";
      const canvas = document.createElement("canvas");
      layer.appendChild(canvas);
      hero.insertBefore(layer, hero.firstChild);

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let animationId = 0;
      const squareSize = 80;
      const hoverCells: { x: number; y: number; alpha: number; fading: boolean; lastTouched: number }[] = [];

      const initGrid = () => {
        const rect = hero.getBoundingClientRect();
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
        const rect = hero.getBoundingClientRect();
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
      resizeObserver.observe(hero);
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      initGrid();
      draw();

      cleanups.push(() => {
        resizeObserver.disconnect();
        window.removeEventListener("mousemove", onMouseMove);
        window.cancelAnimationFrame(animationId);
        layer.remove();
      });
    };

    document.querySelectorAll<HTMLElement>('[data-name="Hero/Variant2"]').forEach(setupGridForHero);
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const handleBack = useCallback(() => navigate("/"), [navigate]);

  return (
    <>
      <style>{DETAIL_CSS}</style>

      {/* ══════════════════════════════════════
          DESKTOP: Fixed 160px sidebar
          ══════════════════════════════════════ */}
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
            backgroundColor: sidebarBg,
            borderRight: `1px solid ${sidebarBorder}`,
            transition: "background-color 0.4s ease, border-color 0.4s ease",
          }}
        >
          {/* ← Back */}
          <button
            onClick={handleBack}
            style={{
              borderBottom: `1px solid ${sidebarBorder}`,
              transition: "border-color 0.4s ease",
              flexShrink: 0,
              cursor: "pointer",
              background: "transparent",
              width: "100%",
            }}
          >
            <div style={{ padding: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "28px", color: sidebarText, transition: "color 0.4s ease" }}>
                ← Back
              </p>
            </div>
          </button>

          {/* Nav items */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {navSections.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  borderBottom: `1px solid ${sidebarBorder}`,
                  borderTop: `1px solid ${sidebarBorder}`,
                  marginBottom: "-1px",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "border-color 0.4s ease",
                }}
              >
                <div style={{ padding: "16px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: sidebarText, transition: "color 0.4s ease" }}>
                    {item.label}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Contact */}
          <button
            onClick={() => (window.location.href = MAILTO_HREF)}
            style={{ borderTop: `1px solid ${sidebarBorder}`, transition: "border-color 0.4s ease", flexShrink: 0, width: "100%", background: "transparent", cursor: "pointer" }}
          >
            <div style={{ display: "flex", gap: "4px", alignItems: "center", padding: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "16px", lineHeight: "24px", color: sidebarText, transition: "color 0.4s ease", whiteSpace: "nowrap" }}>
                Contact
              </p>
              <div style={{ overflow: "clip", position: "relative", flexShrink: 0, width: "20px", height: "20px" }}>
                <div style={{ position: "absolute", inset: "20.83%" }}>
                  <svg style={{ position: "absolute", display: "block", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                    <path d={svgPaths.p221d400} fill={sidebarText} />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </aside>
      )}

      {/* ══════════════════════════════════════
          MOBILE / TABLET: Fixed top bar
          ══════════════════════════════════════ */}
      {!isDesktop && (
        <>
          {/* Top bar */}
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
            {/* ← Back */}
            <button
              onClick={handleBack}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px 0", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", color: "#fefcfc" }}>
                ← Back
              </p>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: "8px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-end" }}
              aria-label="Toggle menu"
            >
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", transform: mobileMenuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
              <span style={{ display: "block", width: "18px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", opacity: mobileMenuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#fefcfc", transition: "all 0.3s ease", transform: mobileMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
            </button>
          </div>

          {/* Mobile menu overlay */}
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
                padding: "32px",
                overflowY: "auto",
              }}
            >
              {/* Nav items */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
                {navSections.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { scrollToSection(item.target); setMobileMenuOpen(false); }}
                    style={{
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(254,252,252,0.2)",
                      padding: "20px 0",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <p style={{ fontFamily: "'PP NeueBit', 'PP_NeueBit:Semi_Bold', 'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "28px", lineHeight: "36px", color: "#fefcfc" }}>
                      {item.label}
                    </p>
                  </button>
                ))}
              </div>

              {/* Contact */}
              <button
                onClick={() => { window.location.href = MAILTO_HREF; setMobileMenuOpen(false); }}
                style={{ background: "#fefcfc", border: "none", padding: "16px 32px", cursor: "pointer", marginTop: "32px" }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "15px", lineHeight: "24px", color: "#0015b7", textAlign: "center" }}>
                  Contact — {CONTACT_EMAIL}
                </p>
              </button>
            </div>
          )}
        </>
      )}

      {/* ── Main content area ── */}
      <div
        style={{
          marginLeft: isDesktop ? "160px" : "0",
          paddingTop: isDesktop ? "0" : "60px",
          minHeight: "100vh",
          backgroundColor: "#f6f6f6",
          overflowX: "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
}
