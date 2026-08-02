import { useRef, useState, type ReactNode, type UIEvent } from "react";
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

  function handleScrollCapture(event: UIEvent<HTMLDivElement>) {
    const scrollTarget = event.target;

    if (!(scrollTarget instanceof HTMLElement) || scrollTarget.closest(".mobile-nav__menu")) {
      return;
    }

    if (scrollTarget.scrollHeight <= scrollTarget.clientHeight) {
      return;
    }

    if (!window.matchMedia("(max-width: 900px)").matches) {
      setMobileChromeState({ hidden: false, path: activePath });
      return;
    }

    const nextScrollTop = scrollTarget.scrollTop;
    if (lastScrollRef.current.path !== activePath) {
      lastScrollRef.current = { path: activePath, top: nextScrollTop };
      setMobileChromeState({ hidden: false, path: activePath });
      return;
    }

    const previousScrollTop = lastScrollRef.current.top;
    const scrollDelta = nextScrollTop - previousScrollTop;

    if (nextScrollTop < 24) {
      setMobileChromeState({ hidden: false, path: activePath });
    } else if (scrollDelta > 8) {
      setMobileChromeState({ hidden: true, path: activePath });
    } else if (scrollDelta < -8) {
      setMobileChromeState({ hidden: false, path: activePath });
    }

    lastScrollRef.current = { path: activePath, top: nextScrollTop };
  }

  return (
    <div className="page-shell" data-mobile-chrome-hidden={isMobileChromeHidden}>
      <Sidebar activePath={activePath} sections={navigationSections} socialLinks={socialLinks} />
      <div className="page-shell__main" onScrollCapture={handleScrollCapture}>
        <MobileNav activePath={activePath} sections={navigationSections} />
        {children}
      </div>
    </div>
  );
}
