var bs = function (a, tar, l, r) {
  while (l < r) {
    const ind = Math.floor((l + r) / 2);
    const n = a[ind];
    if (n < tar) {
      l = ind + 1;
    } else if (n > tar) {
      r = ind;
    } else {
      while (l >= 0 && a[l] === tar) --l;
      return ++l;
    }
  }

  return false;
};

// sm: n1 in ns1, search, delete n1 in ns2
var intersect = function (ns1, ns2) {
  // avoid missing
  if (ns1.length >= ns2.length) {
    // no change
  } else {
    const tmp = ns1;
    ns1 = ns2;
    ns2 = tmp;
  }

  ns1.sort((a, b) => a - b);
  ns2.sort((a, b) => a - b);

  let l = 0;
  let r = ns2.length;
  const res = [];
  for (let i = 0; i < ns1.length; ++i) {
    const n1 = ns1[i];
    l = bs(ns2, n1, l, r);
    if (l !== false) {
      res.push(n1);
      ++l;
    }
  }

  return res;
};

const ns1 = [1, 2, 2, 1];
const ns2 = [2, 2];
const out = intersect(ns1, ns2);
