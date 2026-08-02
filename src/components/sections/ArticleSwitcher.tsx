import { useEffect, useRef, useState } from "react";
import type { ArticleSwitcherItem } from "../../types/content";
import "./ArticleSwitcher.css";

type ArticleSwitcherProps = {
  currentHref: string;
  currentTitle: string;
  items: ArticleSwitcherItem[];
};

export function ArticleSwitcher({ currentHref, currentTitle, items }: ArticleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (switcherRef.current?.contains(event.target as Node)) {
        return;
      }

      setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`article-switcher${isOpen ? " is-open" : ""}`} ref={switcherRef}>
      <button
        aria-expanded={isOpen}
        className="article-switcher__trigger"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{currentTitle}</span>
        <span className="article-switcher__chevron" aria-hidden="true" />
      </button>
      {isOpen ? (
        <div className="article-switcher__menu">
          {items.map((item) => {
            const isCurrent = item.href === currentHref;

            return (
              <a
                aria-current={isCurrent ? "page" : undefined}
                className="article-switcher__item"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
