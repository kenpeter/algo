// var eraseOverlapIntervals = function (ins) {
//   // sort
//   ins.sort((a, b) => a[0] - b[0]);

//   // start, end as whole
//   let prev_in = ins[0];
//   // inject, then later i+1
//   const res = [prev_in];

//   for (let i = 1; i < ins.length; ++i) {
//     // able_to_cover
//     if (prev_in[1] > ins[i][0]) {
//       // * cannot take that item
//       // * new_end
//       if (i + 1 < ins.length) {
//         prev_in = ins[i + 1];
//       }
//     } else {
//       // not_able_to_cover
//       res.push(ins[i]);
//       prev_in = ins[i]; // new_end
//     }
//   }

//   return res.length;
// };

var eraseOverlapIntervals = function (ins) {
  // sort
  ins.sort((a, b) => a[0] - b[0]);

  let end = Number.MAX_SAFE_INTEGER;
  let count = 0;

  for (let i = 0; i < ins.length; ++i) {
    // able_to_cover (merge)
    if (end > ins[i][0]) {
      end = Math.min(end, ins[i][1]);
      ++count;
    } else {
      // not_able_to_cover (new)
      end = ins[i][1];
    }
  }

  return count;
};

// const input = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ];
// const out = eraseOverlapIntervals(input);
// console.log(out);

const input = [
  [1, 2],
  [1, 2],
  [1, 2],
];
const out = eraseOverlapIntervals(input);
console.log(out);