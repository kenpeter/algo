// /**
//  * @param {string} s
//  * @return {string}
//  */

// const isPal = (a, i, j) => {
//   while (i <= j) {
//     if (a[i] === a[j]) {
//       ++i;
//       --j;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };

// var longestPalindrome = function (s) {
//   const a = s.split("");
//   let max = 0;
//   let res = "";

//   // no-check-self, 2 loop
//   for (let i = 0; i < a.length; ++i) {
//     for (let j = i; j < a.length; ++j) {
//       // efficency, no-met-skip
//       if (j - i < max) continue;

//       if (isPal(a, i, j)) {
//         if (j - i >= max) {
//           max = j - i;
//           res = s.substring(i, j + 1);
//         }
//       }
//     }
//   }

//   return res;
// };

var longestPalindrome = function (a) {
  const dp = Array(a.length);
  for (let i = 0; i < a.length; ++i) {
    dp[i] = Array(a.length).fill(false);
  }

  let res = "";
  let max = 0;
  for (let i = 0; i < a.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      if (a[i] === a[j]) {
        if (i - j <= 2) {
          dp[i][j] = true;
          if (i - j >= max) {
            max = i - j;
            res = a.substring(j, i + 1);
          }
        } else if (dp[i - 1][j + 1] === true) {
          dp[i][j] = true;
          if (i - j >= max) {
            max = i - j;
            res = a.substring(j, i + 1);
          }
        } else {
          dp[i][j] = false;
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  //test
  console.log(dp);

  return res;
};

// var longestPalindrome = function (s) {
//   const m = s.length;
//   const n = m;
//   let mj = -1;
//   let mi = -1;

//   const dp = Array(m).fill(false);
//   for (let i = 0; i < n; i++) {
//     dp[i] = Array(m).fill(false);
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (s[i] === s[j]) {
//         if (i - j <= 2) {
//           dp[i][j] = true;
//           if (i - j >= mi - mj) {
//             mj = j;
//             mi = i;
//           }
//         } else if (dp[i - 1][j + 1]) {
//           dp[i][j] = true;
//           if (i - j >= mi - mj) {
//             mj = j;
//             mi = i;
//           }
//         } else {
//           dp[i][j] = false;
//         }
//       } else {
//         dp[i][j] = false;
//       }
//     }
//   }
//   const out = s.substring(mj, mi + 1);

//   //console.log('++++ dp', dp, 'mi', mi, 'mj', mj, 'out', out);

//   return out;
// };

const input = "aaaa";
const out = longestPalindrome(input);
console.log(out);
