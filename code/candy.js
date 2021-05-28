var candy = function (ns) {
  const ls = Array(ns.length).fill(1);
  const rs = Array(ns.length).fill(1);

  // l -> r
  for (let i = 1; i < ns.length; ++i) {
    if (ns[i] > ns[i - 1]) {
      ls[i] = ls[i - 1] + 1;
    }
  }

  // r -> l
  for (let i = ns.length - 2; i >= 0; --i) {
    if (ns[i] > ns[i + 1]) {
      rs[i] = rs[i + 1] + 1;
    }
  }

  let res = 0;
  for (let i = 0; i < ns.length; ++i) {
    res = res + Math.max(ls[i], rs[i]);
  }

  return res;
};

const input = [1, 3, 4, 5, 2];
const out = candy(input);
console.log(out);
