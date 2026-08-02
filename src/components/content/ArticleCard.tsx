import type { ThoughtCard } from "../../types/content";
import "./ArticleCard.css";

type ArticleCardProps = {
  description?: string;
  thought: ThoughtCard;
};

export function ArticleCard({ description, thought }: ArticleCardProps) {
  const cardDescription = description ?? thought.description;

  return (
    <a className="article-card" data-has-cover={thought.coverSrc ? "true" : "false"} data-tone={thought.tone} href={thought.href}>
      <span className="article-card__media" aria-hidden="true">
        {thought.coverSrc ? <img className="article-card__cover" src={thought.coverSrc} alt="" /> : null}
      </span>
      <span className="article-card__content">
        <span className="article-card__title">{thought.title}</span>
        {cardDescription ? <span className="article-card__description">{cardDescription}</span> : null}
      </span>
    </a>
  );
}
