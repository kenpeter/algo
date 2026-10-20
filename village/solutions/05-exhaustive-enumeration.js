/**
 * Village — implementation 5
 * Fully exhaustive enumeration (reference implementation, tiny N only).
 *
 * Tries every planting vector in [0, limit]^N, checks all neighbourhoods at
 * the end, and keeps the smallest total. No pruning other than the trivial
 * "cheaper than the best so far" cut, so it is deliberately slow.
 *
 * Time O(L^N * N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n === 0) return 0;

  const limit = 2 * Math.max(...A.map(Math.abs)) + 2;
  const x = new Array(n).fill(0);
  let best = Infinity;

  const feasible = () => {
    for (let i = 0; i < n; i++) {
      let sum = A[i] + x[i];
      if (i > 0) sum += A[i - 1] + x[i - 1];
      if (i + 1 < n) sum += A[i + 1] + x[i + 1];
      if (sum < 0) return false;
    }
    return true;
  };

  const enumerate = (i, planted) => {
    if (planted >= best) return;
    if (i === n) {
      if (feasible()) best = planted;
      return;
    }
    for (let trees = 0; trees <= limit; trees++) {
      x[i] = trees;
      enumerate(i + 1, planted + trees);
    }
  };

  enumerate(0, 0);
  return best;
}

module.exports = solution;
