// var longestPalindrome = function (s) {
//   const dp = [];
//   for (let i = 0; i <= s.length; ++i) {
//     dp[i] = Array(s.length + 1);
//     for (let j = 0; j <= s.length; ++j) {
//       dp[i][j] = [false, 0];
//     } // el
//   } // el

//   let max = 0;
//   let i_max = -1;
//   let j_max = -1;

//   for (let i = 1; i <= s.length; ++i) {
//     for (let j = i; j >= 1; --j) {
//       const len = i - j + 1;
//       if (s[i - 1] === s[j - 1]) {
//         if (len <= 3) {
//           dp[i][j][0] = true;
//           dp[i][j][1] = len;
//         } else {
//           if (dp[i - 1][j + 1][0]) {
//             dp[i][j][0] = true;
//             dp[i][j][1] = 2 + dp[i - 1][j + 1][1];
//           } else {
//             // do nothing
//           }
//         }
//       } else {
//         // do nothing
//       }

//       if (dp[i][j][1] > max) {
//         i_max = i - 1;
//         j_max = j - 1;
//         max = dp[i][j][1];
//       }
//     } // el
//   } // el

//   const sub = s.substring(j_max, i_max + 1);
//   return sub;
// };

var longestPalindrome = function (s) {
  const dp = [];
  for (let i = 0; i <= s.length; ++i) {
    dp[i] = Array(s.length + 1).fill(false);
  } // el

  let max = 0;
  let i_max = -1;
  let j_max = -1;
  let tmp_len = 0;

  for (let i = 1; i <= s.length; ++i) {
    for (let j = i; j >= 1; --j) {
      if (s[i - 1] === s[j - 1]) {
        tmp_len = i - j + 1;
        if (tmp_len <= 3) {
          dp[i][j] = true;
          if (tmp_len > max) {
            i_max = i - 1;
            j_max = j - 1;
            max = tmp_len;
          }
        } else {
          if (dp[i - 1][j + 1]) {
            dp[i][j] = true;
            if (tmp_len > max) {
              i_max = i - 1;
              j_max = j - 1;
              max = tmp_len;
            }
          } else {
            // do nothing
          }
        }
      } else {
        // do nothing
      }
    } // el
  } // el

  const sub = s.substring(j_max, i_max + 1);
  return sub;
};

// const s = "a"; // a
// const out = longestPalindrome(s);
// console.log(out);

// const s = "babad"; // bab
// const out = longestPalindrome(s);
// console.log(out);

// const s = "cbbd"; // bb
// const out = longestPalindrome(s);
// console.log(out);

// const s = "ac"; // a
// const out = longestPalindrome(s);
// console.log(out);

// const s = "aaaa"; // aaaa
// const out = longestPalindrome(s);
// console.log(out);
