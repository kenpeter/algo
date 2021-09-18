var bs = function (ns, tar, i, j) {
  let l = i;
  let r = j;

  while (l < r) {
    const ind = Math.floor((l + r) / 2);
    const n = ns[ind];

    if (n === tar) {
      return ind;
    } else if (n < tar) {
      l = ind + 1;
    } else {
      r = ind;
    }
  }

  return false;
};

var twoSum = function (ns, tar) {
  for (let i = 0; i < ns.length - 1; ++i) {
    const n1 = ns[i];
    const n2 = tar - n1;

    const j = bs(ns, n2, i + 1, ns.length);
    if (j !== false) {
      return [i + 1, j + 1];
    }
  }

  return -1;
};

const ns = [2, 7, 11, 15];
const tar = 9;
const out = twoSum(ns, tar);
console.log(out);
