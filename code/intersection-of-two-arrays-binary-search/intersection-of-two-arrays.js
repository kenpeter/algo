var bs = function (a, tar) {
  let l = 0;
  let r = a.length;

  while (l < r) {
    const ind = Math.floor((l + r) / 2);
    const n = a[ind];

    if (n === tar) {
      return true;
    } else if (n < tar) {
      l = ind + 1;
    } else {
      r = ind;
    }
  }

  return false;
};

var intersection = function (ns1, ns2) {
  const ns1_u = [...new Set(ns1)];
  ns2.sort((a, b) => a - b);

  const res = [];
  for (let i = 0; i < ns1_u.length; ++i) {
    const n = ns1_u[i];
    const condi = bs(ns2, n);
    if (condi) {
      res.push(n);
    }
  }

  return res;
};

const ns1 = [1, 2, 2, 1];
const ns2 = [2, 2];
const out = intersection(ns1, ns2);
console.log(out);
