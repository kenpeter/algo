var shortestCommonSupersequence = function (s1, s2) {
  const dp = Array(s1.length + 1)
    .fill("")
    .map((_, i) => {
      // return here
      return Array(s2.length + 1)
        .fill("")
        .map((_, j) => {
          if (i === 0 && j > 0) {
            return s2.slice(0, j);
          }

          if (j === 0 && i > 0) {
            return s1.slice(0, i);
          }

          return "";
        });
    });

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
      } else {
        if (dp[i - 1][j].length < dp[i][j - 1].length) {
          dp[i][j] = dp[i - 1][j] + s1[i - 1];
        } else {
          dp[i][j] = dp[i][j - 1] + s2[j - 1];
        }
      }
    }
  }

  return dp[s1.length][s2.length];
};
