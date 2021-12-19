var lis = function (dp, ns, n, i) {
  if (n < 0) return 0;

  if (dp[n][i] !== Number.MAX_SAFE_INTEGER) {
    return dp[n][i];
  }

  // inc
  if (ns[n] < ns[i]) {
    return (dp[n][i] = Math.max(
      lis(dp, ns, n - 1, n) + 1,
      lis(dp, ns, n - 1, i)
    ));
  }

  // !inc
  if (ns[n] >= ns[i]) {
    return (dp[n][i] = lis(dp, ns, n - 1, i));
  }

  return 0;
};

var lengthOfLIS = function (ns) {
  const dp = Array(ns.length + 1)
    .fill(Number.MAX_SAFE_INTEGER)
    .map((_, i) => {
      return Array(ns.length + 1).fill(Number.MAX_SAFE_INTEGER);
    });
  return lis(dp, ns, ns.length - 1, ns.length);
};

const ns = [4, 5];
const out = lengthOfLIS(ns);
console.log(out);
