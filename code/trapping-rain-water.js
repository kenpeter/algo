// // sm: brute_force (search_max_left, search_max_right), each_slot
// function trap(h) {
//   if (h == null || h.length === 0) return 0;

//   let res = 0;
//   for (let i = 0; i < h.length; i++) {
//     let lMax = 0; // * left reset, right reset
//     let rMax = 0;

//     for (let j = 0; j < i; j++) {
//       // left bound
//       lMax = Math.max(lMax, h[j]);
//     }

//     for (let j = i + 1; j < h.length; j++) {
//       // right bound
//       rMax = Math.max(rMax, h[j]);
//     }

//     const water = Math.min(lMax, rMax) - h[i];

//     // <0, no need
//     if (water > 0) res += water;
//   }

//   return res;
// }

// const input = [4, 2, 0, 3, 2, 5];
// const out = trap(input);
// console.log("++", out);

// // sm: each_var_meaing (dp), at_certain_i, dp_left, dp_right
// var trap = function (h) {
//   if (h.length === 0) return 0;

//   const lmax = {};
//   const rmax = {};
//   let res = 0;
//   const len = h.length;

//   // prepare before
//   // i: curr max so far (left)
//   // i-1: prev max
//   // i+1: next ..
//   // 0: init max
//   // n-1: last max
//   // dp[i]: curr max so far (left)
//   // dp[i-1]: ..
//   // dp[i+1]: ..
//   // dp[0]: init max
//   // dp[n-1]: last max
//   // f: max so far (left)
//   // forward
//   lmax[0] = h[0];
//   for (let i = 1; i < len; ++i) {
//     lmax[i] = Math.max(h[i], lmax[i - 1]);
//   }

//   // prepare before
//   // i: curr max so far (right)
//   // i-1: next max
//   // i+1: prev ..
//   // 0: last max
//   // n-1: init max
//   // dp[i]: curr max so far (right)
//   // dp[i-1]: next ..
//   // dp[i+1]: prev ..
//   // dp[0]: last ..
//   // dp[n-1]: prev ..
//   // f: max so far (right)
//   // backward
//   rmax[len - 1] = h[len - 1];
//   for (let i = len - 2; i >= 0; --i) {
//     rmax[i] = Math.max(h[i], rmax[i + 1]);
//   }

//   for (let i = 0; i < len; ++i) {
//     res = res + Math.min(lmax[i], rmax[i]) - h[i];
//   }

//   return res;
// };

// const input = [4, 2, 0, 3, 2, 5];
// const out = trap(input);
// console.log("++", out);

// sm: 2 pt, how_they_move (meet each); each_slot; small_move (already consumed)
function trap(h) {
  if (h.length === 0) return 0;

  let l = 0;
  let r = h.length - 1;

  let lmax = 0;
  let rmax = 0;
  let res = 0;

  // 2pt, how_they_move (meet each)
  while (l < r) {
    // * keep track of left max
    // * low cannot keep water, high can keep water
    // * self will not be cal
    lmax = Math.max(lmax, h[l]);

    // * low bound is strongest
    // * self will not be cal
    if (h[l] < lmax) {
      res += lmax - h[l];
    }

    // * keep track of right max
    // * low cannot keep water, high can keep water
    // * self will not be cal
    rmax = Math.max(rmax, h[r]);

    // * low bound is strongest
    // * self will not be cal
    if (h[r] < rmax) {
      res += rmax - h[r];
    }

    // small move (because already consumed, so move)
    h[l] >= h[r] ? l++ : r--;
  }

  return res;
}

// const input = [4, 2, 0, 3, 2, 5];
// const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const input = [5, 4, 3, 1, 1, 2, 4, 5];
const out = trap(input);
console.log("++", out);
