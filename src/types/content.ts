export type NavigationSection = {
  title: string;
  items: Array<{
    label: string;
    href: string;
    comingSoon?: boolean;
  }>;
};

export type ThoughtCard = {
  title: string;
  href: string;
  tone: "mist" | "sage" | "cloud";
  coverSrc?: string;
  description?: string;
};

export type HeroStatement = {
  eyebrow: string;
  lines: string[];
};

export type CardTone = "mist" | "sage" | "cloud";

export type IndexCard = {
  title: string;
  href: string;
  tone?: CardTone;
  coverSrc?: string;
  description?: string;
  topic?: string;
};

export type DetailSection = {
  title: string;
  blocks?: Array<
    | {
        type: "paragraph";
        text: string;
        segments?: Array<{
          text: string;
          emphasized?: boolean;
        }>;
      }
    | {
        type: "heading";
        text: string;
      }
    | {
        type: "list";
        items: string[];
      }
    | {
        type: "ordered-list";
        items: string[];
      }
    | {
        type: "image";
        src: string;
        alt: string;
        width?: string;
      }
  >;
  body?: string[];
  items?: Array<{
    title: string;
    body?: string;
  }>;
  image?: {
    src: string;
    alt: string;
    width?: string;
  };
};

export type ArticleSwitcherItem = {
  title: string;
  href: string;
};

export type ArticleRoute = {
  kind: "article";
  path: string;
  title: string;
  sections: DetailSection[];
  switcherItems?: ArticleSwitcherItem[];
  currentItemTitle?: string;
};

export type PageRoute =
  | { kind: "home"; path: string; title: string }
  | { kind: "index"; path: string; title: string; cards: IndexCard[]; layout?: "grid" | "grouped" | "project-list" }
  | ArticleRoute
  | { kind: "info"; path: string; title: string };
