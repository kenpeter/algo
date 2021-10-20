var intervalIntersection = function (fl, sl) {
  const res = [];
  let i = 0;
  let j = 0;

  let backCheck = false;
  while (i < fl.length && j < sl.length) {
    let s = fl[i][0];
    let e = fl[i][1];

    let i_s = sl[j][0];
    let i_e = sl[j][1];

    // inter
    if (i_s <= e && i_e >= s) {
      res.push([Math.max(i_s, s), Math.min(i_e, e)]);
      ++j; // still chance
    } else {
      // no inter, j break
      ++i;
    }
  } // el

  return res;
};

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
