/**
 * Refueling — implementation 5
 * Brute-force search over (visited set, current city) states.
 *
 * Keeps the maximum fuel reachable for every (city, bitmask) pair and expands
 * to any unvisited city that is within reach. Exact, but exponential.
 *
 * Time O(2^N · N^2) | Space O(2^N · N)  (reference implementation)
 */
function solution(A, X) {
  const n = A.length;
  if (n === 0) return 0;

  const size = 1 << n;
  const fuel = new Array(size * n).fill(-Infinity);
  const queue = [];
  let best = 1;

  for (let s = 0; s < n; s++) {
    const index = s * size + (1 << s);
    fuel[index] = A[s];
    queue.push([index, 1 << s, s]);
  }

  for (let head = 0; head < queue.length; head++) {
    const [index, mask, current] = queue[head];
    const available = fuel[index];

    for (let next = 0; next < n; next++) {
      if (mask & (1 << next)) continue;
      const cost = Math.abs(X[current] - X[next]);
      if (cost > available) continue;

      const nextMask = mask | (1 << next);
      const nextIndex = next * size + nextMask;
      const nextFuel = available - cost + A[next];
      if (nextFuel <= fuel[nextIndex]) continue;
      fuel[nextIndex] = nextFuel;
      queue.push([nextIndex, nextMask, next]);

      let count = 0;
      for (let m = nextMask; m; m &= m - 1) count += 1;
      if (count > best) best = count;
    }
  }

  return best;
}

module.exports = solution;
