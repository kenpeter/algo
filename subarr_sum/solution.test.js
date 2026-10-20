const { makeRng, runSuite } = require('../shared/test-suite');
const problem = require('./problem');
const variants = require('./solutions');

// The O(N^2) implementation (05) is used as the independent oracle.
const oracle = require('./solutions/05-brute-force');

const SEED = 123456789;
const COUNT = problem.randomCheck.count;

const rng = makeRng(SEED);
const randomCases = [];
for (let i = 0; i < COUNT; i++) {
  const n = 1 + Math.floor(rng() * 9); // 1..9
  const A = Array.from({ length: n }, () => 1 + Math.floor(rng() * 5)); // 1..5
  randomCases.push({
    label: `random #${i + 1}`,
    args: [A],
    expected: oracle(A),
  });
}

const failed = runSuite({ problem, variants, randomCases, seed: SEED });
if (failed > 0) process.exitCode = 1;
