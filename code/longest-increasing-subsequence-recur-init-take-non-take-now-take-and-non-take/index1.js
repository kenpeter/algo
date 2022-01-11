var lis = function (dp, ns, n, i) {
  if (n < 0) return 0;

  if (dp[n][i] !== -1) {
    return dp[n][i];
  }

  // init end (run once at start)
  if (i === ns.length) {
    const p1 = lis(dp, ns, n - 1, n) + 1;
    const p2 = lis(dp, ns, n - 1, i);
    return (dp[n][i] = Math.max(p1, p2));
  }

  // inc
  if (ns[n] < ns[i]) {
    const p3 = lis(dp, ns, n - 1, n) + 1;
    const p4 = lis(dp, ns, n - 1, i);
    return (dp[n][i] = Math.max(p3, p4));
  } else {
    const p5 = lis(dp, ns, n - 1, i);
    return (dp[n][i] = p5);
  }
};

var lengthOfLIS = function (ns) {
  const dp = Array(ns.length + 1)
    .fill(-1)
    .map((_, i) => {
      return Array(ns.length + 1).fill(-1);
    });
  return lis(dp, ns, ns.length - 1, ns.length);
};
const ns = [5, 19, 5, 12];
const out = lengthOfLIS(ns);
console.log(out);
