// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1#

// // * expand_win_right (in_sync), shrink_win_left (cycle)
// const subarraySum = (ns, len, tar) => {
//   let s = 0;
//   let i = 0;
//   let j = 0;

//   // * j end_ind, so check_bound
//   while (j < ns.length) {
//     // expand_win_right (in_sync)
//     s = s + ns[j];

//     // shrink_win_left (cycle)
//     while (i < ns.length && s > tar) {
//       s = s - ns[i];
//       ++i;
//     }

//     if (s === tar) {
//       return [i + 1, j + 1];
//     }

//     ++j;
//   }

//   return [-1];
// };

const subarraySum = (ns, len, tar) => {
  const h = {};
  let s = 0;

  // loop ele
  for (let i = 0; i < ns.length; ++i) {
    // curr_sum
    s = s + ns[i];

    // hash(prev_sum)
    if (h[s - tar] !== undefined) {
      return [h[s - tar] + 1, i];
    }

    // hash
    if (h[s] === undefined) h[s] = i;
  }

  return [-1];
};

// const ns = [1, 2, 3, 7, 5];
// const len = 5;
// const tar = 12;
// const out = subarraySum(ns, len, tar);
// console.log("++ out", out);

const ns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const len = 10;
const tar = 15;
const out = subarraySum(ns, len, tar);
console.log("++ out", out);
