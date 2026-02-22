import { describe, it, expect } from 'vitest';
import { toUrduWords } from '../src/index.js';

describe('Edge cases', () => {
  describe('Input validation', () => {
    it('throws for NaN', () => {
      expect(() => toUrduWords(NaN)).toThrow('NaN');
    });

    it('throws for Infinity', () => {
      expect(() => toUrduWords(Infinity)).toThrow();
    });

    it('throws for -Infinity', () => {
      expect(() => toUrduWords(-Infinity)).toThrow();
    });

    it('throws for non-numeric string', () => {
      expect(() => toUrduWords('hello')).toThrow();
    });

    it('throws for empty string', () => {
      expect(() => toUrduWords('')).toThrow();
    });
  });

  describe('String input', () => {
    it('accepts numeric string', () => {
      expect(toUrduWords('100')).toBe('ایک سو');
    });

    it('accepts negative numeric string', () => {
      expect(toUrduWords('-42')).toBe('منفی بیالیس');
    });

    it('accepts decimal numeric string (returns floor for non-currency)', () => {
      // In non-currency mode, decimals are ignored (floor is used)
      expect(toUrduWords('15.5')).toBe('پندرہ');
      expect(toUrduWords('15.9')).toBe('پندرہ');
    });

    it('handles string with whitespace', () => {
      expect(toUrduWords('  100  ')).toBe('ایک سو');
    });

    it('handles large number string input', () => {
      expect(toUrduWords('1000000000')).toBe('ایک ارب');
    });
  });

  describe('Floating point handling', () => {
    it('handles floating point drift (0.1 + 0.2)', () => {
      // 0.1 + 0.2 = 0.30000000000000004
      expect(toUrduWords(0.1 + 0.2, { currency: true })).toBe(
        'صفر روپے اور تیس پیسے صرف'
      );
    });

    it('rounds to nearest paisa', () => {
      // 1500.755 * 100 = 150075.5, Math.round gives 150076 (75 + 1)
      // So it becomes 1500.76 = 76 paisa
      expect(toUrduWords(1500.755, { currency: true })).toBe(
        'ایک ہزار پانچ سو روپے اور چھہتر پیسے صرف'
      );
    });

    it('handles 0.01 (1 paisa)', () => {
      expect(toUrduWords(0.01, { currency: true })).toBe('صفر روپے اور ایک پیسے صرف');
    });
  });

  describe('Scale conversions', () => {
    it('converts kharab correctly', () => {
      expect(toUrduWords(100000000000)).toBe('ایک کھرب');
      expect(toUrduWords(999999999999)).toContain('کھرب');
    });

    it('converts complex large numbers', () => {
      // 1 kharab + 1 arab + 1 crore + 1 lakh + 1 hazaar + 1 sau + 1
      const result = toUrduWords(100010000000 + 1000000000 + 10000000 + 100000 + 1000 + 100 + 1);
      expect(result).toContain('کھرب');
      expect(result).toContain('ارب');
      expect(result).toContain('کروڑ');
      expect(result).toContain('لاکھ');
      expect(result).toContain('ہزار');
      expect(result).toContain('سو');
    });
  });

  describe('Special numbers', () => {
    it('converts 786 correctly', () => {
      expect(toUrduWords(786)).toBe('سات سو چھیاسی');
    });

    it('converts 1111 correctly', () => {
      expect(toUrduWords(1111)).toBe('ایک ہزار ایک سو گیارہ');
    });

    it('converts 5000 correctly', () => {
      expect(toUrduWords(5000)).toBe('پانچ ہزار');
    });
  });

  describe('Negative currency mode', () => {
    it('handles negative currency', () => {
      const result = toUrduWords(-1500, { currency: true });
      expect(result).toContain('منفی');
      expect(result).toContain('روپے');
      expect(result).toContain('صرف');
    });

    it('handles negative currency with decimal', () => {
      const result = toUrduWords(-1500.75, { currency: true });
      expect(result).toContain('منفی');
      expect(result).toContain('روپے');
      expect(result).toContain('پیسے');
      expect(result).toContain('صرف');
    });
  });

  describe('AppendOnly mode', () => {
    it('skips currency name when appendOnly is true', () => {
      const result = toUrduWords(1500, { currency: true, appendOnly: true });
      expect(result).toBe('ایک ہزار پانچ سو صرف');
      // appendOnly mode should only add صرف without روپے
      expect(result).not.toContain('روپے');
      expect(result).toContain('صرف');
    });
  });
});
