import { describe, it, expect } from 'vitest';
import { toUrduWords } from '../src/index.js';

describe('toUrduWords - basic conversion', () => {
  it('converts zero', () => {
    expect(toUrduWords(0)).toBe('صفر');
  });

  it('converts single digits', () => {
    expect(toUrduWords(1)).toBe('ایک');
    expect(toUrduWords(5)).toBe('پانچ');
    expect(toUrduWords(9)).toBe('نو');
  });

  it('converts teens (11-19)', () => {
    expect(toUrduWords(11)).toBe('گیارہ');
    expect(toUrduWords(15)).toBe('پندرہ');
    expect(toUrduWords(19)).toBe('انیس');
  });

  it('converts tens (10, 20, 30...90)', () => {
    expect(toUrduWords(10)).toBe('دس');
    expect(toUrduWords(20)).toBe('بیس');
    expect(toUrduWords(30)).toBe('تیس');
    expect(toUrduWords(90)).toBe('نوے');
  });

  it('converts compound numbers 21-99', () => {
    expect(toUrduWords(21)).toBe('اکیس');
    expect(toUrduWords(42)).toBe('بیالیس');
    expect(toUrduWords(75)).toBe('پچھتر');
    expect(toUrduWords(99)).toBe('ننانوے');
  });

  it('converts hundreds', () => {
    expect(toUrduWords(100)).toBe('ایک سو');
    expect(toUrduWords(200)).toBe('دو سو');
    expect(toUrduWords(500)).toBe('پانچ سو');
    expect(toUrduWords(999)).toBe('نو سو ننانوے');
  });

  it('converts thousands', () => {
    expect(toUrduWords(1000)).toBe('ایک ہزار');
    expect(toUrduWords(1500)).toBe('ایک ہزار پانچ سو');
    expect(toUrduWords(15250)).toBe('پندرہ ہزار دو سو پچاس');
  });

  it('converts lakhs (100,000)', () => {
    expect(toUrduWords(100000)).toBe('ایک لاکھ');
    expect(toUrduWords(1000000)).toBe('دس لاکھ');
    expect(toUrduWords(4325718)).toBe('تینتالیس لاکھ پچیس ہزار سات سو اٹھارہ');
  });

  it('converts crores (10,000,000)', () => {
    expect(toUrduWords(10000000)).toBe('ایک کروڑ');
    expect(toUrduWords(50000000)).toBe('پانچ کروڑ');
  });

  it('converts arab (1,000,000,000)', () => {
    expect(toUrduWords(1000000000)).toBe('ایک ارب');
  });

  it('converts kharab (100,000,000,000)', () => {
    expect(toUrduWords(100000000000)).toBe('ایک کھرب');
  });

  it('converts negative numbers', () => {
    expect(toUrduWords(-1)).toBe('منفی ایک');
    expect(toUrduWords(-42)).toBe('منفی بیالیس');
    expect(toUrduWords(-100)).toBe('منفی ایک سو');
  });

  it('handles README examples', () => {
    expect(toUrduWords(0)).toBe('صفر');
    expect(toUrduWords(25)).toBe('پچیس');
    expect(toUrduWords(100)).toBe('ایک سو');
    expect(toUrduWords(1500)).toBe('ایک ہزار پانچ سو');
    expect(toUrduWords(100000)).toBe('ایک لاکھ');
    expect(toUrduWords(10000000)).toBe('ایک کروڑ');
    expect(toUrduWords(1000000000)).toBe('ایک ارب');
  });
});
