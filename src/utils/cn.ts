import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * פונקציית עזר לשילוב מחלקות טיילווינד בצורה חכמה
 * משלבת בין clsx לבין tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 