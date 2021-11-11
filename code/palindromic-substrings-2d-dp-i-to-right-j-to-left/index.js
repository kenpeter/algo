var countSubstrings = function (s) {
  const len = s.length;
  const dp = [];
  for (let i = 0; i <= len; ++i) {
    dp[i] = Array(len + 1).fill(0);
    for (let j = 0; j <= len; ++j) {
      dp[i][j] = [0, false];
    } // el
  } // el

  for (let i = 1; i <= len; ++i) {
    for (let j = i; j >= 1; --j) {
      const top = dp[i - 1][j][0];
      const right = j >= len ? 0 : dp[i][j + 1][0];

      let self_count = 0;
      let self_condi = false;

      if (s[i - 1] === s[j - 1]) {
        if (i - j <= 2) {
          self_count = 1;
          self_condi = true;
        } else {
          if (dp[i - 1][j + 1][1] === true) {
            self_count = 1;
            self_condi = true;
          }
        }
      }

      const dia = j >= len ? 0 : dp[i - 1][j + 1][0];

      dp[i][j][0] = top + right + self_count - dia;
      dp[i][j][1] = self_condi;
    } // el
  } // el

  return dp[len][1][0];
};

const s = "abc";
const out = countSubstrings(s);
console.log(out);
