# Village — minimum trees to plant

## Task

An array `A` describes an industrial village:

- `A[K] > 0` — `A[K]` trees in field `K`
- `A[K] <= 0` — `-A[K]` units of pollution in field `K`

A tree neutralizes one unit of pollution, so planting a tree in a field is the
same as adding `1` to that field's value. A field is **sustainable** when its
own value plus the values of its direct neighbours is non-negative:

```
A[i-1] + A[i] + A[i+1] >= 0      (out-of-range neighbours count as 0)
```

Return the minimum number of trees to plant so that *every* field is
sustainable.

## Five solutions

| # | File | Approach | Complexity |
| --- | --- | --- | --- |
| 01 | `01-greedy-forward-copy.js` | Scan left → right; plant the deficit in `i+1` | `O(N)` time, `O(N)` space |
| 02 | `02-greedy-forward-rolling.js` | Same greedy, tracking only the two modified fields | `O(N)` time, `O(1)` extra |
| 03 | `03-greedy-backward-copy.js` | Mirrored greedy (right → left, plant in `i-1`) | `O(N)` time, `O(N)` space |
| 04 | `04-branch-and-bound.js` | Exact search with feasibility pruning (reference) | exponential |
| 05 | `05-exhaustive-enumeration.js` | Try every planting vector (reference) | `O(L^N · N)` |

### Why the greedy is optimal

When field `i` is unsustainable, fields left of `i` are already fixed. The
missing units must be planted in `i` or `i+1`. Planting in `i+1` costs the same
but also helps the still-undecided neighbourhoods `i+1` and `i+2`, so it is
never worse. Every plant is therefore forced by the first violated field.

## Tests

`solution.test.js` runs all five implementations against:

- the 3 statement examples and 8 edge cases from `problem.js`;
- 400 randomised arrays, checked against the exhaustive reference.

```bash
node village/solution.test.js
```
