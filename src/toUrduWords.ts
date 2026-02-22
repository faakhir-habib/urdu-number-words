import { parseInput } from './utils.js';
import { convertToUrdu } from './converter.js';
import { formatCurrency } from './currency.js';
import type { UrduNumberOptions } from './types.js';

/**
 * Converts a number (or numeric string) to its Urdu word representation.
 *
 * @param input - The number to convert. Can be number or string.
 * @param options - Optional configuration.
 * @returns The Urdu word string.
 *
 * @example
 * toUrduWords(100)                   // "ایک سو"
 * toUrduWords(4325718)               // "تینتالیس لاکھ پچیس ہزار سات سو اٹھارہ"
 * toUrduWords(1500, { currency: true }) // "ایک ہزار پانچ سو روپے صرف"
 */
export function toUrduWords(
  input: number | string,
  options: UrduNumberOptions = {}
): string {
  const num = parseInput(input);

  if (options.currency) {
    return formatCurrency(num, options);
  }

  return convertToUrdu(num);
}
