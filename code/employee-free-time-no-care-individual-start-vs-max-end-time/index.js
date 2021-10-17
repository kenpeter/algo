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
  let max = a[0][1];
  // start vs max_end_time
  for (let i = 1; i < a.length; ++i) {
    const s = a[i][0];
    const e = a[i][1];

    if (s > max) {
      res.push([max, s]);
    }

    max = Math.max(max, e);
  }

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
