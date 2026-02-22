# Contributing to urdu-number-words

Thank you for your interest in contributing!

## Development Setup

```bash
git clone https://github.com/faakhir-habib/urdu-number-words.git
cd urdu-number-words
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run build` | Build the package |
| `npm run typecheck` | Type-check without building |

## Urdu Word Accuracy

The 1–100 word lookup table in `src/constants.ts` is the most critical part.
If you believe a word is misspelled, please open an issue with a reference
(dictionary link, native speaker confirmation, etc.) before opening a PR.

## Pull Request Guidelines

1. Open an issue first to discuss your change
2. Write or update tests for any changed behavior
3. Ensure `npm test` and `npm run build` both pass
4. Keep PRs focused — one feature or fix per PR

## Reporting Bugs

Please include the exact input number and the incorrect output you received.
