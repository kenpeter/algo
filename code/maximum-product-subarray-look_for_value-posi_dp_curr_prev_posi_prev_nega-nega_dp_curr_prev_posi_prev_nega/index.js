var maxProduct = function (ns) {
  const pdp = Array(ns.length).fill(0);
  const ndp = Array(ns.length).fill(0);

  pdp[0] = ns[0];
  ndp[0] = ns[0];

  for (let i = 1; i < ns.length; ++i) {
    const curr = ns[i];

    pdp[i] = Math.max(curr, pdp[i - 1], pdp[i - 1] * curr, ndp[i - 1] * curr);
    ndp[i] = Math.min(curr, ndp[i - 1], pdp[i - 1] * curr, ndp[i - 1] * curr);
  } // el

  return Math.max(...pdp);
};

const ns = [2, 3, -2, 4];
const out = maxProduct(ns);
console.log(out);
