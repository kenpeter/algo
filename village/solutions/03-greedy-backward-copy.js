/**
 * Village — implementation 3
 * Greedy right-to-left (mirror image of implementation 1).
 *
 * When field i is unsustainable, plant the deficit in i-1 (or i in the first
 * field). By symmetry with the left-to-right greedy this is also optimal.
 *
 * Time O(N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n === 0) return 0;

  const arr = A.slice();
  let planted = 0;

  for (let i = n - 1; i >= 0; i--) {
    const left = i > 0 ? arr[i - 1] : 0;
    const right = i + 1 < n ? arr[i + 1] : 0;
    const sum = left + arr[i] + right;

    if (sum < 0) {
      const need = -sum;
      if (i > 0) arr[i - 1] += need;
      else arr[i] += need;
      planted += need;
    }
  }

  return planted;
}

module.exports = solution;
