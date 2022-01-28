// https://leetcode.com/discuss/interview-question/1692832/Amazon-or-Online-Assessmentor-Product-of-1

const productOfOne = (ns) => {
  const dp = Array(ns.length)
    .fill(0)
    .map((_, i) => {
      return [0, 0];
    });

  const start = ns[0];
  if (start > 0) {
    dp[0][0] = 1;
  }

  if (start < 0) {
    dp[0][1] = 1;
  }

  let res = dp[0][0];

  for (let i = 1; i < ns.length; ++i) {
    // curr
    const n = ns[i];

    // > 0
    if (n > 0) {
      // posi: prev (+) * curr (+)
      dp[i][0] = dp[i - 1][0] + 1;

      // nega: prev (-) * curr (+)
      if (dp[i - 1][1] > 0) {
        dp[i][1] = dp[i - 1][1] + 1;
      }
    } // end_if

    // < 0
    if (n < 0) {
      // posi: prev (-) * curr (-)
      if (dp[i - 1][1] > 0) {
        dp[i][0] = dp[i - 1][1] + 1;
      }

      // nega: prev (+) * curr (-1)
      dp[i][1] = dp[i - 1][0] + 1;
    } // end_if

    res = Math.max(res, dp[i][0]);
  } // el

  return res;
};

const ns = [1, -1, -1, -1, 1, 1];
const out = productOfOne(ns);
console.log(out); // max len of product === 1
