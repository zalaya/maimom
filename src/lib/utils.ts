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

/**
 * Generates a unique key string.
 * @returns A unique string key.
 */
export function uniqueKey() {
  const time = Date.now().toString(36)
  const randomNumber = Math.random().toString(36).slice(2, 8)

  return `${time}${randomNumber}`
}
