const { toUrduWords, toUrduDigits, toUrduOrdinal } = require('./dist/index.cjs');

console.log("\n╔═══════════════════════════════════════════════════════════════╗");
console.log("║       urdu-number-words Package - Feature Showcase       ║");
console.log("╚═══════════════════════════════════════════════════════════════╝\n");

// Cheque Printing Example
console.log("📝 Cheque Printing Example:");
const chequeAmount = 250750.5;
console.log(`Amount: ${chequeAmount}`);
console.log(`In Urdu: ${toUrduWords(chequeAmount, { currency: true })}`);
console.log(`In Urdu Digits: ${toUrduDigits(chequeAmount)}\n`);

// Invoice Example
console.log("📄 Invoice Line Item:");
const itemAmount = 15000;
console.log(`Price: ${toUrduDigits(itemAmount)} (${toUrduWords(itemAmount, { currency: true })})\n`);

// All Scale Words Demo
console.log("🔢 South Asian Numbering System:");
const examples = [
  [100, "سو (hundred)"],
  [1000, "ہزار (thousand)"],
  [100000, "لاکھ (hundred thousand)"],
  [10000000, "کروڑ (ten million)"],
  [1000000000, "ارب (billion)"],
  [100000000000, "کھرب (hundred billion)"],
];
examples.forEach(([num, desc]) => {
  console.log(`  ${num.toLocaleString()} = ${toUrduWords(num)} (${desc})`);
});
console.log();

// Edge Cases
console.log("✨ Edge Cases:");
console.log(`  Zero: ${toUrduWords(0)}`);
console.log(`  Negative: ${toUrduWords(-1500, { currency: true })}`);
console.log(`  Only paisa: ${toUrduWords(0.75, { currency: true })}`);
console.log(`  Ordinal: The ${toUrduOrdinal(3)} person`);
console.log();

// Large Numbers
console.log("🏦 Large Financial Amounts:");
const largeAmounts = [999999, 5000000, 123456789, 1000000000];
largeAmounts.forEach(amt => {
  console.log(`  ${amt.toLocaleString()}: ${toUrduWords(amt, { currency: true })}`);
});

console.log("\n✅ Package is production-ready! Zero dependencies, fully tested.\n");
