import { useEffect, useState } from "react";
import {
  displayAttractionImage,
  hasAttractionPhoto,
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

  if (!hasAttractionPhoto(attraction) || !src) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-end bg-bg-subtle px-4 py-3",
          className,
        )}
        aria-hidden
      >
        <span className="text-xs font-medium text-fg-subtle">
          {attraction.category}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={attraction.imageAlt ?? attraction.name}
      className={cn("h-full w-full object-cover", className)}
      loading={loading}
      onError={() => {
        if (attraction.image && src !== attraction.image) {
          setSrc(attraction.image);
        }
      }}
    />
  );
}
