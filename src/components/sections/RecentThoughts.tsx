import type { ThoughtCard } from "../../types/content";
import { ArticleCard } from "../content/ArticleCard";
import "./RecentThoughts.css";

type RecentThoughtsProps = {
  thoughts: ThoughtCard[];
};

export function RecentThoughts({ thoughts }: RecentThoughtsProps) {
  return (
    <section className="recent-thoughts" aria-labelledby="recent-thoughts-title">
      <h2 className="recent-thoughts__title" id="recent-thoughts-title">
        <span>Recent</span>
        <span>thoughts</span>
      </h2>
      <div className="recent-thoughts__grid">
        {thoughts.map((thought) => (
          <ArticleCard key={thought.href} thought={thought} />
        ))}
      </div>
    </section>
  );
}
