// https://helloacm.com/counting-substrings-with-only-one-distinct-letter-with-different-algorithms/

const countLetters = (s) => {
  let ans = 0;
  let i = 0;
  let j = 0;
  // aaabc, go for each letter
  while (i < s.length) {
    // * j start same as i
    // * consecutive
    while (j < s.length && s[j] === s[i]) {
      ++j;
      ++ans;
    }

    // start another letter
    j = ++i;
  }
  return ans;
};

// let out = countLetters("aaaba");
// console.log("+++ out", out);

// out = countLetters("aaaaaaaaaa");
// console.log("+++ out", out);

// dp
const countLetters = (s) => {
  const dp = Array(s.length);
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === s[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
};
