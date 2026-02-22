/**
 * Options for toUrduWords() function.
 */
export interface UrduNumberOptions {
  /**
   * Enable Pakistani Rupee (PKR) currency mode.
   * Appends "روپے صرف" or "روپے اور X پیسے صرف" to the result.
   * @default false
   */
  currency?: boolean;

  /**
   * The currency unit name used in currency mode.
   * @default "روپے"
   */
  currencyName?: string;

  /**
   * The fractional unit name used in currency mode for paisa.
   * @default "پیسے"
   */
  fractionalName?: string;

  /**
   * When true in currency mode, only appends "صرف" without the currency name.
   * Useful when the currency label is already printed elsewhere on the document.
   * @default false
   */
  appendOnly?: boolean;
}
