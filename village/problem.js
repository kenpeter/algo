/**
 * Metadata + shared test cases for the "Village" problem.
 * Used by solution.test.js and by the GitHub Pages build.
 */
module.exports = {
  id: 'village',
  group: 'arrays-greedy',
  title: 'Village',
  subtitle: 'Minimum trees to make every neighbourhood sustainable',
  difficulty: 'Medium',
  tags: ['Greedy', 'Arrays', 'Simulation'],
  signature: 'solution(A)',
  javaSignature: 'class Solution { public int solution(int[] A); }',
  statement: [
    'We are provided with a plan of an industrial village, represented by an array `A` consisting of `N` integers. The K-th value (for K within the range `0..N-1`) represents either:',
    '• a forest consisting of `A[K]` trees (if `A[K]` is positive); or',
    '• an industrial building (if `A[K]` is non-positive), producing `-A[K]` units of pollution.',
    'One tree is able to neutralize one unit of pollution. Our goal is to make every neighbourhood sustainable, i.e. for every field, the sum of its value and the values of its neighbouring fields (if they exist) is non-negative.',
    'For example, given `A = [1, -3, 2]`, there is one tree in field 0, an industrial building producing 3 units of pollution in field 1, and two trees in field 2. We can plant two trees in field 1, obtaining `[1, -1, 2]`; then every neighbourhood sum is non-negative.',
    'What is the minimum number of trees we have to plant in order to make every field\u2019s neighbourhood sustainable?',
  ],
  constraints: [
    '`N` is an integer within the range `[1..100,000]`.',
    'Each element of array `A` is an integer within the range `[-10,000..10,000]`.',
  ],
  examples: [
    {
      name: 'Example 1',
      args: [[1, -3, 2]],
      expected: 2,
      explanation:
        'Plant 2 trees in field 1: [1, -1, 2]. Neighbourhood sums: 1+(-1)=0, 1+(-1)+2=2, (-1)+2=1.',
    },
    {
      name: 'Example 2',
      args: [[-3, 2, 4, -5, 3]],
      expected: 3,
      explanation:
        'Plant 1 tree in field 0 and 2 trees in field 4: [-2, 2, 4, -5, 5]. Every neighbourhood sum is at least 0.',
    },
    {
      name: 'Example 3',
      args: [[-2, 1, -3, 1]],
      expected: 4,
      explanation:
        'Plant 2 trees each in fields 1 and 2: [-2, 3, -1, 1]. Every neighbourhood sum is non-negative.',
    },
  ],
  tests: [
    { name: 'Single positive field', args: [[5]], expected: 0 },
    { name: 'Single negative field', args: [[-5]], expected: 5 },
    { name: 'Single zero field', args: [[0]], expected: 0 },
    { name: 'All positive', args: [[1, 2, 3, 4, 5]], expected: 0 },
    { name: 'All negative, length 3', args: [[-1, -1, -1]], expected: 3 },
    { name: 'All negative, length 4', args: [[-5, -5, -5, -5]], expected: 20 },
    { name: 'Negative pair', args: [[-4, -4]], expected: 8 },
    { name: 'Empty array', args: [[]], expected: 0 },
  ],
  randomCheck: {
    count: 400,
    description:
      'Arrays of length 1..5 with values in [-2..2], compared against an exhaustive branch-and-bound search.',
  },
};
