"use client";

import Image from "next/image";
import { useState } from "react";

interface BrasenaLogoProps {
  className?: string;
}

export function BrasenaLogo({ className }: BrasenaLogoProps) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-sage ${className ?? ""}`}
        aria-label="Brasena logo"
      >
        <span className="text-xs font-bold text-white">B</span>
      </div>
    );
  }

  return (
    <Image
      src="/brasena-logo.png"
      alt="Brasena"
      width={32}
      height={32}
      className={className}
      onError={() => setUseFallback(true)}
    />
  );
}