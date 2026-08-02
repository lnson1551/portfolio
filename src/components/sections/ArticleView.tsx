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
  function renderSectionContent(section: ArticleRoute["sections"][number]) {
    if (section.blocks) {
      return section.blocks.map((block, index) => {
        const key = `${section.title}-${block.type}-${index}`;

        if (block.type === "image") {
          return (
            <figure className="article-section__figure" key={key}>
              <img className="article-section__image" src={block.src} alt={block.alt} />
            </figure>
          );
        }

        if (block.type === "heading") {
          return (
            <h3 className="article-section__subheading" key={key}>
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul className="article-section__list" key={key}>
              {block.items.map((item) => (
                <li key={`${key}-${item}`}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ordered-list") {
          return (
            <ol className="article-section__list article-section__list--ordered" key={key}>
              {block.items.map((item) => (
                <li key={`${key}-${item}`}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.segments) {
          return (
            <p key={key}>
              {block.segments.map((segment, segmentIndex) =>
                segment.emphasized ? (
                  <strong key={`${key}-${segmentIndex}`}>{segment.text}</strong>
                ) : (
                  <span key={`${key}-${segmentIndex}`}>{segment.text}</span>
                ),
              )}
            </p>
          );
        }

        return <p key={key}>{block.text}</p>;
      });
    }

    return (
      <>
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
          <figure className="article-section__figure">
            <img className="article-section__image" src={section.image.src} alt={section.image.alt} />
          </figure>
        ) : null}
      </>
    );
  }

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
              <div className="article-section__body">{renderSectionContent(section)}</div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
