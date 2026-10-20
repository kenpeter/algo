/**
 * Metadata + shared test cases for the "Subarray sum" problem.
 * Used by solution.test.js and by the GitHub Pages build.
 */
module.exports = {
  id: 'subarr_sum',
  group: 'arrays-greedy',
  title: 'Subarray sum',
  subtitle: 'Largest sum with equal first and last elements',
  difficulty: 'Easy',
  tags: ['Prefix Sums', 'Hash Map', 'Arrays'],
  signature: 'solution(A)',
  javaSignature: 'function solution(A);',
  statement: [
    'You are given an array `A` consisting of `N` positive integers. Consider subarrays of `A`, with at least two elements, whose first and last elements have the same value.',
    'For example, for array `A = [1, 3, 6, 1, 6, 6, 9, 9]`, the following subarrays meet the requirements:',
    '• `[1, 3, 6, 1]`: first and last elements are equal to 1; the sum of the subarray is 11.',
    '• `[6, 1, 6]`: first and last elements are equal to 6; the sum of the subarray is 13.',
    '• `[6, 1, 6, 6]`: first and last elements are equal to 6; the sum of the subarray is 19.',
    '• `[6, 6]`: first and last elements are equal to 6; the sum of the subarray is 12.',
    '• `[9, 9]`: first and last elements are equal to 9; the sum of the subarray is 18.',
    'The subarray with the largest sum is `[6, 1, 6, 6]` and its sum is 19.',
    'Write a function that, given an array `A` of `N` positive integers, returns the largest sum of a subarray whose first and last elements have the same value.',
    'If there is no such subarray, return `-1`.',
  ],
  constraints: [
    '`N` is an integer within the range `[2..100,000]`.',
    'Each element of array `A` is an integer within the range `[1..10,000]`.',
  ],
  examples: [
    {
      name: 'Example 1',
      args: [[1, 3, 6, 1, 6, 6, 9, 9]],
      expected: 19,
      explanation: 'The best subarray is [6, 1, 6, 6], with sum 19.',
    },
    {
      name: 'Example 2',
      args: [[5, 1, 4, 3]],
      expected: -1,
      explanation: 'All values are distinct, so no valid subarray exists.',
    },
    {
      name: 'Example 3',
      args: [[2, 2, 2, 3, 2, 3]],
      expected: 11,
      explanation: 'The best subarray is [2, 2, 2, 3, 2], with sum 11.',
    },
  ],
  tests: [
    { name: 'Minimum size, equal pair', args: [[1, 1]], expected: 2 },
    { name: 'Minimum size, different pair', args: [[1, 2]], expected: -1 },
    { name: 'Single element', args: [[7]], expected: -1 },
    { name: 'Empty array', args: [[]], expected: -1 },
    { name: 'All distinct', args: [[1, 2, 3, 4, 5]], expected: -1 },
    { name: 'All equal', args: [[3, 3, 3, 3]], expected: 12 },
    { name: 'Wide span beats a close pair', args: [[1, 100, 100, 1]], expected: 202 },
    { name: 'Inner pair is larger', args: [[9, 1, 9, 2]], expected: 19 },
    { name: 'Maximum element values', args: [[10000, 10000]], expected: 20000 },
    { name: 'Positive values only', args: [[2, 1, 1, 2]], expected: 6 },
  ],
  randomCheck: {
    count: 500,
    description:
      'Arrays of length 1..9 with values in [1..5], compared against an O(N^2) brute force over all subarrays.',
  },
};
