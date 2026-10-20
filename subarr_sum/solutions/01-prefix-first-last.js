/**
 * Subarray sum — implementation 1
 * Prefix sums + first/last occurrence maps.
 *
 * All values are positive, so for each value the widest span (first -> last
 * occurrence) yields the largest sum for that value.
 *
 * Time O(N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n < 2) return -1;

  const first = new Map();
  const last = new Map();
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + A[i];
    if (!first.has(A[i])) first.set(A[i], i);
    last.set(A[i], i);
  }

  let best = -1;
  for (const [value, start] of first) {
    const end = last.get(value);
    if (end === start) continue;
    const sum = prefix[end + 1] - prefix[start];
    if (sum > best) best = sum;
  }
  return best;
}

module.exports = solution;
