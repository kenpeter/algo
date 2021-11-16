const longestPalindromeSubseq = (s) => {
  const dp = [];
  for (let i = 0; i < s.length; ++i) {
    dp[i] = Array(s.length).fill(0);
  }

  for (let i = s.length - 1; i >= 0; --i) {
    dp[i][i] = 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    } // el

    // test
    console.log("++ ", dp);
  }

  return dp[0][s.length - 1];
};

const s = "bbbab";
const out = longestPalindromeSubseq(s);
console.log(out);
