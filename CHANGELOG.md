# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/en/spec/v2.0.0.html).

## [1.0.0] - 2026-02-23

### Added
- Initial release of urdu-number-words
- Convert numbers to Urdu words (0 to کھربوں and beyond)
- South Asian numbering system support (ہزار، لاکھ، کروڑ، ارب، کھرب)
- Pakistani Rupee (PKR) currency mode with "روپے صرف" suffix
- Western to Urdu digit conversion (123 → ۱۲۳)
- Ordinal numbers (پہلا، دوسرا، تیسرا)
- Negative and decimal number support
- Full TypeScript support with type definitions
- Zero dependencies
- ESM, CommonJS, and browser IIFE bundles
- Comprehensive test suite (57 tests)
- Complete documentation with real-world examples

### Features
- `toUrduWords()` - Convert numbers to Urdu words
- `toUrduDigits()` - Convert Western digits to Urdu digits
- `toUrduOrdinal()` - Convert numbers to Urdu ordinals
- Custom currency support with `currencyName` and `fractionalName` options
- `appendOnly` option for custom currency labels
