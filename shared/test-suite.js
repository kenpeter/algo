/**
 * Shared test harness: runs every implementation against the problem's
 * examples, edge cases and a pre-computed randomised suite.
 */
const assert = require('node:assert');

/** Small deterministic PRNG so test runs are reproducible. */
function makeRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

function format(value) {
  return JSON.stringify(value);
}

/**
 * @param {object}   options
 * @param {object}   options.problem      problem metadata (examples, tests)
 * @param {Array}    options.variants     [{ id, name, fn }]
 * @param {Array}    options.randomCases  [{ args, expected }]
 * @param {number}   options.seed         seed used to generate randomCases
 * @returns {number} number of failed checks
 */
function runSuite({ problem, variants, randomCases, seed }) {
  const fixedCases = [
    ...problem.examples.map((example) => ({
      label: `example "${example.name}"`,
      args: example.args,
      expected: example.expected,
    })),
    ...problem.tests.map((test) => ({
      label: `case "${test.name}"`,
      args: test.args,
      expected: test.expected,
    })),
  ];
  const allCases = [...fixedCases, ...randomCases];

  let failedChecks = 0;

  console.log(`\n${problem.title} — ${variants.length} implementations, ${allCases.length} cases each (seed ${seed})\n`);

  for (const variant of variants) {
    let passed = 0;
    const failures = [];
    const started = Date.now();

    for (const testCase of allCases) {
      let actual;
      try {
        actual = variant.fn(...testCase.args);
        assert.deepStrictEqual(actual, testCase.expected);
        passed += 1;
      } catch {
        failures.push({ ...testCase, actual });
      }
    }

    const elapsed = Date.now() - started;
    const status = failures.length === 0 ? 'PASS' : 'FAIL';
    console.log(
      `  [${variant.id}] ${status}  ${variant.name} — ${passed}/${allCases.length} checks, ${elapsed} ms`
    );

    for (const failure of failures.slice(0, 5)) {
      console.error(`        ${failure.label}`);
      console.error(`        input:    ${format(failure.args)}`);
      console.error(`        expected: ${format(failure.expected)}`);
      console.error(`        actual:   ${format(failure.actual)}`);
    }
    if (failures.length > 5) {
      console.error(`        ... and ${failures.length - 5} more failure(s)`);
    }

    failedChecks += failures.length;
  }

  console.log(
    failedChecks === 0
      ? `\n  ALL PASS — all ${variants.length} implementations match every case\n`
      : `\n  FAILED — ${failedChecks} check(s) did not match\n`
  );

  return failedChecks;
}

module.exports = { makeRng, runSuite };
