// // sm: brute_force, low bound keep water
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

function trap(h) {
  // 0
  if (h.length === 0) return 0;

  // res
  let res = 0;
  // length
  let len = h.length;
  // lmax dp
  let lmax = {};
  // rmax dp
  let rmax = {};

  // itself is max
  lmax[0] = height[0];

  for (let i = 1; i < len; i++) {
    // i: curr max to left
    // i-1: prev max (among)
    // i+1: next ...
    // 0: 1st max
    // n-1: last max
    // dp[i]: curr max to left
    // dp[i-1]: prev max (among)
    // dp[i+1]: next ...
    // dp[0]: 1st (itself)
    // dp[n-1]: last max
    // f: prev is max (among)
    lmax[i] = Math.max(h[i], lmax[i - 1]);
  }

  // i: curr max to right
  // i-1: next max (among)
  // i-1: prev max
  // 0: last max
  // n-1: 1st max
  // dp[i]: curr max to right
  // dp[i-1]: next max
  // dp[i+1]: prev
  // dp[0]: last
  // dp[n-1]: 1st
  // f: prev is max (among)
  rmax[len - 1] = h[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    rmax[i] = Math.max(h[i], rmax[i + 1]);
  }

  for (let i = 0; i < h.length; i++) {
    res += Math.min(lmax[i], rmax[i]) - h[i];
  }

  return res;
}
