// var jump = function (ns) {
//   const dp = Array(ns.length).fill(0);

//   for (let i = 1; i < ns.length; ++i) {
//     for (let j = 0; j < i; ++j) {
//       const ind = i - j;
//       const max = ns[j];
//       if (max >= ind) {
//         const steps = dp[j] + 1;
//         if (dp[i] === 0) {
//           dp[i] = steps;
//         } else if (steps < dp[i]) {
//           dp[i] = steps;
//         } else {
//           // do nothing
//         }
//       } else {
//         // do nothing
//       }
//     } // el
//   } // el

//   return dp[dp.length - 1];
// };

// var recur = function (ns, ind) {
//   if (ind >= ns.length - 1) {
//     return 0;
//   }

//   // not able to reach
//   if (ind <= ns.length - 1 && ns[ind] === 0) {
//     return 0;
//   }

//   let min = Number.MAX_SAFE_INTEGER;
//   const steps = ns[ind];
//   for (let i = 1; i <= steps; ++i) {
//     min = Math.min(min, 1 + recur(ns, ind + i));
//   }

//   return min;
// };

// var jump = function (ns) {
//   return recur(ns, 0);
// };

var recur = function (dp, ns, ind) {
  if (ind >= ns.length - 1) {
    return 0;
  }

  if (dp[ind] !== undefined) {
    return dp[ind];
  }

  let min = Number.MAX_SAFE_INTEGER;
  const steps = ns[ind];
  for (let i = 1; i <= steps; ++i) {
    min = Math.min(min, 1 + recur(dp, ns, ind + i));
  }

  dp[ind] = min;
  return min;
};

var jump = function (ns) {
  const dp = Array(ns.length).fill(undefined);
  return recur(dp, ns, 0);
};

// const ns = [2, 3, 1, 1, 4];
// const out = jump(ns);
// console.log(out);

const ns = [1, 2];
const out = jump(ns);
console.log(out);
