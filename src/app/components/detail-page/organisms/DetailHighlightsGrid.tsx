import { DetailScreenCard } from "../molecules/DetailScreenCard";

interface HighlightItem {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageNode?: React.ReactNode;
}

interface DetailHighlightsGridProps {
  items: HighlightItem[];
}

export function DetailHighlightsGrid({ items }: DetailHighlightsGridProps) {
  const rows = [items.slice(0, 2), items.slice(2, 4)].filter((row) => row.length > 0);

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {rows.map((row, rowIndex) => (
        <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Findings Container" key={rowIndex}>
          {row.map((item) => (
            <DetailScreenCard
              description={item.description}
              imageAlt={item.imageAlt}
              imageNode={item.imageNode}
              imageSrc={item.imageSrc}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
