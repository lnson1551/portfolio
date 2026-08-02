import { useState } from "react";
import type { NavigationSection } from "../../types/content";
import { BrandMark } from "../content/BrandMark";
import "./MobileNav.css";

type MobileNavProps = {
  activePath: string;
  onOpenChange?: (isOpen: boolean) => void;
  sections: NavigationSection[];
};

function hrefToPath(href: string) {
  return href.replace(/^#/, "");
}

export function MobileNav({ activePath, onOpenChange, sections }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  function setMenuOpen(nextOpen: boolean) {
    setIsOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }

  return (
    <header className="mobile-nav" data-open={isOpen}>
      <div className="mobile-nav__bar">
        <BrandMark />
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label="Open navigation"
          className="mobile-nav__toggle"
          type="button"
          onClick={() => setMenuOpen(!isOpen)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <nav className="mobile-nav__menu" data-open={isOpen} id="mobile-navigation" aria-label="Primary navigation">
        {sections.map((section) => (
          <section className="mobile-nav__section" key={section.title}>
            <p className="mobile-nav__section-title">{section.title}</p>
            <div className="mobile-nav__links">
              {section.items.map((item) => (
                item.comingSoon ? (
                  <span className="mobile-nav__link mobile-nav__link--disabled" aria-disabled="true" key={item.href}>
                    <span>{item.label}</span>
                    <span className="mobile-nav__tag">Coming soon</span>
                  </span>
                ) : (
                  <a
                    aria-current={activePath.startsWith(hrefToPath(item.href)) ? "page" : undefined}
                    className="mobile-nav__link"
                    href={item.href}
                    key={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </section>
        ))}
      </nav>
    </header>
  );
}
