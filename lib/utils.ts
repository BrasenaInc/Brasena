import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function categoryBadgeClass(category: string): string {
  const map: Record<string, string> = {
    beef: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    chicken: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    pork: "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  };
  return map[category] ?? "bg-muted text-muted-foreground";
}
