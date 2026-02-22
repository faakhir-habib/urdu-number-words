import { ONES, HUNDRED, SCALES, SPECIAL } from './constants.js';

/**
 * Converts an integer from 0–99 to its Urdu word.
 * Direct array lookup — O(1).
 */
function convertBelow100(n: number): string {
  return ONES[n] ?? SPECIAL.ZERO;
}

/**
 * Converts an integer from 0–999 to Urdu words.
 *
 * Examples:
 *   100 => "ایک سو"
 *   200 => "دو سو"
 *   999 => "نو سو ننانوے"
 *   42  => "بیالیس"
 */
function convertBelow1000(n: number): string {
  if (n < 100) {
    return convertBelow100(n);
  }

  const hundreds = Math.floor(n / 100);      // e.g., 9 for 999
  const remainder = n % 100;                  // e.g., 99 for 999

  // "نو سو" for 900, "نو سو ننانوے" for 999
  const hundredsWord = `${ONES[hundreds]} ${HUNDRED}`;
  return remainder > 0
    ? `${hundredsWord} ${convertBelow100(remainder)}`
    : hundredsWord;
}

/**
 * Core conversion function. Converts any non-negative integer to Urdu words.
 *
 * Algorithm (South Asian numbering system):
 * 1. Handle 0 directly.
 * 2. For each scale (kharab, arab, crore, lakh, hazaar) from largest to smallest:
 *    a. Extract the group value: groupVal = Math.floor(n / scale)
 *    b. If groupVal > 0: add convertBelow1000(groupVal) + " " + scaleWord
 *    c. Subtract the scaled portion: n = n % scale
 * 3. Handle remaining hundreds/tens/ones (0–999) with convertBelow1000.
 * 4. Join all parts with " ".
 */
function convertPositiveInteger(n: number): string {
  if (n === 0) return SPECIAL.ZERO;
  if (n < 100) return convertBelow100(n);
  if (n < 1000) return convertBelow1000(n);

  const parts: string[] = [];
  let remaining = n;

  for (const [divisor, scaleWord] of SCALES) {
    if (remaining >= divisor) {
      const groupVal = Math.floor(remaining / divisor);
      parts.push(`${convertBelow1000(groupVal)} ${scaleWord}`);
      remaining = remaining % divisor;
    }
  }

  // Handle the remaining hundreds/tens/ones
  if (remaining > 0) {
    parts.push(convertBelow1000(remaining));
  }

  return parts.join(' ');
}

/**
 * Public-facing conversion function.
 * Handles sign, delegates positive conversion to convertPositiveInteger.
 * Floors the input to handle decimals.
 */
export function convertToUrdu(num: number): string {
  const floored = Math.floor(Math.abs(num));

  if (floored === 0) return SPECIAL.ZERO;

  if (num < 0) {
    return `${SPECIAL.NEGATIVE} ${convertPositiveInteger(floored)}`;
  }

  return convertPositiveInteger(floored);
}
