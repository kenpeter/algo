// function subarraySum(ns, k) {
//   let s = 0;
//   let c = 0;
//   const m = new Map();

//   // e.g. ns[i] == 4, k == 4
//   //m.set(0, 1);

//   for (let i = 0; i < ns.length; ++i) {
//     // pre-sum VS ele
//     s = s + ns[i];

//     // related_met_before
//     if (m.has(s - k)) {
//       c = c + m.get(s - k);
//     }

//     // direct_met_before
//     if (m.has(s)) {
//       m.set(s, m.get(s) + 1);
//     } else {
//       m.set(s, 1);
//     }

//     if (s === k) {
//       ++c;
//     }
//   }

//   return c;
// }

// // const input = [1, 2, 3];
// // const k = 3;
// // const out = subarraySum(input, k);
// // console.log(out);

// const input = [3, 4, 3, 8];
// const k = 7;
// const out = subarraySum(input, k);
// console.log(out);

// // sm: brute_force, i_stable, j_extend
// https://leetcode.com/problems/subarray-sum-equals-k/discuss/779739/java-SLIDING-WINDOW-2POINTERS.-ACCEPTED.-!!-O(N2)
// function subarraySum(ns, k) {
//   // res
//   let res = 0;

//   // when num is the result
//   for (let i = 0; i < ns.length; i++) {
//     if (ns[i] === k) {
//       res++;
//     }
//   }

//   let l = 0;
//   let r = 1;

//   // at least 2 ele
//   while (l < ns.length - 1) {
//     // 2sum
//     let initSum = ns[l] + ns[r];

//     // 2sum
//     if (initSum === k) {
//       res++;
//     }

//     // running sum
//     let runningSum = initSum;

//     // >= 3sum
//     let pt = r + 1;

//     // do within window range
//     while (pt < ns.length) {
//       runningSum = runningSum + ns[pt];
//       if (runningSum == k) {
//         res++;
//       }
//       pt++;
//     }

//     l++;
//     r++;
//   } // end while

//   return res;
// }

// const input = [1, 2, 3];
// const k = 3;
// const out = subarraySum(input, k);
// console.log(out);

// https://leetcode.com/problems/subarray-sum-equals-k/discuss/394103/Sliding-Window-O(N2)-then-optimised-to-O(N)-using-Dictionary
function subarraySum(ns, k) {
  let c = 0;

  for (let j = 0; j < ns.Length; ++j) {
    let s = 0;
    for (let i = 0; i < ns.Length; ++i) {
      s += ns[i];
      if (i >= j) {
        if (s === k) {
          ++c;
        }
        s -= ns[i - j];
      }
    }
  }

  return c;
}
