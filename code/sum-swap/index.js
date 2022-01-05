// https://github.com/doocs/leetcode/tree/main/lcci/16.21.Sum%20Swap

const sumSwap = (ns1, ns2) => {
  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < ns1.length; ++i) {
    s1 = s1 + ns1[i];
  }

  for (let i = 0; i < ns2.length; ++i) {
    s2 = s2 + ns2[i];
  }

  for (let i = 0; i < ns1.length; ++i) {
    for (let j = 0; j < ns2.length; ++j) {
      const ss1 = s1 - ns1[i] + ns2[j];
      const ss2 = s2 + ns1[i] - ns2[j];
      if (ss1 === ss2) return true;
    }
  } // el

  return false;
};

// const ns1 = [4, 1, 2, 1, 1, 2];
// const ns2 = [3, 6, 3, 3];
// const out = sumSwap(ns1, ns2);
// console.log(out);

const ns1 = [1, 2, 3];
const ns2 = [4, 5, 6];
const out = sumSwap(ns1, ns2);
console.log(out);
