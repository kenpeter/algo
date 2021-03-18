var canPartition = function (ns) {
  // sum
  const s = ns.reduce((acc, t) => acc + t, 0);

  // half
  condi = s % 2 === 0 ? true : false;
  if (condi === false) return false;

  // sort
  ns.sort((a, b) => a - b);
  const sum = s / 2; // e.g. 8/2=4

  const dp = [];
  for (let i = 0; i <= sum; ++i) {
    // true or false == non_fresh; null == fresh
    dp[i] = Array(ns.length).fill(null);
  }

  for (let i = 0; i < ns.length; ++i) {
    dp[0][i] = false;
  }

  // * bottom -> top (recur_stop_check)
  // * sub_tar
  for (let i = 1; i <= sum; ++i) {
    for (let j = 0; j < ns.length; ++j) {
      if (i >= ns[j]) dp[i][j] = dp[i][j] || dp[i - ns[j]][j];
    }
  }

  //test
  console.log("++ dp", dp);

  return dp[sum][ns.length - 1];
};

const input = [1, 2, 5];
const out = canPartition(input);
console.log("++ out", out);
