// https://leetcode.com/playground/XzYJCYHq
// https://leetcode.com/discuss/interview-question/1517196/Amazon-or-OA-2021-or-Hackerrank

// int[] nums = new int[]{0, 0, 1, 0, 1, 0, 1, 1 }; // 3
// int[] nums = new int[]{0, 1, 0, 1}; // 1
// int[] nums = new int[]{1, 1 , 1, 0, 1}; // 1
// int[] nums = new int[]{1, 1, 1, 0, 0}; // 0
// int[] nums = new int[]{1, 0, 1, 0, 0, 0, 0, 1}; // 6

const findMinSwaps = (ns) => {
  const ns1 = ns.slice(0);
  // right to left
  let rightRes = 0;

  let zeroInd = ns.length - 1;
  let oneInd = ns.length - 1;
  while (zeroInd >= 0 && oneInd >= 0) {
    while (zeroInd >= 0) {
      if (ns[zeroInd] !== 0) {
        --zeroInd;
        continue;
      }
      break;
    } // el

    oneInd = zeroInd - 1;
    while (oneInd >= 0) {
      if (ns[oneInd] !== 1) {
        --oneInd;
        continue;
      }
      break;
    } // el

    if (zeroInd < 0 || oneInd < 0) break;

    // res
    const d = zeroInd - oneInd;
    rightRes = rightRes + d;

    // swap
    ns[zeroInd] = 1;
    ns[oneInd] = 0;
    --zeroInd;
  } // el

  // left to right
  let leftRes = 0;
  zeroInd = 0;
  oneInd = 0;
  while (zeroInd < ns1.length && oneInd < ns1.length) {
    while (zeroInd < ns1.length) {
      if (ns1[zeroInd] !== 0) {
        ++zeroInd;
        continue;
      }
      break;
    } // el

    oneInd = zeroInd + 1;
    while (oneInd < ns1.length) {
      if (ns1[oneInd] !== 1) {
        ++oneInd;
        continue;
      }
      break;
    } // el

    if (zeroInd >= ns1.length || oneInd >= ns1.length) break;

    // res
    const d = oneInd - zeroInd;
    leftRes = leftRes + d;

    // swap
    ns1[zeroInd] = 1;
    ns1[oneInd] = 0;
    ++zeroInd;
  } // el

  return Math.min(rightRes, leftRes);
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

const ns = [1, 0, 1, 0, 0, 0, 0, 1]; // 6
const out = findMinSwaps(ns);
console.log(out);
