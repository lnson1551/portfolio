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
  const lastScrollRef = useRef({ direction: 0, distance: 0, path: activePath, top: 0 });
  const isMobileChromeHidden = mobileChromeState.path === activePath && mobileChromeState.hidden;

  useEffect(() => {
    lastScrollRef.current = { direction: 0, distance: 0, path: activePath, top: 0 };
  }, [activePath]);

  function setMobileChromeHidden(hidden: boolean) {
    setMobileChromeState((current) => {
      if (current.path === activePath && current.hidden === hidden) {
        return current;
      }

      return { hidden, path: activePath };
    });
  }

  function handleScrollCapture(event: UIEvent<HTMLDivElement>) {
    const scrollTarget = event.target;

    if (!(scrollTarget instanceof HTMLElement) || scrollTarget.closest(".mobile-nav__menu")) {
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
    if (lastScrollRef.current.path !== activePath) {
      lastScrollRef.current = { direction: 0, distance: 0, path: activePath, top: nextScrollTop };
      setMobileChromeHidden(false);
      return;
    }

    const previousScrollTop = lastScrollRef.current.top;
    const scrollDelta = nextScrollTop - previousScrollTop;
    const direction = scrollDelta > 0 ? 1 : scrollDelta < 0 ? -1 : 0;

    if (nextScrollTop < 32) {
      lastScrollRef.current = { direction: 0, distance: 0, path: activePath, top: nextScrollTop };
      setMobileChromeHidden(false);
      return;
    }

    if (Math.abs(scrollDelta) < 2 || direction === 0) {
      lastScrollRef.current = { ...lastScrollRef.current, top: nextScrollTop };
      return;
    }

    const nextDistance =
      lastScrollRef.current.direction === direction
        ? lastScrollRef.current.distance + Math.abs(scrollDelta)
        : Math.abs(scrollDelta);

    if (direction > 0 && nextScrollTop > 96 && nextDistance >= 56) {
      setMobileChromeHidden(true);
      lastScrollRef.current = { direction, distance: 0, path: activePath, top: nextScrollTop };
      return;
    }

    if (direction < 0 && nextDistance >= 72) {
      setMobileChromeHidden(false);
      lastScrollRef.current = { direction, distance: 0, path: activePath, top: nextScrollTop };
      return;
    }

    lastScrollRef.current = { direction, distance: nextDistance, path: activePath, top: nextScrollTop };
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
              setMobileChromeState({ hidden: false, path: activePath });
            }
          }}
        />
        {children}
      </div>
    </div>
  );
}
