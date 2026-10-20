const { makeRng, runSuite } = require('../shared/test-suite');
const problem = require('./problem');
const variants = require('./solutions');

// The bitmask brute force (05) is used as the independent oracle.
const oracle = require('./solutions/05-brute-force-states');

const SEED = 987654321;
const COUNT = problem.randomCheck.count;

const rng = makeRng(SEED);
const randomCases = [];
for (let i = 0; i < COUNT; i++) {
  const n = 1 + Math.floor(rng() * 6); // 1..6
  let position = -1;
  const X = Array.from({ length: n }, () => {
    position += 1 + Math.floor(rng() * 6); // strictly increasing
    return position;
  });
  const A = Array.from({ length: n }, () => Math.floor(rng() * 8)); // 0..7
  randomCases.push({
    label: `random #${i + 1}`,
    args: [A, X],
    expected: oracle(A, X),
  });
}

const failed = runSuite({ problem, variants, randomCases, seed: SEED });
if (failed > 0) process.exitCode = 1;
