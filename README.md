<div align="center">

# urdu-number-words

### اردو نمبر الفاظ

Convert numbers to Urdu words with Pakistani currency (PKR) support.

Uses the South Asian numbering system — لاکھ، کروڑ، ارب

[![npm version](https://img.shields.io/npm/v/urdu-number-words.svg?style=flat-square)](https://www.npmjs.com/package/urdu-number-words)
[![npm downloads](https://img.shields.io/npm/dm/urdu-number-words.svg?style=flat-square)](https://www.npmjs.com/package/urdu-number-words)
[![license](https://img.shields.io/npm/l/urdu-number-words.svg?style=flat-square)](https://github.com/faakhir-habib/urdu-number-words/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/urdu-number-words?style=flat-square)](https://bundlephobia.com/package/urdu-number-words)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Publish to npm](https://github.com/faakhir-habib/urdu-number-words/actions/workflows/publish.yml/badge.svg)](https://github.com/faakhir-habib/urdu-number-words/actions/workflows/publish.yml)

[Installation](#installation) · [Usage](#usage) · [API](#api) · [Currency Mode](#currency-mode) · [Contributing](#contributing)

</div>

---

## Why This Package?

Pakistan's financial, legal, and business systems require numbers written in Urdu words — from cheque printing to government documents to invoices. Urdu has **unique words for every number from 1 to 100** (unlike English where you can combine "twenty" + "one"), and uses the South Asian numbering system (لاکھ، کروڑ، ارب) instead of millions and billions.

No npm package existed that handled this correctly — until now.

**Perfect for:**

- 🏦 Cheque printing systems
- 🧾 Invoices and receipts in Urdu
- 📄 Legal and government documents
- 🛒 E-commerce platforms serving Pakistani users
- 💰 Any financial application needing Urdu amount formatting

## Features

- ✅ Numbers to Urdu words (0 to کھربوں and beyond)
- ✅ South Asian numbering system (ہزار، لاکھ، کروڑ، ارب، کھرب)
- ✅ Pakistani Rupee (PKR) currency mode with "روپے صرف" suffix
- ✅ Western to Urdu digit conversion (123 → ۱۲۳)
- ✅ Ordinal numbers (پہلا، دوسرا، تیسرا)
- ✅ Negative and decimal number support
- ✅ TypeScript-first with full type definitions
- ✅ Zero dependencies
- ✅ Works in Node.js, browsers, Deno, and Bun

## Installation

```bash
npm install urdu-number-words
```

```bash
yarn add urdu-number-words
```

```bash
pnpm add urdu-number-words
```

## Usage

### Basic Conversion

```typescript
import { toUrduWords } from 'urdu-number-words';

toUrduWords(0);          // "صفر"
toUrduWords(25);         // "پچیس"
toUrduWords(100);        // "ایک سو"
toUrduWords(1500);       // "ایک ہزار پانچ سو"
toUrduWords(100000);     // "ایک لاکھ"
toUrduWords(4325718);    // "تینتالیس لاکھ پچیس ہزار سات سو اٹھارہ"
toUrduWords(10000000);   // "ایک کروڑ"
toUrduWords(1000000000); // "ایک ارب"
toUrduWords(-42);        // "منفی بیالیس"
```

### Currency Mode (PKR)

```typescript
import { toUrduWords } from 'urdu-number-words';

toUrduWords(5000, { currency: true });
// "پانچ ہزار روپے صرف"

toUrduWords(1500.75, { currency: true });
// "ایک ہزار پانچ سو روپے اور پچھتر پیسے صرف"

toUrduWords(250000, { currency: true });
// "ڈھائی لاکھ روپے صرف"
```

### Urdu Digits

```typescript
import { toUrduDigits } from 'urdu-number-words';

toUrduDigits(12345);    // "۱۲۳۴۵"
toUrduDigits(1500.75);  // "۱۵۰۰.۷۵"
toUrduDigits("03001234567"); // "۰۳۰۰۱۲۳۴۵۶۷"
```

### Ordinal Numbers

```typescript
import { toUrduOrdinal } from 'urdu-number-words';

toUrduOrdinal(1);  // "پہلا"
toUrduOrdinal(2);  // "دوسرا"
toUrduOrdinal(3);  // "تیسرا"
toUrduOrdinal(4);  // "چوتھا"
```

### CommonJS

```javascript
const { toUrduWords, toUrduDigits, toUrduOrdinal } = require('urdu-number-words');

toUrduWords(786); // "سات سو چھیاسی"
```

### Browser (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/urdu-number-words/dist/index.min.js"></script>
<script>
  console.log(UrduNumberWords.toUrduWords(786));
  // "سات سو چھیاسی"
</script>
```

## API

### `toUrduWords(num, options?)`

Converts a number to Urdu words.

| Parameter | Type | Description |
|-----------|------|-------------|
| `num` | `number \| string` | The number to convert. Use string for very large numbers. |
| `options` | `object` | Optional configuration (see below). |

**Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `currency` | `boolean` | `false` | Enable PKR currency mode. |
| `currencyName` | `string` | `"روپے"` | Currency unit name. |
| `fractionalName` | `string` | `"پیسے"` | Fractional unit name. |
| `appendOnly` | `boolean` | `false` | Append "صرف" at the end in currency mode. |

**Returns:** `string` — The Urdu words representation.

### `toUrduDigits(num)`

Converts Western digits (0-9) to Urdu digits (۰-۹).

| Parameter | Type | Description |
|-----------|------|-------------|
| `num` | `number \| string` | The number to convert. |

**Returns:** `string` — The number with Urdu digits.

### `toUrduOrdinal(num)`

Converts a number to its Urdu ordinal form.

| Parameter | Type | Description |
|-----------|------|-------------|
| `num` | `number` | The number to convert (1-100). |

**Returns:** `string` — The Urdu ordinal word.

## Numbering System

This package uses the **South Asian numbering system** used in Pakistan, India, Bangladesh, and Nepal:

<div align="center">

| Value | Urdu | Transliteration | Western Equivalent |
|------:|------|----------------|--------------------|
| 1 | ایک | ek | one |
| 10 | دس | das | ten |
| 100 | سو | sau | hundred |
| 1,000 | ہزار | hazaar | thousand |
| 1,00,000 | لاکھ | lakh | hundred thousand |
| 10,00,000 | دس لاکھ | das lakh | million |
| 1,00,00,000 | کروڑ | crore | ten million |
| 1,00,00,00,000 | ارب | arab | billion |
| 1,00,00,00,00,000 | کھرب | kharab | hundred billion |

</div>

## Real-World Examples

### Cheque Printing

```typescript
const amount = 250750.50;
const inWords = toUrduWords(amount, { currency: true });
// "دو لاکھ پچاس ہزار سات سو پچاس روپے اور پچاس پیسے صرف"

const inDigits = toUrduDigits(amount);
// "۲۵۰۷۵۰.۵۰"
```

### Invoice Line Item

```typescript
function formatUrduAmount(amount: number): string {
  return `${toUrduDigits(amount)} (${toUrduWords(amount, { currency: true })})`;
}

formatUrduAmount(15000);
// "۱۵۰۰۰ (پندرہ ہزار روپے صرف)"
```

### Custom Currency

```typescript
toUrduWords(1500, {
  currency: true,
  currencyName: "ڈالر",
  fractionalName: "سینٹ",
});
// "ایک ہزار پانچ سو ڈالر صرف"
```

## Edge Cases Handled

```typescript
toUrduWords(0);                    // "صفر"
toUrduWords(-1);                   // "منفی ایک"
toUrduWords(0.5, { currency: true }); // "صفر روپے اور پچاس پیسے صرف"
toUrduWords(1000000);              // "دس لاکھ"
toUrduWords("999999999999");       // Handles large numbers via string input
```

## TypeScript Support

Full TypeScript definitions are included out of the box:

```typescript
import { toUrduWords, toUrduDigits, toUrduOrdinal } from 'urdu-number-words';
import type { UrduNumberOptions } from 'urdu-number-words';

const options: UrduNumberOptions = {
  currency: true,
  appendOnly: true,
};

const result: string = toUrduWords(5000, options);
```

## Contributing

Contributions are welcome! Whether it's fixing an Urdu word, adding features, or improving docs.

```bash
# Clone the repo
git clone https://github.com/faakhir-habib/urdu-number-words.git
cd urdu-number-words

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

Please open an issue first to discuss what you'd like to change.

## Related Packages

- [`to-words`](https://www.npmjs.com/package/to-words) — Multi-locale number to words (no Urdu support)
- [`number-to-arabic-words`](https://www.npmjs.com/package/number-to-arabic-words) — Arabic number words (not Urdu)

## License

[MIT](LICENSE) © [Faakhir Habib](https://github.com/faakhir-habib)

---

<div align="center">

Made with ❤️ in Pakistan 🇵🇰

If this package helped you, please ⭐ the repo!

</div>
