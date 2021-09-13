// const subarraySum = (ns, k) => {
//   let s = 0;
//   const m = new Map();

//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     s = s + n;
//     const ind = s - k;

//     if (m.get(ind) !== undefined) {
//       if (ind === 0) {
//         return [1, i + 1];
//       } else {
//         return [m.get(ind) + 2, i + 1];
//       }
//     }

//     m.set(s, i);
//   }

//   return -1;
// };

// const ns = [
//   142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191,
//   43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30,
//   24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83,
//   130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71,
//   30, 178, 174, 98, 113,
// ];
// const k = 665;
// const out = subarraySum(ns, k);
// console.log(out);

// // sm: slide_win: right_end bit by bit, left_end loop reduce
// const subarraySum = (ns, n, k) => {
//   let s = 0;
//   // let a = []; // do we need this? a <-> ns
//   let start = 0;

//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     s = s + n;
//     // a.push(n); // do we need this? a <-> ns

//     // note: we don't need this checking, because too much reduce, also check at the end
//     // // all_the_way
//     // if (s === k) {
//     //   return [start + 1, i + 1];
//     // }

//     while (s > k) {
//       // do we need this? a <-> ns
//       // const ele = a.shift();
//       // s = s - ele;

//       s = s - ns[start];
//       ++start;
//     }

//     // presum
//     if (s === k) {
//       return [start + 1, i + 1];
//     }
//   }

//   return [-1];
// };

// const ns = [
//   142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191,
//   43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30,
//   24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83,
//   130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71,
//   30, 178, 174, 98, 113,
// ];
// const k = 12;
// const out = subarraySum(ns, k);
// console.log(out);

// const subarraySum = (ns, len, tar) => {
//   let s = 0;
//   let i = 0;
//   let j = 0;

//   // right_end bit by bit
//   while (j < ns.length) {
//     // slide_win
//     s = s + ns[j];

//     // no check here, we check at the end

//     // * left_end loop reduce
//     // * reduce a single ele
//     while (i <= j && s > tar) {
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

const subarraySum = (ns, n, tar) => {
  let j = 0;
  let i = 0;
  let s = 0;

  while (j < ns.length) {
    // win (right_end bit by bit)
    s = s + ns[j];

    // left_end (left_end loop reduce)
    while (i <= j && s > tar) {
      s = s - ns[i++];
    }

    // check (after reduce, check; after win inc, check)
    if (s === tar) {
      return [i + 1, j + 1];
    }

    // right_end (right_end bit by bit)
    ++j;
  }

  return [-1];
};

const k = 12;
const ns = [1, 2, 3, 7, 5];
const n = 5;
const out = subarraySum(ns, n, k);
console.log(out);