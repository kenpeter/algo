/**
 * Registry of all five village implementations.
 * `benchmarkN` = largest input size used by bench.js (null = skip).
 */
module.exports = [
  {
    id: '01',
    name: 'Greedy left-to-right (array copy)',
    complexity: 'O(N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./01-greedy-forward-copy'),
  },
  {
    id: '02',
    name: 'Greedy left-to-right (rolling, O(1) extra space)',
    complexity: 'O(N) time, O(1) extra space',
    benchmarkN: 100000,
    fn: require('./02-greedy-forward-rolling'),
  },
  {
    id: '03',
    name: 'Greedy right-to-left (array copy)',
    complexity: 'O(N) time, O(N) space',
    benchmarkN: 100000,
    fn: require('./03-greedy-backward-copy'),
  },
  {
    id: '04',
    name: 'Branch-and-bound exact search (reference)',
    complexity: 'exponential time, O(N) space',
    benchmarkN: null,
    fn: require('./04-branch-and-bound'),
  },
  {
    id: '05',
    name: 'Exhaustive enumeration (reference)',
    complexity: 'O(L^N · N) time, O(N) space',
    benchmarkN: null,
    fn: require('./05-exhaustive-enumeration'),
  },
];
