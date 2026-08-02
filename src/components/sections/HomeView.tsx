import { heroStatements, recentThoughts } from "../../data/site";
import { HeroPanel } from "./HeroPanel";
import { RecentThoughts } from "./RecentThoughts";
import "./HomeView.css";

export function HomeView() {
  return (
    <main className="home-view">
      <HeroPanel statements={heroStatements} />
      <RecentThoughts thoughts={recentThoughts} />
    </main>
  );
}
