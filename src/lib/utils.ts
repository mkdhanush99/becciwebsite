import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/** shadcn/ui class helper: joins class names and resolves conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
