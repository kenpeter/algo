var findMinArrowShots = function (pts) {
  pts.sort((a, b) => a[0] - b[0]);

  const inter = [pts[0]];

  for (let i = 1; i < pts.length; ++i) {
    // income
    const i_s = pts[i][0];
    const i_e = pts[i][1];

    const ele = inter.pop();
    const s = ele[0];
    const e = ele[1];
    if (e >= i_s) {
      inter.push([Math.max(i_s, s), Math.min(i_e, e)]);
    } else {
      inter.push(ele);
      inter.push([i_s, i_e]);
    }
  }

  return inter.length;
};

// const pts = [
//   [10, 16],
//   [2, 8],
//   [1, 6],
//   [7, 12],
// ];
// const out = findMinArrowShots(pts);
// console.log(out);

const pts = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];
const out = findMinArrowShots(pts);
console.log(out);
