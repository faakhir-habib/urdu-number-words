/**
 * Validates and parses the input to a finite number.
 *
 * Supports:
 *   - number primitives (including negative, decimal)
 *   - numeric strings ("1500", "-42", "3.14")
 *   - string representations of very large numbers
 *
 * Throws:
 *   - Error if input is NaN
 *   - Error if input is non-numeric string
 *   - Error if input is Infinity / -Infinity
 */
export function parseInput(input: number | string): number {
  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (trimmed === '') {
      throw new Error('Input cannot be an empty string');
    }
    const parsed = Number(trimmed);
    if (Number.isNaN(parsed)) {
      throw new TypeError(`Invalid input: "${input}" is not a valid number`);
    }
    if (!Number.isFinite(parsed)) {
      throw new TypeError(`Invalid input: "${input}" is not a finite number`);
    }
    return parsed;
  }

  if (typeof input === 'number') {
    if (Number.isNaN(input)) {
      throw new TypeError('Input cannot be NaN');
    }
    if (!Number.isFinite(input)) {
      throw new TypeError('Input cannot be Infinity or -Infinity');
    }
    return input;
  }

  throw new Error(`Invalid input type: expected number or string, got ${typeof input}`);
}

/**
 * Splits a number into its integer and decimal parts.
 * Rounds to 2 decimal places to avoid floating point drift.
 *
 * toUrduWords(1500.755) should not produce paisa beyond 2 decimals due to
 * floating point — we round to nearest paisa (cent).
 *
 * Returns: { intPart: number, decPart: number | null }
 * decPart is null when there is no fractional component.
 */
export function splitDecimal(num: number): { intPart: number; decPart: number | null } {
  // Round to 2 decimal places first
  const rounded = Math.round(num * 100) / 100;
  const intPart = Math.floor(Math.abs(rounded));
  const decimalStr = rounded.toFixed(2).split('.')[1];
  const decPart = decimalStr ? Number.parseInt(decimalStr, 10) : null;

  return {
    intPart,
    decPart: decPart === 0 ? null : decPart,
  };
}
