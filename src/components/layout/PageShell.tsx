import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { Sidebar } from "../navigation/Sidebar";
import { MobileNav } from "../navigation/MobileNav";
import { navigationSections, socialLinks } from "../../data/site";
import "./PageShell.css";

type PageShellProps = {
  activePath: string;
  children: ReactNode;
};

const scrollContainerSelector =
  ".article-view__content, .catalog-view__grid, .catalog-view__grouped, .catalog-view__project-list, .info-view__content, .home-view";

export function PageShell({ activePath, children }: PageShellProps) {
  const [mobileChromeState, setMobileChromeState] = useState({ hidden: false, path: activePath });
  const [isRouteResetting, setIsRouteResetting] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const lastScrollRef = useRef({ path: activePath, top: 0 });
  const isMobileChromeHidden = mobileChromeState.path === activePath && mobileChromeState.hidden;

  useEffect(() => {
    lastScrollRef.current = { path: activePath, top: 0 };
  }, [activePath]);

  useLayoutEffect(() => {
    const mainElement = mainRef.current;

    if (!mainElement) {
      return;
    }

    setIsRouteResetting(true);
    mainElement.querySelectorAll<HTMLElement>(scrollContainerSelector).forEach((scrollElement) => {
      scrollElement.scrollTop = 0;
    });
    lastScrollRef.current = { path: activePath, top: 0 };
    setMobileChromeState({ hidden: false, path: activePath });

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsRouteResetting(false);
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activePath]);

  const setMobileChromeHidden = useCallback((hidden: boolean) => {
    setMobileChromeState((current) => {
      if (current.path === activePath && current.hidden === hidden) {
        return current;
      }

      return { hidden, path: activePath };
    });
  }, [activePath]);

  useEffect(() => {
    const mainElement = mainRef.current;

    if (!mainElement) {
      return;
    }

    function handleScroll(event: Event) {
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

    const scrollElements = mainElement.querySelectorAll<HTMLElement>(scrollContainerSelector);

    scrollElements.forEach((scrollElement) => {
      scrollElement.addEventListener("scroll", handleScroll, { passive: true });
    });

    return () => {
      scrollElements.forEach((scrollElement) => {
        scrollElement.removeEventListener("scroll", handleScroll);
      });
    };
  }, [activePath, isMobileChromeHidden, setMobileChromeHidden]);

  return (
    <div className="page-shell" data-mobile-chrome-hidden={isMobileChromeHidden} data-route-resetting={isRouteResetting}>
      <Sidebar activePath={activePath} sections={navigationSections} socialLinks={socialLinks} />
      <div className="page-shell__main" ref={mainRef}>
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
