import { useEffect, useMemo, useState } from "react";
import { PageShell } from "./components/layout/PageShell";
import { ArticleView } from "./components/sections/ArticleView";
import { HomeView } from "./components/sections/HomeView";
import { IndexView } from "./components/sections/IndexView";
import { InfoView } from "./components/sections/InfoView";
import { pageRoutes } from "./data/site";
import type { PageRoute } from "./types/content";

function getRoutePath() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash.startsWith("/") ? hash : "/";
}

function renderRoute(route: PageRoute) {
  switch (route.kind) {
    case "home":
      return <HomeView />;
    case "index":
      return <IndexView route={route} />;
    case "article":
      return <ArticleView route={route} />;
    case "info":
      return <InfoView />;
  }
}

export function App() {
  const [path, setPath] = useState(getRoutePath);
  const route = useMemo(() => pageRoutes.find((item) => item.path === path) ?? pageRoutes[0], [path]);

  useEffect(() => {
    const onHashChange = () => {
      setPath(getRoutePath());
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <PageShell activePath={route.path}>
      {renderRoute(route)}
    </PageShell>
  );
}
