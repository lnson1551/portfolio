import "./BrandMark.css";

export function BrandMark() {
  return (
    <a className="brand-mark" href="/" aria-label="Seamesomday home">
      <span className="brand-mark__vector" aria-hidden="true">
        <img className="brand-mark__part brand-mark__part--left" src="/assets/figma/logo-word-left.svg" alt="" />
        <img className="brand-mark__part brand-mark__part--mark" src="/assets/figma/logo-mark.svg" alt="" />
        <img className="brand-mark__part brand-mark__part--right" src="/assets/figma/logo-word-right.svg" alt="" />
      </span>
    </a>
  );
}
