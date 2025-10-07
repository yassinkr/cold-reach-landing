"use client";
import React, { useState } from "react";
import Image from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface ImageWithFallbackProps
  extends Omit<React.ComponentProps<typeof Image>, "src"> {
  src?: string;
}

export function ImageWithFallback({
  src,
  alt = "",
  width = 200,
  height = 200,
  style,
  className,
  ...rest
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => setDidError(true);

  // Parse only if strings, always output a number (Next.js Image requirement)
  const parsedWidth =
    typeof width === "string" ? parseInt(width, 10) || 200 : width;
  const parsedHeight =
    typeof height === "string" ? parseInt(height, 10) || 200 : height;

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src={ERROR_IMG_SRC}
            alt="Error loading image"
            width={56}
            height={56}
            data-original-url={src}
          />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={typeof src === "string" ? src : ERROR_IMG_SRC}
      alt={alt}
      className={className}
      style={style}
      width={parsedWidth}
      height={parsedHeight}
      onError={handleError}
      {...rest}
    />
  );
}
