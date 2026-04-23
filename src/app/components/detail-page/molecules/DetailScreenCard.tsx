import { DetailImage } from "../atoms/DetailImage";
import { DetailCardText } from "./DetailCardText";

interface DetailScreenCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageNode?: React.ReactNode;
}

export function DetailScreenCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageNode,
}: DetailScreenCardProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="ScreenCard">
      {imageNode ?? <DetailImage alt={imageAlt} src={imageSrc!} />}
      <DetailCardText description={description} title={title} />
    </div>
  );
}
