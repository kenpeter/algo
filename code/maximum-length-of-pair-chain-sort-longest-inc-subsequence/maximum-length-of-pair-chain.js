// https://stackoverflow.com/questions/9175268/javascript-sort-function-sort-by-first-then-by-second
// * 1st col, then 2nd col OR 1st col
// * bigger than all prev
var findLongestChain = function (ps) {
  ps.sort((a, b) => {
    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    }

    if (a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else {
      return 0;
    }
  });

  const dp = Array(ps.length).fill(1);

  for (let i = 0; i < ps.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (ps[j][1] < ps[i][0]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
        }
      }
    }
  }

  return dp[ps.length - 1];
};

// [1, 2] -> [2, 3] -> [3, 4]
const ns = [
  [1, 2],
  [2, 3], // ! bigger than all prev
  [3, 4], // bigger than all prev
];

// // [1, 2] -> [4, 5] -> [7, 8]
// const ns = [
//   [1, 2],
//   [7, 8], // bigger than all prev
//   [4, 5], // bigger than all prev
// ];

// // [1, 1000] -> [1, 1000] -> [1, 1001] -> [2, 5]
// const ns = [
//   [2, 5],
//   [1, 1000], // ! bigger than all prev
//   [1, 1000], // ! bigger than all prev
//   [1, 1001], // ! bigger than all prev
// ];
const out = findLongestChain(ns);
console.log(out);
