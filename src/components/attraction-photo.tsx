import { useEffect, useState } from "react";
import {
  displayAttractionImage,
  type Attraction,
  type CommonsThumbWidth,
} from "@/data/attractions";
import { cn } from "@/lib/utils";

interface AttractionPhotoProps {
  attraction: Attraction;
  className?: string;
  width?: CommonsThumbWidth;
  loading?: "lazy" | "eager";
}

export function AttractionPhoto({
  attraction,
  className,
  width = 960,
  loading = "lazy",
}: AttractionPhotoProps) {
  const preferred = displayAttractionImage(attraction, width);
  const [src, setSrc] = useState(preferred);

  useEffect(() => {
    setSrc(preferred);
  }, [preferred]);

  return (
    <img
      src={src}
      alt={attraction.imageAlt}
      className={cn("h-full w-full object-cover", className)}
      loading={loading}
      onError={() => {
        if (src !== attraction.image) setSrc(attraction.image);
      }}
    />
  );
}
