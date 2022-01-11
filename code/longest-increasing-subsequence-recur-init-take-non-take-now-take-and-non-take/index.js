// m1
// var lis = function (dp, ns, n, i) {
//   if (n < 0) return 0;

//   if (dp[n][i] !== Number.MAX_SAFE_INTEGER) {
//     return dp[n][i];
//   }

//   // inc
//   if (ns[n] < ns[i]) {
//     return (dp[n][i] = Math.max(
//       lis(dp, ns, n - 1, n) + 1,
//       lis(dp, ns, n - 1, i)
//     ));
//   }

//   // !inc
//   if (ns[n] >= ns[i]) {
//     return (dp[n][i] = lis(dp, ns, n - 1, i));
//   }

//   return 0;
// };

// var lengthOfLIS = function (ns) {
//   const dp = Array(ns.length + 1)
//     .fill(Number.MAX_SAFE_INTEGER)
//     .map((_, i) => {
//       return Array(ns.length + 1).fill(Number.MAX_SAFE_INTEGER);
//     });
//   return lis(dp, ns, ns.length - 1, ns.length);
// };

// const ns = [4, 5];
// const out = lengthOfLIS(ns);
// console.log(out);

// m2
// var lengthOfLIS = function (ns) {
//     const t = [ns[0]];

//     for(let i=1; i<ns.length; ++i) {
//         const tar = ns[i];

//         let l = 0;
//         let r = t.length;
//         while(l < r) {
//             const ind = Math.floor((l+r)/2);
//             if(t[ind] < tar) {
//                 l = ind+1;
//             } else {
//                 r = ind;
//             }
//         }

//         if(l === t.length) {
//             t.push(tar);
//         } else {
//             t[l] = tar;
//         }
//     } // end loop

//     return t.length;
// };

// m3
// var lengthOfLIS = function (ns) {
//     // * init 1 len
//     const dp = new Array(ns.length).fill(1);
//     // * max 0
//     let max = 0;

//     for(let i=0; i<ns.length; ++i) {
//         for(let j=0; j<i; ++j) {
//             if(ns[j] < ns[i] && dp[j]+1 > dp[i]) {
//                 dp[i] = dp[j]+1;
//             }
//         } // el

//         max = Math.max(dp[i], max); // we want dp fill enough, then make decision
//     } // el

//     return max;
// };

// m4
// var lis = function(ns, i, p) {
//     if(i === ns.length) return 0;

//     let c1 = 0;
//     let c2 = 0;
//     if( p === -1 || (p !== -1 && ns[p] < ns[i]) ) {
//         c1 = 1 + lis(ns, i+1, i);
//     }

//     c2 = lis(ns, i+1, p);
//     const out = Math.max(c1, c2);
//     return out;
// }

// var lengthOfLIS = function (ns) {
//     return lis(ns, 0, -1);
// };

// m5
// var lengthOfLIS = function (ns) {
//     return lis(ns, 0, -1);
// };

// var lis = function(dp, ns, n, i) {
//     if(n < 0) return 0;

//     if(dp[n][i] !== -1) {
//         return dp[n][i];
//     }

//     // init end
//     if(i === ns.length) {
//         return dp[n][i] = Math.max( lis(dp, ns, n-1, n)+1, lis(dp, ns, n-1, i) );
//     }

//     // inc
//     if(ns[n] < ns[i]) {
//         return dp[n][i] = Math.max( lis(dp, ns, n-1, n)+1, lis(dp, ns, n-1, i) );
//     }

//     // !inc
//     if(ns[n] >= ns[i]) {
//         return dp[n][i] = lis(dp, ns, n-1, i);
//     }

//     return 0;
// }

// m6
// var recur = function (dp, ns, prev_i, curr_i, res) {
//   //
//   if (curr_i >= ns.length) {
//     return res;
//   }

