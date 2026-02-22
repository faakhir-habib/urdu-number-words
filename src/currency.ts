import { convertToUrdu } from './converter.js';
import type { UrduNumberOptions } from './types.js';
import { SPECIAL } from './constants.js';
import { splitDecimal } from './utils.js';

/**
 * Formats a number as Pakistani Rupees in Urdu words.
 *
 * Standard format: "ایک ہزار پانچ سو روپے صرف"
 * With paisa:      "ایک ہزار پانچ سو روپے اور پچھتر پیسے صرف"
 * Zero rupees:     "صفر روپے اور پچاس پیسے صرف"
 * appendOnly:      only appends "صرف" to whatever is already built
 */
export function formatCurrency(
  num: number,
  options: UrduNumberOptions = {}
): string {
  const {
    currencyName = SPECIAL.RUPEES,
    fractionalName = SPECIAL.PAISA,
    appendOnly = false,
  } = options;

  const isNegative = num < 0;
  const absNum = Math.abs(num);
  const { intPart, decPart } = splitDecimal(absNum);

  // Convert integer part
  const rupeeWords = convertToUrdu(intPart);
  let result: string;

  if (appendOnly) {
    // appendOnly: just add صرف at the end, no currency labels
    result = `${rupeeWords} ${SPECIAL.ONLY}`;
  } else {
    // Build "X روپے"
    result = `${rupeeWords} ${currencyName}`;

    // Add paisa if present: "اور Y پیسے"
    if (decPart !== null && decPart > 0) {
      const paisaWords = convertToUrdu(decPart);
      result += ` ${SPECIAL.AND} ${paisaWords} ${fractionalName}`;
    }

    // Always append "صرف" in currency mode
    result += ` ${SPECIAL.ONLY}`;
  }

  // Prepend "منفی" for negative amounts
  if (isNegative) {
    result = `${SPECIAL.NEGATIVE} ${result}`;
  }

  return result;
}
