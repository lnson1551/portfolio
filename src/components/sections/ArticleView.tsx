import type { ArticleRoute } from "../../types/content";
import { ArticleSwitcher } from "./ArticleSwitcher";
import { PageHeader } from "./PageHeader";
import "./ArticleView.css";

type ArticleViewProps = {
  route: ArticleRoute;
};

function getBackHref(path: string) {
  const parts = path.split("/").filter(Boolean);
  if (parts.length <= 1) return "#/";
  return `#/${parts.slice(0, -1).join("/")}`;
}

export function ArticleView({ route }: ArticleViewProps) {
  return (
    <main className="article-view">
      <PageHeader title={route.title} backHref={getBackHref(route.path)}>
        {route.switcherItems && route.currentItemTitle ? (
          <ArticleSwitcher currentHref={`#${route.path}`} currentTitle={route.currentItemTitle} items={route.switcherItems} />
        ) : null}
      </PageHeader>
      <article className="article-view__surface">
        <div className="article-view__content">
          {route.sections.map((section) => (
            <section className="article-section" key={section.title}>
              <h2 className="article-section__title">{section.title}</h2>
              <div className="article-section__body">
                {section.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <div className="article-section__items">
                    {section.items.map((item) => (
                      <div className="article-callout" key={`${section.title}-${item.title}`}>
                        <h3>{item.title}</h3>
                        {item.body ? <p>{item.body}</p> : null}
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.image ? (
                  <img className="article-section__image" src={section.image.src} alt={section.image.alt} />
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
