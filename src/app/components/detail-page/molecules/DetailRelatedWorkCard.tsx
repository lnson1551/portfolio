import { Link } from "react-router";
import { DetailImage } from "../atoms/DetailImage";
import { DetailCardText } from "./DetailCardText";

interface DetailRelatedWorkCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
}

export function DetailRelatedWorkCard({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}: DetailRelatedWorkCardProps) {
  return (
    <Link className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0015b7] focus-visible:ring-offset-4" data-name="ScreenCard" to={href}>
      <DetailImage
        alt={imageAlt}
        dataName="Image (3. A Transparent Price Structure)"
        src={imageSrc}
      />
      <DetailCardText description={description} title={title} />
    </Link>
  );
}
