import { describe, it, expect } from 'vitest';
import { toUrduWords } from '../src/index.js';

describe('toUrduWords - currency mode', () => {
  it('appends روپے صرف for whole amounts', () => {
    expect(toUrduWords(1500, { currency: true })).toBe('ایک ہزار پانچ سو روپے صرف');
  });

  it('appends پیسے for decimal amounts', () => {
    expect(toUrduWords(1500.75, { currency: true })).toBe(
      'ایک ہزار پانچ سو روپے اور پچھتر پیسے صرف'
    );
  });

  it('handles zero rupees with paisa', () => {
    expect(toUrduWords(0.5, { currency: true })).toBe('صفر روپے اور پچاس پیسے صرف');
  });

  it('handles zero paisa (no paisa line)', () => {
    expect(toUrduWords(500.0, { currency: true })).toBe('پانچ سو روپے صرف');
  });

  it('supports custom currency name', () => {
    expect(toUrduWords(1500, { currency: true, currencyName: 'ڈالر' })).toBe(
      'ایک ہزار پانچ سو ڈالر صرف'
    );
  });

  it('supports custom fractional name', () => {
    expect(toUrduWords(1.25, { currency: true, fractionalName: 'سینٹ' })).toBe(
      'ایک روپے اور پچیس سینٹ صرف'
    );
  });

  it('supports both custom currency and fractional names', () => {
    expect(
      toUrduWords(100.5, {
        currency: true,
        currencyName: 'ڈالر',
        fractionalName: 'سینٹ',
      })
    ).toBe('ایک سو ڈالر اور پچاس سینٹ صرف');
  });

  it('handles large currency amounts', () => {
    expect(toUrduWords(250000, { currency: true })).toBe(
      'دو لاکھ پچاس ہزار روپے صرف'
    );
  });

  it('handles README examples', () => {
    expect(toUrduWords(5000, { currency: true })).toBe('پانچ ہزار روپے صرف');
    expect(toUrduWords(1500.75, { currency: true })).toBe(
      'ایک ہزار پانچ سو روپے اور پچھتر پیسے صرف'
    );
  });
});
