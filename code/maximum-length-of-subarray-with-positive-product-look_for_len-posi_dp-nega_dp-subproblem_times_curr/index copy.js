// sm:
// * sub_problem == prev_state
// * contrib
// * n > 0, prev_state_posi, prev_state_nega; n < 0, prev_state_posi, prev_state_nega
const getMaxLen = (ns) => {
  let res = 0;

  const dp = Array(ns.length)
    .fill(0)
    .map((_, i) => {
      return Array(2).fill(0);
    });

  // 1st num posi len
  if (ns[0] > 0) dp[0][0] = 1;

  // 1st num nega len
  if (ns[0] < 0) dp[0][1] = 1;

  // base case
  res = dp[0][0];

  for (let i = 1; i < ns.length; ++i) {
    const n = ns[i];

    if (n > 0) {
      dp[i][0] = dp[i - 1][0] + 1;
      if (dp[i - 1][1] > 0) {
        dp[i][1] = dp[i - 1][1] + 1;
      }
    }

    if (n < 0) {
      dp[i][1] = dp[i - 1][0] + 1;
      if (dp[i - 1][1] > 0) {
        dp[i][0] = dp[i - 1][1] + 1;
      }
    }

    res = Math.max(res, dp[i][0]);
  } // end

  return res;
};

const ns = [1, -2, -3, 4];
const out = getMaxLen(ns);
console.log(out);
