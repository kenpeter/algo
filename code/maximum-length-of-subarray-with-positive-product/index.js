// https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/discuss/819432/Python-Easy-to-understand-DP

// const getMaxLen = (ns) => {
//   // res
//   let res = 0;

//   // 2d dp
//   const dp = Array(ns.length)
//     .fill(0)
//     .map((_, i) => {
//       return Array(2).fill(0);
//     });

//   // posi len
//   if (ns[0] > 0) dp[0][0] = 1;

//   // nega len
//   if (ns[0] < 0) dp[0][1] = 1;

//   // base case
//   res = dp[0][0];

//   for (let i = 1; i < ns.length; ++i) {
//     // curr
//     const n = ns[i];

//     if (n > 0) {
//       // * income num is posi
//       // * dp[i - 1][0] is prev posi len, with income posi, still posi
//       dp[i][0] = dp[i - 1][0] + 1;
//       if (dp[i - 1][1] > 0) {
//         dp[i][1] = Math.max(dp[i][1], dp[i - 1][1] + 1);
//       }
//     }

//     if (n < 0) {
//       // * income num is nega
//       // * dp[i - 1][0] is prev posi len, with income nega, become posi
//       dp[i][1] = dp[i - 1][0] + 1;
//       if (dp[i - 1][1] > 0) {
//         // dp[i - 1][1] is nega length, with income nega, become posi
//         dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + 1);
//       }
//     }

//     res = Math.max(res, dp[i][0]);
//   } // end

//   return res;
// };

const getMaxLen = (ns) => {
  // res
  let res = 0;

  // 2d dp
  const dp = Array(ns.length)
    .fill(0)
    .map((_, i) => {
      return Array(2).fill(0);
    });

  // posi len
  if (ns[0] > 0) dp[0][0] = 1;

  // nega len
  if (ns[0] < 0) dp[0][1] = 1;

  // base case
  res = dp[0][0];

  for (let i = 1; i < ns.length; ++i) {
    // curr
    const n = ns[i];

    if (n > 0) {
      // if prev state is posi or 0; income is posi; posi len + 1;
      dp[i][0] = dp[i - 1][0] + 1;
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][0] + 1); // we don't need this, as they are the same

      // if prev state is nega; income is posi; nega le + 1
      dp[i][1] = dp[i - 1][1] + 1;
      // dp[i][1] (curr nega len) VS dp[i - 1][1] (prev nega len) + 1
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][1] + 1); // if dp[i - 1][1] > 0, so if dp[i - 1][1] <=0
    }

    if (n < 0) {
      // * income num is nega
      // * dp[i - 1][0] is prev posi len, with income nega, become posi
      dp[i][1] = dp[i - 1][0] + 1;
      if (dp[i - 1][1] > 0) {
        // dp[i - 1][1] is nega length, with income nega, become posi
        dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + 1);
      }
    }

    res = Math.max(res, dp[i][0]);
  } // end

  return res;
};

const ns = [9, 5, 8, 2, -6, 4, -3, 0, 2, -5, 15, 10, -7, 9, -2];
const out = getMaxLen(ns);
console.log(out);
