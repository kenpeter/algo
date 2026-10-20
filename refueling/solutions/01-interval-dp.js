/**
 * Refueling — implementation 1
 * Interval DP with two 2-D tables.
 *
 * reachL[l][r] / reachR[l][r] = maximum fuel left after visiting exactly the
 * cities l..r and standing at l / r. Process intervals by increasing length.
 *
 * Time O(N^2) | Space O(N^2)
 */
const NEG = -Infinity;

function solution(A, X) {
  const n = A.length;
  if (n === 0) return 0;

  const reachL = Array.from({ length: n }, () => new Array(n).fill(NEG));
  const reachR = Array.from({ length: n }, () => new Array(n).fill(NEG));

  for (let i = 0; i < n; i++) {
    reachL[i][i] = A[i];
    reachR[i][i] = A[i];
  }

  let best = 1;

  for (let len = 2; len <= n; len++) {
    for (let l = 0; l + len - 1 < n; l++) {
      const r = l + len - 1;

      // Finish at l, coming from interval [l+1, r].
      let atL = NEG;
      const fromL1 = X[l + 1] - X[l];
      if (reachL[l + 1][r] >= fromL1) atL = Math.max(atL, reachL[l + 1][r] - fromL1);
      const fromR = X[r] - X[l];
      if (reachR[l + 1][r] >= fromR) atL = Math.max(atL, reachR[l + 1][r] - fromR);
      if (atL !== NEG) {
        reachL[l][r] = atL + A[l];
        best = len;
      }

      // Finish at r, coming from interval [l, r-1].
      let atR = NEG;
      const fromL = X[r] - X[l];
      if (reachL[l][r - 1] >= fromL) atR = Math.max(atR, reachL[l][r - 1] - fromL);
      const fromR1 = X[r] - X[r - 1];
      if (reachR[l][r - 1] >= fromR1) atR = Math.max(atR, reachR[l][r - 1] - fromR1);
      if (atR !== NEG) {
        reachR[l][r] = atR + A[r];
        best = len;
      }
    }
  }

  return best;
}

module.exports = solution;
