interface DetailStatCardProps {
  value: string;
  description: string;
}

export function DetailStatCard({ value, description }: DetailStatCardProps) {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f6f6f6] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start not-italic px-[32px] py-[16px] relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] relative shrink-0 text-[#fefcfc] text-[32px] whitespace-nowrap">{value}</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#d6d6d6] text-[16px] w-[min-content]">{description}</p>
      </div>
    </div>
  );
}
