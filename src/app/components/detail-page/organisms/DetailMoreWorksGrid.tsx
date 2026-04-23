import { DetailRelatedWorkCard } from "../molecules/DetailRelatedWorkCard";

interface MoreWorkItem {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  imageAlt?: string;
}

interface DetailMoreWorksGridProps {
  items: MoreWorkItem[];
}

export function DetailMoreWorksGrid({ items }: DetailMoreWorksGridProps) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="More Work Container">
      {items.map((item) => (
        <DetailRelatedWorkCard
          description={item.description}
          href={item.href}
          imageAlt={item.imageAlt}
          imageSrc={item.imageSrc}
          key={`${item.title}-${item.description}`}
          title={item.title}
        />
      ))}
    </div>
  );
}
