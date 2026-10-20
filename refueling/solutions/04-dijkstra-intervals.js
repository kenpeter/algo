/**
 * Refueling — implementation 4
 * Dijkstra over interval states, minimising total travel.
 *
 * State: (l, r, side) = cities l..r visited, standing at l (side 0) or r
 * (side 1). For a fixed state the fuel collected so far is fixed
 * (sum of A[l..r]), so remaining fuel = collected - travelCost. Maximising the
 * remaining fuel is therefore the same as minimising the travel cost, and a
 * state is usable exactly when
 *
 *     cost <= sum(A[l..r])
 *
 * We run Dijkstra on the (acyclic) interval graph, starting from every single
 * city with cost 0, and keep the largest interval that can be settled.
 *
 * Time O(N^2 log N) | Space O(N^2)
 */
class MinHeap {
  constructor(capacity) {
    this.costs = new Float64Array(capacity);
    this.states = new Int32Array(capacity);
    this.sides = new Int8Array(capacity);
    this.size = 0;
  }

  push(cost, state, side) {
    let i = this.size++;
    this.costs[i] = cost;
    this.states[i] = state;
    this.sides[i] = side;

    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.costs[parent] <= this.costs[i]) break;
      this.swap(parent, i);
      i = parent;
    }
  }

  pop() {
    const top = { cost: this.costs[0], state: this.states[0], side: this.sides[0] };
    this.size -= 1;
    if (this.size > 0) {
      this.costs[0] = this.costs[this.size];
      this.states[0] = this.states[this.size];
      this.sides[0] = this.sides[this.size];

      let i = 0;
      for (;;) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let smallest = i;
        if (left < this.size && this.costs[left] < this.costs[smallest]) smallest = left;
        if (right < this.size && this.costs[right] < this.costs[smallest]) smallest = right;
        if (smallest === i) break;
        this.swap(smallest, i);
        i = smallest;
      }
    }
    return top;
  }

  swap(a, b) {
    const cost = this.costs[a];
    this.costs[a] = this.costs[b];
    this.costs[b] = cost;

    const state = this.states[a];
    this.states[a] = this.states[b];
    this.states[b] = state;

    const side = this.sides[a];
    this.sides[a] = this.sides[b];
    this.sides[b] = side;
  }
}

function solution(A, X) {
  const n = A.length;
  if (n === 0) return 0;

  const fuelPrefix = new Float64Array(n + 1);
  for (let i = 0; i < n; i++) fuelPrefix[i + 1] = fuelPrefix[i] + A[i];

  const stateCount = n * n;
  const distL = new Float64Array(stateCount).fill(Infinity);
  const distR = new Float64Array(stateCount).fill(Infinity);
  const heap = new MinHeap(4 * stateCount + 2 * n + 16);

  let best = 1;
  for (let i = 0; i < n; i++) {
    distL[i * n + i] = 0;
    distR[i * n + i] = 0;
    heap.push(0, i * n + i, 0);
    heap.push(0, i * n + i, 1);
  }

  while (heap.size > 0) {
    const { cost, state, side } = heap.pop();
    const dist = side === 0 ? distL : distR;
    if (dist[state] !== cost) continue; // stale heap entry

    const r = state % n;
    const l = (state - r) / n;
    if (r - l + 1 > best) best = r - l + 1;

    const position = side === 0 ? l : r;
    // Fuel collected so far is fixed for the interval; subtract the travel cost.
    const fuelNow = fuelPrefix[r + 1] - fuelPrefix[l] - cost;

    if (l > 0) {
      const step = X[position] - X[l - 1];
      const nextCost = cost + step;
      const nextState = (l - 1) * n + r;
      if (step <= fuelNow && nextCost < distL[nextState]) {
        distL[nextState] = nextCost;
        heap.push(nextCost, nextState, 0);
      }
    }

    if (r + 1 < n) {
      const step = X[r + 1] - X[position];
      const nextCost = cost + step;
      const nextState = l * n + (r + 1);
      if (step <= fuelNow && nextCost < distR[nextState]) {
        distR[nextState] = nextCost;
        heap.push(nextCost, nextState, 1);
      }
    }
  }

  return best;
}

module.exports = solution;