//   if (prev_i !== -1 && dp[prev_i + 1][curr_i + 1] !== undefined) {
//     return dp[prev_i + 1][curr_i + 1];
//   }

//   // take
//   let out_1 = 0;
//   if (prev_i === -1) {
//     out_1 = recur(dp, ns, curr_i, curr_i + 1, res + 1);
//   } else if (ns[curr_i] > ns[prev_i]) {
//     out_1 = recur(dp, ns, curr_i, curr_i + 1, res + 1);
//   } else if (ns[curr_i] <= ns[prev_i]) {
//     out_1 = res;
//   }

//   // !take
//   let out_2 = 0;
//   out_2 = recur(dp, ns, prev_i, curr_i + 1, res);

//   const max = Math.max(out_1, out_2);
//   dp[prev_i + 1][curr_i + 1] = max;
//   return max;
// };

// // m7
// var lengthOfLIS = function (ns) {
//   if (ns.length === 1) return 1;

//   const prev_i = -1;
//   const curr_i = 0;
//   const res = 0;
//   return recur(ns, prev_i, curr_i, res);
// };

// // good
// var recur = function (ns, prev_i, curr_i, res) {
//   //
//   if (curr_i >= ns.length) {
//     return res;
//   }

//   // take
//   let out_1 = 0;
//   if (prev_i === -1) {
//     out_1 = recur(ns, curr_i, curr_i + 1, res + 1);
//   } else if (ns[curr_i] > ns[prev_i]) {
//     out_1 = recur(ns, curr_i, curr_i + 1, res + 1);
//   } else if (ns[curr_i] <= ns[prev_i]) {
//     out_1 = res;
//   }

//   // !take
//   let out_2 = 0;
//   out_2 = recur(ns, prev_i, curr_i + 1, res);

//   const max = Math.max(out_1, out_2);
//   return max;
// };

// m8
var recur = function (dp, ns, prev_i, curr_i, res) {
  //
  if (curr_i >= ns.length) {
    return res;
  }

  if (prev_i !== -1 && dp[prev_i + 1][curr_i + 1][res] !== undefined) {
    return dp[prev_i + 1][curr_i + 1];
  }

  // take
  let out_1 = 0;
  if (prev_i === -1) {
    out_1 = recur(dp, ns, curr_i, curr_i + 1, res + 1);
  } else if (ns[curr_i] > ns[prev_i]) {
    out_1 = recur(dp, ns, curr_i, curr_i + 1, res + 1);
  } else if (ns[curr_i] <= ns[prev_i]) {
    out_1 = res;
  }

  // !take
  let out_2 = 0;
  out_2 = recur(dp, ns, prev_i, curr_i + 1, res);

  const max = Math.max(out_1, out_2);
  dp[prev_i + 1][curr_i + 1][res] = max;
  return max;
};

var lengthOfLIS = function (ns) {
  if (ns.length === 1) return 1;

  const dp = Array(ns.length + 1)
    .fill(undefined)
    .map((_, i) => {
      return Array(ns.length + 1)
        .fill(undefined)
        .map((_, j) => {
          return Array(ns.length + 1).fill(undefined);
        });
    });

  const prev_i = -1;
  const curr_i = 0;
  const res = 0;
  return recur(dp, ns, prev_i, curr_i, res);
};

// const ns = [50, 1, 2];
// const out = lengthOfLIS(ns);
// console.log(out); // 2

// const ns = [10, 9, 2, 5, 3, 7, 101, 18];
// const out = lengthOfLIS(ns);
// console.log(out); // 4

// const ns = [0, 1, 0, 3, 2, 3];
// const out = lengthOfLIS(ns);
// console.log(out); // 4

// const ns = [7, 7, 7, 7, 7, 7, 7];
// const out = lengthOfLIS(ns);
// console.log(out); // 1

const ns = [5, 4, 19, 5, 7, 12];
const out = lengthOfLIS(ns);
console.log(out); // 4
