interface DetailQuoteBlockProps {
  children: React.ReactNode;
}

export function DetailQuoteBlock({ children }: DetailQuoteBlockProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#1e1c1c] border-l-3 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[32px] relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#1e1c1c] text-[18px] w-full">{children}</p>
      </div>
    </div>
  );
}
