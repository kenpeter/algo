# Subarray sum — equal first and last element

## Task

Given `A` of `N` positive integers, find the largest sum of a contiguous
subarray that

- has at least two elements, and
- has the same value as its first and last element.

Return `-1` if no such subarray exists.

## Five solutions

| # | File | Approach | Complexity |
| --- | --- | --- | --- |
| 01 | `01-prefix-first-last.js` | Prefix sums + first/last occurrence maps | `O(N)` time/space |
| 02 | `02-single-pass-left.js` | One left-to-right pass, map of first prefix sums | `O(N)` time/space |
| 03 | `03-single-pass-right.js` | One right-to-left pass, map of last suffix sums | `O(N)` time/space |
| 04 | `04-coordinate-compression.js` | Compress values, scan with typed arrays | `O(N log N)` time |
| 05 | `05-brute-force.js` | Check every subarray (reference) | `O(N²)` time, `O(1)` space |

### Key observation

For a subarray `A[i..j]` with `A[i] === A[j]`:

```
sum(i, j) = prefix[j + 1] - prefix[i]
```

All values are positive, so for each value the widest span (first occurrence →
last occurrence) is always the best pair. Solutions 01 and 04 use that idea
explicitly; solutions 02 and 03 fold it into a single pass.

## Tests

`solution.test.js` runs all five implementations against:

- the 3 statement examples and 10 edge cases from `problem.js`;
- 500 randomised arrays, checked against the `O(N²)` reference.

```bash
node subarr_sum/solution.test.js
```
