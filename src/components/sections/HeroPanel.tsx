import type { HeroStatement } from "../../types/content";
import "./HeroPanel.css";

type HeroPanelProps = {
  statements: [HeroStatement, HeroStatement];
};

export function HeroPanel({ statements }: HeroPanelProps) {
  return (
    <section className="hero-panel" aria-labelledby="hero-title">
      <div className="hero-panel__copy hero-panel__copy--left">
        <Statement statement={statements[0]} headingId="hero-title" />
      </div>
      <HeroIcon />
      <div className="hero-panel__copy hero-panel__copy--right">
        <Statement statement={statements[1]} />
      </div>
      <img
        className="hero-panel__grass"
        src="/assets/figma/grass-hills.png"
        alt=""
        width="1128"
        height="270"
      />
    </section>
  );
}

type StatementProps = {
  statement: HeroStatement;
  headingId?: string;
};

function Statement({ statement, headingId }: StatementProps) {
  return (
    <>
      <p className="hero-panel__eyebrow">{statement.eyebrow}</p>
      <h1 className="hero-panel__headline" id={headingId}>
        {statement.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
    </>
  );
}

function HeroIcon() {
  return (
    <div className="hero-icon" aria-hidden="true">
      <img className="hero-icon__star hero-icon__star--outer" src="/assets/figma/star-outer.svg" alt="" />
      <img className="hero-icon__smile" src="/assets/figma/smile-mark.svg" alt="" />
      <img className="hero-icon__star hero-icon__star--inner" src="/assets/figma/star-inner.svg" alt="" />
    </div>
  );
}
