// var longestCommonSubsequence = function (t1, t2) {
//   const dp = [];

//   for (let i = 0; i < t1.length + 1; ++i) {
//     dp[i] = Array(t2.length + 1).fill(0);
//   }

//   for (let i = 1; i <= t1.length; ++i) {
//     for (let j = 1; j <= t2.length; ++j) {
//       if (t1[i - 1] === t2[j - 1]) {
//         dp[i][j] = 1 + dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
//       }
//     } // el
//   } // el

//   //test
//   console.log(dp);

//   return dp[t1.length][t2.length];
// };

// const t1 = "zzsni";
// const t2 = "szuli";
// const out = longestCommonSubsequence(t1, t2);
// console.log(out);

var longestCommonSubsequence = function (t1, t2) {
  const dp = Array(t2.length + 1).fill(0);

  for (let i = 1; i <= t1.length; ++i) {
    // reset
    let dia = 0;
    let tmp_dp = 0;
    for (let j = 1; j <= t2.length; ++j) {
      if (t1[i - 1] === t2[j - 1]) {
        // virtual use
        tmp_dp = 1 + dia;
        // backup
        dia = dp[j];
        // actual use
        dp[j] = tmp_dp;
      } else {
        // .. no virtual use
        // backup first
        dia = dp[j];
        // actual use
        dp[j] = Math.max(dp[j - 1], dp[j]);
      }
    } // el

    //test
    console.log("++", dp);
  } // el

  return dp[dp.length - 1];
};

const t1 = "zzsni";
const t2 = "szuli";
const out = longestCommonSubsequence(t1, t2);
console.log(out); // expect 2, now 3
