/**
 * Village — implementation 1
 * Greedy left-to-right on a copy of the input.
 *
 * When field i is unsustainable, the deficit is planted in i+1 (or i in the
 * last field). Fields left of i are already fixed, so only i and i+1 can still
 * change, and i+1 is at least as useful as i for the remaining constraints.
 *
 * Time O(N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n === 0) return 0;

  const arr = A.slice();
  let planted = 0;

  for (let i = 0; i < n; i++) {
    const left = i > 0 ? arr[i - 1] : 0;
    const right = i + 1 < n ? arr[i + 1] : 0;
    const sum = left + arr[i] + right;

    if (sum < 0) {
      const need = -sum;
      if (i + 1 < n) arr[i + 1] += need;
      else arr[i] += need;
      planted += need;
    }
  }

  return planted;
}

module.exports = solution;
