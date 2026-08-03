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
  const isMobileChromeHidden = mobileChromeState.path === activePath && mobileChromeState.hidden;

  useEffect(() => {
    lastScrollRef.current = { path: activePath, top: 0 };
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
    const scrollDelta = nextScrollTop - previousScrollTop;

    if (lastScrollRef.current.path !== activePath) {
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      setMobileChromeHidden(false);
      return;
    }

    lastScrollRef.current = { path: activePath, top: nextScrollTop };

    if (nextScrollTop < 24) {
      setMobileChromeHidden(false);
      return;
    }

    if (scrollDelta > 8 && nextScrollTop > 120) {
      setMobileChromeHidden(true);
      return;
    }

    if (scrollDelta < -8) {
      setMobileChromeHidden(false);
    }
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
