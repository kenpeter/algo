# Refueling — maximum number of cities visited

## Task

`N` cities stand in a row. City `k` is at position `X[k]` (strictly
increasing) and holds `A[k]` litres of fuel. Tom picks any starting city,
starts with an empty tank, and immediately refuels there. Moving from city `i`
to city `j` costs `|X[i] - X[j]|` litres. Different cities are counted once.
Return the maximum number of distinct cities Tom can visit.

## Five solutions

| # | File | Approach | Complexity |
| --- | --- | --- | --- |
| 01 | `01-interval-dp.js` | Interval DP with two 2-D tables | `O(N²)` time/space |
| 02 | `02-interval-dp-rolling.js` | Same DP with rolling 1-D arrays | `O(N²)` time, `O(N)` space |
| 03 | `03-memo-recursion.js` | Top-down memoised interval DP | `O(N²)` time/space |
| 04 | `04-dijkstra-intervals.js` | Dijkstra over interval states, minimising travel | `O(N² log N)` |
| 05 | `05-brute-force-states.js` | Search `(visited set, city)` states (reference) | `O(2^N · N²)` |

### Key observation

Stopping at a city is free and only adds fuel, so an optimal trip visits a
contiguous interval `[l, r]` and Tom always stands at one of its ends. A state
is therefore `(l, r, side)`.

For solution 04, the fuel collected for a state is fixed (`sum A[l..r]`), so
remaining fuel is maximised by minimising the travel cost to reach the state.
A state is usable when the next step costs no more than the fuel currently in
the tank, and the largest settled interval is the answer.

> A "nearest unvisited city first" greedy looks plausible but is incorrect:
> cheap fuel on the far side can matter more than distance. It is not included.

## Tests

`solution.test.js` runs all five implementations against:

- the 3 statement examples and 9 edge cases from `problem.js`;
- 400 randomised rows, checked against the brute-force state search.

```bash
node refueling/solution.test.js
```
