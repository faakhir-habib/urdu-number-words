import { describe, it, expect } from 'vitest';
import { toUrduDigits } from '../src/index.js';

describe('toUrduDigits', () => {
  it('converts integer to Urdu digits', () => {
    expect(toUrduDigits(12345)).toBe('۱۲۳۴۵');
  });

  it('converts decimal number to Urdu digits', () => {
    expect(toUrduDigits(1500.75)).toBe('۱۵۰۰.۷۵');
  });

  it('converts string with leading zeros', () => {
    expect(toUrduDigits('03001234567')).toBe('۰۳۰۰۱۲۳۴۵۶۷');
  });

  it('converts zero', () => {
    expect(toUrduDigits(0)).toBe('۰');
  });

  it('passes through non-digit characters', () => {
    expect(toUrduDigits('-42')).toBe('-۴۲');
  });

  it('handles phone numbers as string', () => {
    expect(toUrduDigits('300-1234567')).toBe('۳۰۰-۱۲۳۴۵۶۷');
  });

  it('handles README examples', () => {
    expect(toUrduDigits(12345)).toBe('۱۲۳۴۵');
    expect(toUrduDigits(1500.75)).toBe('۱۵۰۰.۷۵');
    expect(toUrduDigits('03001234567')).toBe('۰۳۰۰۱۲۳۴۵۶۷');
  });
});
