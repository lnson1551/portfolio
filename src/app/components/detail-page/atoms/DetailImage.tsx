interface DetailImageProps {
  src: string;
  alt?: string;
  aspectClassName?: string;
  dataName?: string;
}

export function DetailImage({
  src,
  alt = "",
  aspectClassName = "aspect-[612/400]",
  dataName = "Image (Only one pointer on the time scrubber)",
}: DetailImageProps) {
  return (
    <div className={`${aspectClassName} relative shrink-0 w-full`} data-name={dataName}>
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={src} />
    </div>
  );
}
