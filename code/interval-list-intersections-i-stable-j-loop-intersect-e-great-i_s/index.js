var intervalIntersection = function (fl, sl) {
  // res
  const res = [];

  // 1st
  for (let i = 0; i < fl.length; ++i) {
    // ex
    const s = fl[i][0];
    const e = fl[i][1];

    // 2nd
    for (let j = 0; j < sl.length; ++j) {
      // income
      const i_s = sl[j][0];
      const i_e = sl[j][1];

      // inter
      if (i_s <= e && i_e >= s) {
        // merge
        res.push([Math.max(i_s, s), Math.min(i_e, e)]);
      } else {
        // !inter
        if (e > i_s) {
          // next
          continue;
        } else {
          // stop, next loop
          break;
        }
      }
    } // el
  } // el

  return res;
};

// const fl = [[1, 3]];
// const sl = [
//   [2, 3],
//   [4, 5],
// ];
// const out = intervalIntersection(fl, sl);

const fl = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
const sl = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];
const out = intervalIntersection(fl, sl);
console.log(out);
