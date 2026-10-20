/**
 * Subarray sum — implementation 4
 * Coordinate compression + typed arrays.
 *
 * Values are compressed to dense ids, so no hash map is needed for the scan.
 * Sorting dominates: O(N log N).
 *
 * Time O(N log N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n < 2) return -1;

  const ids = Array.from(new Set(A)).sort((a, b) => a - b);
  const idOf = new Map();
  for (let k = 0; k < ids.length; k++) idOf.set(ids[k], k);

  const m = ids.length;
  const first = new Int32Array(m).fill(-1);
  const last = new Int32Array(m).fill(-1);
  const prefix = new Float64Array(n + 1);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + A[i];
    const k = idOf.get(A[i]);
    if (first[k] === -1) first[k] = i;
    last[k] = i;
  }

  let best = -1;
  for (let k = 0; k < m; k++) {
    if (first[k] === last[k]) continue;
    const sum = prefix[last[k] + 1] - prefix[first[k]];
    if (sum > best) best = sum;
  }

  return best;
}

module.exports = solution;
