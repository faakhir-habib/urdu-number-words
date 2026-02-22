import { describe, it, expect } from 'vitest';
import { toUrduOrdinal } from '../src/index.js';

describe('toUrduOrdinal', () => {
  it('converts first few ordinals correctly', () => {
    expect(toUrduOrdinal(1)).toBe('پہلا');
    expect(toUrduOrdinal(2)).toBe('دوسرا');
    expect(toUrduOrdinal(3)).toBe('تیسرا');
    expect(toUrduOrdinal(4)).toBe('چوتھا');
  });

  it('converts 5-10', () => {
    expect(toUrduOrdinal(5)).toBe('پانچواں');
    expect(toUrduOrdinal(6)).toBe('چھٹا');
    expect(toUrduOrdinal(10)).toBe('دسواں');
  });

  it('throws for 0', () => {
    expect(() => toUrduOrdinal(0)).toThrow();
  });

  it('throws for 101', () => {
    expect(() => toUrduOrdinal(101)).toThrow();
  });

  it('throws for negative numbers', () => {
    expect(() => toUrduOrdinal(-5)).toThrow();
  });

  it('throws for non-integer', () => {
    expect(() => toUrduOrdinal(1.5)).toThrow();
  });

  it('works for all numbers 1-100', () => {
    for (let i = 1; i <= 100; i++) {
      expect(() => toUrduOrdinal(i)).not.toThrow();
      expect(toUrduOrdinal(i)).toBeTruthy();
      expect(typeof toUrduOrdinal(i)).toBe('string');
    }
  });
});
