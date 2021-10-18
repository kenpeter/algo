// // sm:
// // * no care individual
// // * vitual merge (max_end_time)
// const freeTime = (arr) => {
//   const a = [];
//   // no care individual
//   for (let i = 0; i < arr.length; ++i) {
//     const inter = arr[i];
//     for (let j = 0; j < inter.length; ++j) {
//       const s = inter[j][0];
//       const e = inter[j][1];
//       a.push([s, e]);
//     }
//   }

//   a.sort((a, b) => a[0] - b[0]);

//   const res = [];
//   let max = a[0][1];
//   // virtual merge (max_end_time)
//   for (let i = 1; i < a.length; ++i) {
//     const s = a[i][0];
//     const e = a[i][1];

//     if (s > max) {
//       res.push([max, s]);
//     }

//     max = Math.max(max, e);
//   }

//   return res;
// };

// sm:
// * no care individual
// * actual merge
const freeTime = (arr) => {
  const a = [];
  // no care individual
  for (let i = 0; i < arr.length; ++i) {
    const inter = arr[i];
    for (let j = 0; j < inter.length; ++j) {
      const s = inter[j][0];
      const e = inter[j][1];
      a.push([s, e]);
    }
  }

  a.sort((a, b) => a[0] - b[0]);

  const res = [];
  const merge = [a[0]];

  // actual merge
  for (let i = 1; i < a.length; ++i) {
    // income
    const i_s = a[i][0];
    const i_e = a[i][1];

    // in queue
    const ele = merge.pop();
    const s = ele[0];
    const e = ele[1];

    // inter
    if (e >= i_s) {
      merge.push([Math.min(i_s, s), Math.max(i_e, e)]);
    } else {
      merge.push(ele);
      merge.push([i_s, i_e]);

      // gap
      res.push([e, i_s]);
    }
  } // el

  return res;
};

// const input = [
//   [
//     [1, 2],
//     [5, 6],
//   ],
//   [[1, 3]],
//   [[4, 10]],
// ];
// const out = freeTime(input);
// console.log(out);

const input = [
  [
    [1, 3],
    [6, 7],
  ],
  [[2, 4]],
  [
    [2, 5],
    [9, 12],
  ],
];
const out = freeTime(input);
console.log(out);
