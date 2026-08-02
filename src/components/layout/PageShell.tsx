import type { ReactNode } from "react";
import { Sidebar } from "../navigation/Sidebar";
import { MobileNav } from "../navigation/MobileNav";
import { navigationSections, socialLinks } from "../../data/site";
import "./PageShell.css";

type PageShellProps = {
  activePath: string;
  children: ReactNode;
};

export function PageShell({ activePath, children }: PageShellProps) {
  return (
    <div className="page-shell">
      <Sidebar activePath={activePath} sections={navigationSections} socialLinks={socialLinks} />
      <div className="page-shell__main">
        <MobileNav activePath={activePath} sections={navigationSections} />
        {children}
      </div>
    </div>
  );
}
