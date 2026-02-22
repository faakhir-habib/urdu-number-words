import { DIGIT_MAP } from './constants.js';

/**
 * Converts Western digits (0-9) in a number or string to Urdu digits (۰-۹).
 * Non-digit characters (decimal points, hyphens) are passed through unchanged.
 *
 * Examples:
 *   toUrduDigits(12345)       => "۱۲۳۴۵"
 *   toUrduDigits(1500.75)     => "۱۵۰۰.۷۵"
 *   toUrduDigits("03001234567") => "۰۳۰۰۱۲۳۴۵۶۷"
 */
export function toUrduDigits(input: number | string): string {
  const str = String(input);
  return str
    .split('')
    .map((ch) => DIGIT_MAP[ch] ?? ch)
    .join('');
}
