/**
 * Village — implementation 2
 * Greedy left-to-right with O(1) extra space (input is never mutated).
 *
 * Plantings are only ever added to field i+1, so at step i the only modified
 * values are i-1 (addPrev) and i (addCur). Everything else can be read from A.
 *
 * Time O(N) | Space O(1)
 */
function solution(A) {
  const n = A.length;
  if (n === 0) return 0;

  let addPrev = 0; // trees planted into i-1 by the previous step
  let addCur = 0;  // trees planted into i by the previous step
  let planted = 0;

  for (let i = 0; i < n; i++) {
    const left = i > 0 ? A[i - 1] + addPrev : 0;
    const center = A[i] + addCur;
    const right = i + 1 < n ? A[i + 1] : 0;
    const sum = left + center + right;

    let addNext = 0;
    if (sum < 0) {
      const need = -sum;
      if (i + 1 < n) addNext = need;
      else addCur += need; // last field: plant here
      planted += need;
    }

    addPrev = addCur;
    addCur = addNext;
  }

  return planted;
}

module.exports = solution;
