import type { ReactNode } from "react";
import "./PageHeader.css";

type PageHeaderProps = {
  title: string;
  backHref?: string;
  children?: ReactNode;
};

export function PageHeader({ title, backHref, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__title-row">
        <div className="page-header__title-group">
          {backHref ? (
            <a className="page-header__back" href={backHref} aria-label="Back">
              <img src="/assets/figma/arrow-square-left.svg" alt="" width="24" height="24" />
            </a>
          ) : null}
          <h1 className="page-header__title">{title}</h1>
        </div>
        {children}
      </div>
      <div className="page-header__mark" aria-hidden="true">
        <img className="page-header__mark-star page-header__mark-star--outer" src="/assets/figma/star-outer.svg" alt="" />
        <img className="page-header__mark-smile" src="/assets/figma/smile-mark.svg" alt="" />
        <img className="page-header__mark-star page-header__mark-star--inner" src="/assets/figma/star-inner.svg" alt="" />
      </div>
    </header>
  );
}
