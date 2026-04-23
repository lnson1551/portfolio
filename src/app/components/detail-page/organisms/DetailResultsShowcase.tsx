import { DetailImage } from "../atoms/DetailImage";
import { DetailStatCard } from "../molecules/DetailStatCard";

interface ResultItem {
  value: string;
  description: string;
}

interface DetailResultsShowcaseProps {
  items: ResultItem[];
  previewSrc: string;
  previewAlt?: string;
}

function DetailPreviewFrame({ previewAlt, previewSrc }: { previewSrc: string; previewAlt?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px pb-[2px] relative">
      <div className="content-stretch flex items-center justify-between mb-[-2px] relative shrink-0 w-full">
        <div className="bg-[#d6d6d6] shrink-0 size-[8px]" />
        <div className="bg-[#d6d6d6] shrink-0 size-[8px]" />
      </div>
      <div className="mb-[-2px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[7px] relative size-full">
          <div className="relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#f6f6f6] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
              <DetailImage
                alt={previewAlt}
                aspectClassName="aspect-video"
                dataName="Image (Figma design preview)"
                src={previewSrc}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[-2px] relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="content-stretch flex items-center justify-between relative w-full">
            <div className="bg-[#d6d6d6] shrink-0 size-[8px]" />
            <div className="bg-[#d6d6d6] shrink-0 size-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DetailResultsShowcase({
  items,
  previewSrc,
  previewAlt,
}: DetailResultsShowcaseProps) {
  return (
    <div className="content-center flex flex-wrap gap-[40px] items-center relative shrink-0 w-full" data-name="Impact Container">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center max-w-[400px] min-w-px pb-px relative" data-name="Container">
        {items.map((item) => (
          <DetailStatCard description={item.description} key={`${item.value}-${item.description}`} value={item.value} />
        ))}
      </div>
      <DetailPreviewFrame previewAlt={previewAlt} previewSrc={previewSrc} />
    </div>
  );
}
