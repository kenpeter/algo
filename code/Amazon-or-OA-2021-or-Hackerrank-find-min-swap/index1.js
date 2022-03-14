// https://leetcode.com/playground/XzYJCYHq
// https://leetcode.com/discuss/interview-question/1517196/Amazon-or-OA-2021-or-Hackerrank

// int[] nums = new int[]{0, 0, 1, 0, 1, 0, 1, 1 }; // 3
// int[] nums = new int[]{0, 1, 0, 1}; // 1
// int[] nums = new int[]{1, 1 , 1, 0, 1}; // 1
// int[] nums = new int[]{1, 1, 1, 0, 0}; // 0
// int[] nums = new int[]{1, 0, 1, 0, 0, 0, 0, 1}; // 6

const findMinSwaps = (ns) => {
  let oneInd = 0;
  let zeroInd = 0;
  let oneRes = 0;
  let zeroRes = 0;
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    if (n === 1) {
      oneRes = oneRes + (i - oneInd);
      ++oneInd;
    } else if (n === 0) {
      zeroRes = zeroRes + (i - zeroInd);
      ++zeroInd;
    }
  } // el

  return Math.min(zeroRes, oneRes);
};

// const ns = [0, 0, 1, 0, 1, 0, 1, 1]; // 3
// const out = findMinSwaps(ns);
// console.log(out);

// const ns = [0, 1, 0, 1]; // 1
// const out = findMinSwaps(ns);
// console.log(out);

// const ns = [1, 1, 1, 0, 1]; // 1
// const out = findMinSwaps(ns);
// console.log(out);

// const ns = [1, 1, 1, 0, 0]; // 0
// const out = findMinSwaps(ns);
// console.log(out);

// const ns = [1, 0, 1, 0, 0, 0, 0, 1]; // 6
// const out = findMinSwaps(ns);
// console.log(out);

const ns = [1, 0, 0, 1]; // 2
const out = findMinSwaps(ns);
console.log(out);
