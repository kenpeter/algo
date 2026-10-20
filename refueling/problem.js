/**
 * Metadata + shared test cases for the "Refueling" problem.
 * Used by solution.test.js and by the GitHub Pages build.
 */
module.exports = {
  id: 'refueling',
  group: 'dynamic-programming',
  title: 'Refueling',
  subtitle: 'Maximum number of cities Tom can visit',
  difficulty: 'Hard',
  tags: ['Dynamic Programming', 'Intervals', 'Two Pointers'],
  signature: 'solution(A, X)',
  javaSignature: 'class Solution { public int solution(int[] A, int[] X); }',
  statement: [
    'There are `N` cities arranged in a row (numbered from `0` to `N-1`). The K-th city is located at position `X[K]` and contains `A[K]` litres of fuel.',
    'Tom is planning a trip. He wants to visit as many cities as possible. Unfortunately, he is limited by the available fuel. To be precise, at the departure time Tom begins with an empty tank and immediately refuels his car at the starting city. The amount of fuel consumed when travelling from city `i` to city `j` is equal to `|X[i] - X[j]|` litres.',
    'Tom can arbitrarily choose the city from which to start his trip. He may drive in either direction.',
    'Write a function that, given two arrays `A` and `X` consisting of `N` integers each, returns the maximum number of different cities that Tom can visit.',
  ],
  constraints: [
    '`N` is an integer within the range `[1..700]`.',
    'Each element of array `A` is an integer within the range `[0..1,000,000]`.',
    'Each element of array `X` is an integer within the range `[1..1,000,000]`.',
    '`X[K] < X[K+1]` for each K within the range `[0..N-2]`.',
  ],
  examples: [
    {
      name: 'Example 1',
      args: [
        [4, 1, 4, 3, 3],
        [8, 10, 11, 13, 100],
      ],
      expected: 4,
      explanation:
        'Start at city 1 (fuel 1), drive to city 2 (cost 1, refuel 4), then to city 0 (cost 3, refuel 4), then to city 3 (cost 3, refuel 3). Four different cities.',
    },
    {
      name: 'Example 2',
      args: [
        [0, 10, 0],
        [1, 2, 3],
      ],
      expected: 3,
      explanation:
        'Start at city 1 with 10 litres, visit city 0, then city 2. All three cities can be visited.',
    },
    {
      name: 'Example 3',
      args: [
        [0, 1, 0, 1, 1, 1, 0],
        [1, 2, 3, 4, 5, 6, 7],
      ],
      expected: 4,
      explanation:
        'Start at city 3 (or city 5) and collect fuel one city at a time; four cities is the maximum.',
    },
  ],
  tests: [
    { name: 'Single city', args: [[7], [3]], expected: 1 },
    { name: 'Single city with no fuel', args: [[0], [3]], expected: 1 },
    { name: 'Two cities, enough fuel', args: [[1, 0], [0, 1]], expected: 2 },
    { name: 'Two cities, not enough fuel', args: [[1, 0], [0, 5]], expected: 1 },
    { name: 'All other cities out of reach', args: [[1, 0, 0], [0, 100, 200]], expected: 1 },
    { name: 'Fuel chain across the row', args: [[1, 1, 1, 1], [0, 1, 2, 3]], expected: 4 },
    { name: 'Long gap cannot be crossed', args: [[5, 5, 5], [0, 10, 20]], expected: 1 },
    { name: 'Visit in both directions', args: [[3, 1, 3], [0, 2, 4]], expected: 3 },
    { name: 'Empty input', args: [[], []], expected: 0 },
  ],
  randomCheck: {
    count: 400,
    description:
      '1..6 cities with strictly increasing positions and fuel 0..7, compared against a brute-force search over (visited set, city) states.',
  },
};
