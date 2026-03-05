"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductImageCycle({
  imageUrls,
  className,
  fill = false,
  sizes,
  alt = "Product",
  priority,
}: {
  imageUrls: string[];
  className?: string;
  fill?: boolean;
  sizes?: string;
  alt?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const urls = imageUrls.length > 0 ? imageUrls : [];
  const currentUrl = urls[index] ?? urls[0];

  const goNext = useCallback(() => {
    if (urls.length <= 1) return;
    setIndex((i) => (i + 1) % urls.length);
  }, [urls.length]);

  if (!currentUrl) {
    return (
      <div
        className={cn("bg-muted flex items-center justify-center", className)}
        aria-hidden
      />
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onClick={urls.length > 1 ? goNext : undefined}
      role={urls.length > 1 ? "button" : undefined}
      aria-label={urls.length > 1 ? "Next image" : undefined}
    >
      <Image
        src={currentUrl}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {urls.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {urls.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index ? "bg-primary" : "bg-primary/30"
              )}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  );
}
