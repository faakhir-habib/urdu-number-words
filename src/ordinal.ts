import { ORDINALS } from './constants.js';

/**
 * Converts a number (1–100) to its Urdu ordinal form.
 *
 * Examples:
 *   toUrduOrdinal(1)  => "پہلا"
 *   toUrduOrdinal(2)  => "دوسرا"
 *   toUrduOrdinal(3)  => "تیسرا"
 *
 * Throws if num is outside the range 1–100.
 */
export function toUrduOrdinal(num: number): string {
  if (!Number.isInteger(num) || num < 1 || num > 100) {
    throw new Error(`toUrduOrdinal supports integers 1–100, got: ${num}`);
  }
  const word = ORDINALS[num];
  if (!word) {
    throw new Error(`No ordinal defined for: ${num}`);
  }
  return word;
}
