import { useEffect, useRef, useState, type ReactNode, type UIEvent } from "react";
import { Sidebar } from "../navigation/Sidebar";
import { MobileNav } from "../navigation/MobileNav";
import { navigationSections, socialLinks } from "../../data/site";
import "./PageShell.css";

type PageShellProps = {
  activePath: string;
  children: ReactNode;
};

export function PageShell({ activePath, children }: PageShellProps) {
  const [mobileChromeState, setMobileChromeState] = useState({ hidden: false, path: activePath });
  const lastScrollRef = useRef({ path: activePath, top: 0 });
  const mobileChromeLockUntilRef = useRef(0);
  const snapFrameRef = useRef<number | null>(null);
  const isMobileChromeHidden = mobileChromeState.path === activePath && mobileChromeState.hidden;

  useEffect(() => {
    lastScrollRef.current = { path: activePath, top: 0 };

    return () => {
      if (snapFrameRef.current !== null) {
        window.cancelAnimationFrame(snapFrameRef.current);
        snapFrameRef.current = null;
      }
    };
  }, [activePath]);

  function setMobileChromeHidden(hidden: boolean) {
    setMobileChromeState((current) => {
      if (current.path === activePath && current.hidden === hidden) {
        return current;
      }

      mobileChromeLockUntilRef.current = performance.now() + 360;
      return { hidden, path: activePath };
    });
  }

  function snapMobileChromeToTop(scrollTarget: HTMLElement) {
    if (snapFrameRef.current !== null) {
      return;
    }

    snapFrameRef.current = window.requestAnimationFrame(() => {
      scrollTarget.scrollTo({ top: 0, behavior: "auto" });
      lastScrollRef.current = { path: activePath, top: 0 };
      snapFrameRef.current = null;
    });
  }

  function handleScrollCapture(event: UIEvent<HTMLDivElement>) {
    const scrollTarget = event.target;

    if (
      !(scrollTarget instanceof HTMLElement) ||
      scrollTarget.closest(".mobile-nav__menu") ||
      document.querySelector(".article-switcher.is-open")
    ) {
      return;
    }

    if (scrollTarget.scrollHeight <= scrollTarget.clientHeight) {
      return;
    }

    if (!window.matchMedia("(max-width: 900px)").matches) {
      setMobileChromeHidden(false);
      return;
    }

    const nextScrollTop = scrollTarget.scrollTop;
    const previousScrollTop = lastScrollRef.current.top;
    const isScrollingTowardTop = nextScrollTop < previousScrollTop;

    if (isMobileChromeHidden && isScrollingTowardTop && nextScrollTop < 96) {
      snapMobileChromeToTop(scrollTarget);
      lastScrollRef.current = { path: activePath, top: 0 };
      setMobileChromeHidden(false);
      return;
    }

    if (nextScrollTop < 32) {
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      setMobileChromeHidden(false);
      return;
    }

    if (performance.now() < mobileChromeLockUntilRef.current) {
      lastScrollRef.current = { ...lastScrollRef.current, path: activePath, top: nextScrollTop };
      return;
    }

    if (lastScrollRef.current.path !== activePath) {
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      setMobileChromeHidden(false);
      return;
    }

    if (!isMobileChromeHidden && nextScrollTop > 144) {
      setMobileChromeHidden(true);
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      return;
    }

    if (isMobileChromeHidden && nextScrollTop < 48) {
      setMobileChromeHidden(false);
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      return;
    }

    lastScrollRef.current = { path: activePath, top: nextScrollTop };
  }

  return (
    <div className="page-shell" data-mobile-chrome-hidden={isMobileChromeHidden}>
      <Sidebar activePath={activePath} sections={navigationSections} socialLinks={socialLinks} />
      <div className="page-shell__main" onScrollCapture={handleScrollCapture}>
        <MobileNav
          activePath={activePath}
          sections={navigationSections}
          onOpenChange={(isOpen) => {
            if (isOpen) {
              mobileChromeLockUntilRef.current = performance.now() + 360;
              setMobileChromeState({ hidden: false, path: activePath });
            }
          }}
        />
        {children}
      </div>
    </div>
  );
}
