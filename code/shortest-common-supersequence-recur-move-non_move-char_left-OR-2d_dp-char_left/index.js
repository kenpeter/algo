// // method 1:
// function rc(s1, s2, i1 = 0, i2 = 0) {
//   if (i1 >= s1.length) return s2.slice(i2); // rest of s2
//   if (i2 >= s2.length) return s1.slice(i1); // rest of s1

//   if (s1[i1] === s2[i2]) return s1[i1] + rc(s1, s2, i1 + 1, i2 + 1); // same char, use either

//   const useS1 = s1[i1] + rc(s1, s2, i1 + 1, i2); // try use s1's char
//   const useS2 = s2[i2] + rc(s1, s2, i1, i2 + 1); // try use s2's char

//   return useS1.length < useS2.length ? useS1 : useS2; // pick the shorter one
// }

// function shortestCommonSupersequence(s1, s2) {
//   return rc(s1, s2, 0, 0);
// }

// function shortestCommonSupersequence(s1, s2) {
//   return rc(s1, s2, 0, 0);
// }

// // method 2:
function shortestCommonSupersequence(s1, s2) {
  // arr, fill, map
  const dp = Array(s1.length + 1)
    .fill("")
    .map((_, i) =>
      Array(s2.length + 1)
        .fill("")
        .map((_, j) => {
          if (i === 0 && j > 0) return s2.slice(0, j);
          if (j === 0 && i > 0) return s1.slice(0, i);
          return "";
        })
    );

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

  console.log(dp);
}

const s1 = "abac";
const s2 = "cab";
shortestCommonSupersequence(s1, s2);
