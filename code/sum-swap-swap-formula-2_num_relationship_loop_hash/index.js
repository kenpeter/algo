// https://github.com/doocs/leetcode/tree/main/lcci/16.21.Sum%20Swap
// https://www.geeksforgeeks.org/find-a-pair-swapping-which-makes-sum-of-two-arrays-same/

// const sumSwap = (ns1, ns2) => {
//   let s1 = 0;
//   let s2 = 0;
//   for (let i = 0; i < ns1.length; ++i) {
//     s1 = s1 + ns1[i];
//   }

//   for (let i = 0; i < ns2.length; ++i) {
//     s2 = s2 + ns2[i];
//   }

//   for (let i = 0; i < ns1.length; ++i) {
//     for (let j = 0; j < ns2.length; ++j) {
//       const ss1 = s1 - ns1[i] + ns2[j];
//       const ss2 = s2 + ns1[i] - ns2[j];
//       if (ss1 === ss2) return [ns[i], ns[j]];
//     }
//   } // el

//   return [];
// };

const sumSwap = (ns1, ns2) => {
  let s1 = 0;
  let s2 = 0;
  const m = new Map();

  for (let i = 0; i < ns1.length; ++i) {
    s1 = s1 + ns1[i];
  }

  for (let i = 0; i < ns2.length; ++i) {
    m.set(ns2[i], true);
    s2 = s2 + ns2[i];
  }

  const diff = s1 - s2;
  if (diff % 2 !== 0) return false;

  for (let i = 0; i < ns1.length; ++i) {
    // (1) formular
    // s1 - ns[i] + ns[j] == s2 + ns[i] - ns[j];
    // s1 - s2 = 2*a - 2*b
    // (s1-s2) / 2 = a - b;

    const b = ns1[i] - diff / 2;

    // (2) convert formular to number in hash
    if (m.get(b) === true) {
      return [ns1[i], b];
    }
  }

  return [];
};

const ns1 = [4, 1, 2, 1, 1, 2]; // 11 -> 11 - 1 + 3; 11 - 4 + 6 = 13
const ns2 = [3, 6, 3, 3]; // 15 -> 15 - 3 + 1; 15 - 6 + 4 = 13
const out = sumSwap(ns1, ns2);
console.log(out);

// const ns1 = [1, 2, 3];
// const ns2 = [4, 5, 6];
// const out = sumSwap(ns1, ns2);
// console.log(out);
