// https://leetcode.com/problems/high-five
// https://www.cnblogs.com/cnoodle/p/13722300.html

const myinsert = (h, ind, v) => {
  if (h[ind] === undefined) {
    // 0, 1, 2, 3, 4
    const n = -Number.MAX_SAFE_INTEGER;
    h[ind] = [v, n, n, n, n];
    return;
  }

  const a = h[ind];

  let m0 = a[0];
  let m1 = a[1];
  let m2 = a[2];
  let m3 = a[3];
  let m4 = a[4];

  if (v > m0) {
    m4 = m3;
    m3 = m2;
    m2 = m1;
    m1 = m0;
    m0 = v;
  } else if (v > m1) {
    m4 = m3;
    m3 = m2;
    m2 = m1;
    m1 = v;
  } else if (v > m2) {
    m4 = m3;
    m3 = m2;
    m2 = v;
  } else if (v > m3) {
    m4 = m3;
    m3 = v;
  } else if (v > m4) {
    m4 = v;
  }

  h[ind] = [m0, m1, m2, m3, m4];
  return;
};

const highFive = (a) => {
  const h = {};
  for (let i = 0; i < a.length; ++i) {
    const ind = a[i][0];
    const val = a[i][1];
    myinsert(h, ind, val);
  }

  const res = [];
  for (let i in h) {
    const a = h[i];
    const s = a.reduce((acc, t) => {
      return acc + t;
    }, 0);
    const m = Math.floor(s / 5);
    res.push([i, m]);
  }

  return res;
};

const input = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];

const out = highFive(input);
console.log(out);
