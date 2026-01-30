import { type ClassValue, clsx } from 'clsx'

/**
 * Concatenates and conditionally merges class name values into a single string.
 *
 * Wraps `clsx` to conveniently handle strings, arrays, objects, and other
 * supported class value types.
 *
 * @param inputs - One or more class name values to be merged.
 * @returns A space-delimited string containing all truthy class names.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
