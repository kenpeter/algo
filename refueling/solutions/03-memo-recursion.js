/**
 * Refueling — implementation 3
 * Top-down memoised interval DP.
 *
 * Same recurrence as implementation 1, but computed lazily: solve(l, r)
 * returns [max fuel standing at l, max fuel standing at r] and caches results.
 * Unlike implementations 1 and 2 it only visits intervals that are reachable.
 *
 * Time O(N^2) | Space O(N^2) (memo table)
 */
const NEG = -Infinity;

function solution(A, X) {
  const n = A.length;
  if (n === 0) return 0;

  const memo = new Map();

  const solve = (l, r) => {
    if (l === r) return [A[l], A[l]];

    const key = l * n + r;
    const cached = memo.get(key);
    if (cached !== undefined) return cached;

    const [leftAtL, leftAtR] = solve(l + 1, r); // interval [l+1, r]
    const [rightAtL, rightAtR] = solve(l, r - 1); // interval [l, r-1]

    let atL = NEG;
    const lFromL1 = X[l + 1] - X[l];
    if (leftAtL >= lFromL1) atL = Math.max(atL, leftAtL - lFromL1);
    const lFromR = X[r] - X[l];
    if (leftAtR >= lFromR) atL = Math.max(atL, leftAtR - lFromR);

    let atR = NEG;
    const rFromL = X[r] - X[l];
    if (rightAtL >= rFromL) atR = Math.max(atR, rightAtL - rFromL);
    const rFromR1 = X[r] - X[r - 1];
    if (rightAtR >= rFromR1) atR = Math.max(atR, rightAtR - rFromR1);

    const result = [
      atL === NEG ? NEG : atL + A[l],
      atR === NEG ? NEG : atR + A[r],
    ];
    memo.set(key, result);
    return result;
  };

  let best = 1;
  for (let len = 2; len <= n; len++) {
    for (let l = 0; l + len - 1 < n; l++) {
      const [atL, atR] = solve(l, l + len - 1);
      if (atL !== NEG || atR !== NEG) best = len;
    }
  }
  return best;
}

module.exports = solution;
