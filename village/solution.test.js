const { makeRng, runSuite } = require('../shared/test-suite');
const problem = require('./problem');
const variants = require('./solutions');

// The fully exhaustive implementation (05) is used as the independent oracle.
const oracle = require('./solutions/05-exhaustive-enumeration');

const SEED = 20261020;
const COUNT = problem.randomCheck.count;

const rng = makeRng(SEED);
const randomCases = [];
for (let i = 0; i < COUNT; i++) {
  const n = 1 + Math.floor(rng() * 5); // 1..5
  const A = Array.from({ length: n }, () => Math.floor(rng() * 5) - 2); // -2..2
  randomCases.push({
    label: `random #${i + 1}`,
    args: [A],
    expected: oracle(A),
  });
}

const failed = runSuite({ problem, variants, randomCases, seed: SEED });
if (failed > 0) process.exitCode = 1;
