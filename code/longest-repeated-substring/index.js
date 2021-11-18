// // sm: brute force, all substr, hash (appear at least twice)
// const longestRepeatedSubstring = (s) => {
//   const m = new Map();
//   let max = 0;

//   for (let i = 0; i < s.length; ++i) {
//     for (let j = 0; j <= i; ++j) {
//       const sub = s.substring(j, i + 1);
//       const condi = m.get(sub);

//       if (condi !== undefined) {
//         max = Math.max(max, sub.length);
//       } else {
//         m.set(sub, true);
//       }
//     } // el
//   } // el

//   return max;
// };

// sm: brute force, all substr, hash (appear at least twice)
const longestRepeatedSubstring = (s) => {
  const dp = [];
  for (let i = 0; i <= s.length; ++i) {
    dp[i] = Array(s.length + 1).fill(0);
  }

  let max = 0;
  for (let i = 1; i <= s.length; ++i) {
    for (let j = i + 1; j <= s.length; ++j) {
      if (s[i - 1] === s[j - 1]) {
        max = Math.max(max, 1 + dp[i - 1][j - 1]);
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = 0;
      }
    } // el
  } // el

  //console.log(dp);

  return max;
};

// const s = "abc";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "aa";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "abbaba";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "aaaaa";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "aabcaabdaac";
// const out = longestRepeatedSubstring(s);
// console.log(out);

const s = "banana";
const out = longestRepeatedSubstring(s);
console.log(out);
