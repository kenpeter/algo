/**
 * Refueling — implementation 2
 * Interval DP with rolling 1-D arrays (O(N) space).
 *
 * For the current interval length, only intervals of length-1 are needed:
 *   [l+1, r] starts at l+1  -> prevL[l+1], prevR[l+1]
 *   [l, r-1] starts at l    -> prevL[l],   prevR[l]
 * so the O(N^2) table can be collapsed to two arrays of size N.
 *
 * Time O(N^2) | Space O(N)
 */
const NEG = -Infinity;

function solution(A, X) {
  const n = A.length;
  if (n === 0) return 0;

  let prevL = A.slice();
  let prevR = A.slice();
  let best = 1;

  for (let len = 2; len <= n; len++) {
    const curL = new Array(n).fill(NEG);
    const curR = new Array(n).fill(NEG);

    for (let l = 0; l + len - 1 < n; l++) {
      const r = l + len - 1;

      // Finish at l using interval [l+1, r].
      let atL = NEG;
      const c1 = X[l + 1] - X[l];
      if (prevL[l + 1] >= c1) atL = Math.max(atL, prevL[l + 1] - c1);
      const c2 = X[r] - X[l];
      if (prevR[l + 1] >= c2) atL = Math.max(atL, prevR[l + 1] - c2);
      if (atL !== NEG) {
        curL[l] = atL + A[l];
        best = len;
      }

      // Finish at r using interval [l, r-1].
      let atR = NEG;
      const c3 = X[r] - X[l];
      if (prevL[l] >= c3) atR = Math.max(atR, prevL[l] - c3);
      const c4 = X[r] - X[r - 1];
      if (prevR[l] >= c4) atR = Math.max(atR, prevR[l] - c4);
      if (atR !== NEG) {
        curR[l] = atR + A[r];
        best = len;
      }
    }

    prevL = curL;
    prevR = curR;
  }

  return best;
}

module.exports = solution;
