/**
 * Subarray sum — implementation 5
 * Brute force over all subarrays (reference implementation).
 *
 * Time O(N^2) | Space O(1)
 */
function solution(A) {
  const n = A.length;
  if (n < 2) return -1;

  let best = -1;
  for (let i = 0; i < n; i++) {
    let sum = A[i];
    for (let j = i + 1; j < n; j++) {
      sum += A[j];
      if (A[j] === A[i] && sum > best) best = sum;
    }
  }
  return best;
}

module.exports = solution;
