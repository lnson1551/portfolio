import type { NavigationSection } from "../../types/content";
import { BrandMark } from "../content/BrandMark";
import "./Sidebar.css";

type SidebarProps = {
  activePath: string;
  sections: NavigationSection[];
  socialLinks: Array<{ label: string; href: string }>;
};

function hrefToPath(href: string) {
  return href.replace(/^#/, "");
}

export function Sidebar({ activePath, sections, socialLinks }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <header className="sidebar__masthead">
        <BrandMark />
        <div className="sidebar__socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a className="sidebar__social-link" href={link.href} key={link.label} title={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </header>
      <nav className="sidebar__sections">
        {sections.map((section) => (
          <section className="sidebar-section" key={section.title}>
            <h2 className="sidebar-section__title">{section.title}</h2>
            <ul className="sidebar-section__list">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    aria-current={activePath.startsWith(hrefToPath(item.href)) ? "page" : undefined}
                    className="sidebar-section__link"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
