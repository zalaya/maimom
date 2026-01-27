import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges multiple class values into a single string, removing duplicate classes.
 *
 * @param inputs - A list of class values (strings, arrays, or objects) to be merged.
 * @returns A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
