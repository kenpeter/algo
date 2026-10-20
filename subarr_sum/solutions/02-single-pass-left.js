/**
 * Subarray sum — implementation 2
 * Single left-to-right pass.
 *
 * For each value store the running prefix sum *before* its first occurrence.
 * When the value appears again at i, the best subarray ending at i is
 * A[start..i] = (prefix before i) + A[i] - (prefix before start).
 *
 * Time O(N) | Space O(N) (one map, no prefix array)
 */
function solution(A) {
  const n = A.length;
  if (n < 2) return -1;

  const prefixBeforeFirst = new Map();
  let prefix = 0; // sum of A[0..i-1]
  let best = -1;

  for (let i = 0; i < n; i++) {
    if (prefixBeforeFirst.has(A[i])) {
      const start = prefixBeforeFirst.get(A[i]);
      const sum = prefix + A[i] - start;
      if (sum > best) best = sum;
    } else {
      prefixBeforeFirst.set(A[i], prefix);
    }
    prefix += A[i];
  }

  return best;
}

module.exports = solution;
