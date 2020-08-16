// https://www.techiedelight.com/rot-cutting/
// https://leetcode.com/discuss/interview-question/613310/microsoft-rod-cutting

const hash = {
  1: 1,
  2: 5,
  3: 8,
  4: 9,
  5: 10,
  6: 17,
  7: 17,
  8: 20,
};

const cut = (hash, len) => {
  const dp = Array(len + 1).fill(0);

  for (let i = 1; i <= len; i++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 1; j <= i; j++) {
      if (dp[i - j] + hash[j] > max) {
        max = dp[i - j] + hash[j];
      }
    }

    dp[i] = max;
  }

  return dp[dp.length - 1];
};

const len = 4;
const out = cut(hash, len);
console.log("+++++ out", out);
