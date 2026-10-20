/**
 * Subarray sum — implementation 3
 * Single right-to-left pass.
 *
 * Mirror of implementation 2: for each value remember the suffix sum *after*
 * its last (rightmost) occurrence. Seeing the value again at i closes the best
 * subarray starting at i: A[i] + (suffix after i) - (suffix after its last
 * occurrence).
 *
 * Time O(N) | Space O(N)
 */
function solution(A) {
  const n = A.length;
  if (n < 2) return -1;

  const suffixAfterLast = new Map();
  let suffix = 0; // sum of A[i+1..n-1]
  let best = -1;

  for (let i = n - 1; i >= 0; i--) {
    if (suffixAfterLast.has(A[i])) {
      const lastEnd = suffixAfterLast.get(A[i]);
      const sum = A[i] + suffix - lastEnd;
      if (sum > best) best = sum;
    } else {
      suffixAfterLast.set(A[i], suffix);
    }
    suffix += A[i];
  }

  return best;
}

module.exports = solution;
