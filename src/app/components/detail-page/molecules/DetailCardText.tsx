interface DetailCardTextProps {
  title: string;
  description: string;
}

export function DetailCardText({ title, description }: DetailCardTextProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#1e1c1c] text-[20px] w-full">{title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#626060] text-[16px] w-full">{description}</p>
    </div>
  );
}
