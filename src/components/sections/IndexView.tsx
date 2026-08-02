import type { PageRoute } from "../../types/content";
import { ArticleCard } from "../content/ArticleCard";
import { PageHeader } from "./PageHeader";
import "./IndexView.css";

type IndexRoute = Extract<PageRoute, { kind: "index" }>;

type IndexViewProps = {
  route: IndexRoute;
};

export function IndexView({ route }: IndexViewProps) {
  const isProjectList = route.layout === "project-list";
  const isGrouped = route.layout === "grouped";
  const groupedCards = route.cards.reduce<Array<{ title: string; cards: typeof route.cards }>>((groups, card) => {
    const groupTitle = card.topic ?? "Overview";
    const group = groups.find((item) => item.title === groupTitle);

    if (group) {
      group.cards.push(card);
      return groups;
    }

    return [...groups, { title: groupTitle, cards: [card] }];
  }, []);

  return (
    <main className="catalog-view">
      <PageHeader title={route.title} />
      <section className="catalog-view__surface" aria-label={route.title}>
        <div className={isProjectList ? "catalog-view__project-list" : isGrouped ? "catalog-view__grouped" : "catalog-view__grid"}>
          {isGrouped ? (
            groupedCards.map((group) => (
              <section className="catalog-topic" key={`${route.path}-${group.title}`} aria-labelledby={`topic-${group.title}`}>
                <h2 className="catalog-topic__title" id={`topic-${group.title}`}>
                  {group.title}
                </h2>
                <div className="catalog-topic__grid">
                  {group.cards.map((card, index) => (
                    <ArticleCard
                      key={`${route.path}-${card.href}-${card.title}-${index}`}
                      thought={{ title: card.title, href: card.href, tone: card.tone ?? "mist" }}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            route.cards.map((card, index) => (
            isProjectList ? (
              <a className="project-list-card" href={card.href} key={`${route.path}-${card.href}-${card.title}-${index}`}>
                <span className="project-list-card__copy">
                  <span className="project-list-card__title">{card.title}</span>
                  {card.description ? <span className="project-list-card__description">{card.description}</span> : null}
                </span>
                <span className="project-list-card__media" data-tone={card.tone ?? "mist"} aria-hidden="true" />
              </a>
            ) : (
              <ArticleCard
                key={`${route.path}-${card.href}-${card.title}-${index}`}
                thought={{ title: card.title, href: card.href, tone: card.tone ?? "mist" }}
                description={card.description}
              />
            )
            ))
          )}
        </div>
      </section>
    </main>
  );
}
