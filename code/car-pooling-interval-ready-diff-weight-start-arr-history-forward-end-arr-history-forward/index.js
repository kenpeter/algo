var carPooling = function (ts, cap) {
  const s_a = [];
  const e_a = [];

  // start arr
  for (let i = 0; i < ts.length; ++i) {
    const w = ts[i][0];
    const s = ts[i][1];
    const obj = [s, w];
    s_a.push(obj);
  }
  s_a.sort((a, b) => a[0] - b[0]);

  // end arr
  for (let i = 0; i < ts.length; ++i) {
    const w = ts[i][0];
    const e = ts[i][2];
    const obj = [e, w];
    e_a.push(obj);
  }
  e_a.sort((a, b) => a[0] - b[0]);

  // history forward
  let i = 0;
  let j = 0;
  let ac = 0;
  while (i < s_a.length && j < e_a.length) {
    if (s_a[i][0] < e_a[j][0]) {
      ac = ac + s_a[i][1];
      ++i;
    } else {
      ac = ac - e_a[j][1];
      ++j;
    }

    if (ac > cap) {
      return false;
    }
  } // el

  return true;
};

const ts = [
  [7, 5, 6],
  [6, 7, 8],
  [10, 1, 6],
];
const cap = 16;
const out = carPooling(ts, cap);
console.log(out);
