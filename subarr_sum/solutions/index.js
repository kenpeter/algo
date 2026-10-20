/**
 * Registry of all five subarr_sum implementations.
 * `benchmarkN` = largest input size used by bench.js (null = skip).
 */
module.exports = [
  {
    id: '01',
    name: 'Prefix sums + first/last occurrence maps',
    complexity: 'O(N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./01-prefix-first-last'),
  },
  {
    id: '02',
    name: 'Single left-to-right pass (earliest prefix map)',
    complexity: 'O(N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./02-single-pass-left'),
  },
  {
    id: '03',
    name: 'Single right-to-left pass (latest suffix map)',
    complexity: 'O(N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./03-single-pass-right'),
  },
  {
    id: '04',
    name: 'Coordinate compression + typed arrays',
    complexity: 'O(N log N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./04-coordinate-compression'),
  },
  {
    id: '05',
    name: 'Brute force over all subarrays (reference)',
    complexity: 'O(N^2) time, O(1) space',
    benchmarkN: null,
    fn: require('./05-brute-force'),
  },
];
