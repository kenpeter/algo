/**
 * Registry of all five refueling implementations.
 * `benchmarkN` = largest input size used by bench.js (null = skip).
 */
module.exports = [
  {
    id: '01',
    name: 'Interval DP (2-D tables)',
    complexity: 'O(N^2) time, O(N^2) space',
    benchmarkN: 700,
    fn: require('./01-interval-dp'),
  },
  {
    id: '02',
    name: 'Interval DP (rolling arrays)',
    complexity: 'O(N^2) time, O(N) space',
    benchmarkN: 700,
    fn: require('./02-interval-dp-rolling'),
  },
  {
    id: '03',
    name: 'Memoised recursion (top-down DP)',
    complexity: 'O(N^2) time, O(N^2) space',
    benchmarkN: 700,
    fn: require('./03-memo-recursion'),
  },
  {
    id: '04',
    name: 'Dijkstra over interval states (minimum travel cost)',
    complexity: 'O(N^2 log N) time, O(N^2) space',
    benchmarkN: 700,
    fn: require('./04-dijkstra-intervals'),
  },
  {
    id: '05',
    name: 'Brute force over (bitmask, city) states (reference)',
    complexity: 'O(2^N · N^2) time, exponential space',
    benchmarkN: null,
    fn: require('./05-brute-force-states'),
  },
];
