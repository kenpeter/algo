// // sm: start, end as whole; sort, keep_extending (not inject yet)
// var merge = function (ins) {
//   // start_pt (asc)
//   ins.sort((a, b) => a[0] - b[0]);

//   const res = [];
//   // start, end as whole
//   let prev_in = ins[0];
//   res.push(prev_in);

//   for (let i = 0; i < ins.length; ++i) {
//     // able_to_cover
//     if (prev_in[1] >= ins[i][0]) {
//       // sort, keep extending (not inject yet), until not_able_to_cover
//       prev_in[1] = Math.max(prev_in[1], ins[i][1]);
//     } else {
//       // not_able_to_cover
//       res.push(ins[i]);
//       prev_in = ins[i];
//     }
//   }

//   return res;
// };

// const input = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// const out = merge(input);
// console.log(out);

// sm: 2 ele merge -> new_ele, compare next_ele; merge -> min_start, max_end
var merge = function (ins) {
  ins.sort((a, b) => {
    return a[0] - b[0];
  });

  const res = [];
  res.push(ins[0]);

  for (let i = 1; i < ins.length; ++i) {
    const prev = res[res.length - 1];
    const curr = ins[i];

    // merge: min_start, max_end
    if (prev[1] >= curr[0]) {
      const ele = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      res.pop();
      res.push(ele);
    } else {
      res.push(curr);
    }
  }

  return res;
};

const input = [
  [1, 4],
  [4, 5],
];
const out = merge(input);
console.log(out);
