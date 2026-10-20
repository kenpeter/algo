/**
 * Village — implementation 4
 * Exact branch-and-bound search (reference implementation, small N only).
 *
 * Fills the planting vector left to right. As soon as x[i] is chosen,
 * neighbourhood i-1 is fully determined, so an infeasible branch is pruned
 * immediately. Planting more than a neighbourhood's deficit is allowed but
 * bounded, so the search remains exhaustive.
 *
 * Time exponential (O(L^N) worst case) | Space O(N)
 * L = 2 * max|A| + 2 is always a safe per-field upper bound for small inputs.
 */
function solution(A) {
  const n = A.length;
  if (n === 0) return 0;

  const limit = 2 * Math.max(...A.map(Math.abs)) + 2;
  const x = new Array(n).fill(0);
  let best = Infinity;

  const satisfies = (i) => {
    let sum = A[i] + x[i];
    if (i > 0) sum += A[i - 1] + x[i - 1];
    if (i + 1 < n) sum += A[i + 1] + x[i + 1];
    return sum >= 0;
  };

  const search = (i, planted) => {
    if (planted >= best) return; // branch and bound
    if (i === n) {
      if (satisfies(n - 1)) best = planted;
      return;
    }
    for (let trees = 0; trees <= limit; trees++) {
      x[i] = trees;
      if (i > 0 && !satisfies(i - 1)) continue;
      search(i + 1, planted + trees);
    }
    x[i] = 0;
  };

  search(0, 0);
  return best;
}

module.exports = solution;
