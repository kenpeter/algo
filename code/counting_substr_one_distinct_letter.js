// https://helloacm.com/counting-substrings-with-only-one-distinct-letter-with-different-algorithms/

const countLetters = (s) => {
  // ans
  let ans = 0;
  // i_start
  let i = 0;
  // j_start
  let j = 0;

  // each letter
  while (i < s.length) {
    // consecutive
    while (j < s.length && s[j] === s[i]) {
      ++j;
      ++ans;
    }

    j = ++i;
  }
  return ans;
};

let out = countLetters("aaaba");
console.log("+++ out", out);

// out = countLetters("aaaaaaaaaa");
// console.log("+++ out", out);

// // [aaabc]; a1, a2, a3, b1, c1; 1+2+3+1+1=8
// // dp
// const countLetters = (s) => {
//   // each letter is 1 freq
//   const dp = Array(s.length).fill(1);
//   // i=1, i<s.len; look_back
//   for (let i = 1; i < s.length; ++i) {
//     if (s[i] === s[i - 1]) {
//       // curr_state = prev_state
//       dp[i] = dp[i - 1] + dp[i];
//     }
//   }

//   return dp.reduce((acc, a) => {
//     return acc + a;
//   });
// };

// let out = countLetters("aaaba");
// console.log("+++ out", out);

// out = countLetters("aaaaaaaaaa");
// console.log("+++ out", out);
