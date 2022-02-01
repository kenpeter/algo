// sm: posi_dp, nega_dp, prev_state * curr
var maxProduct = function (ns) {
  const p = [];
  const n = [];
  p[0] = ns[0];
  n[0] = ns[0];

  for (let i = 1; i < ns.length; i++) {
    const curr = ns[i];
    p[i] = Math.max(curr, p[i - 1] * curr, n[i - 1] * curr);
    n[i] = Math.min(curr, p[i - 1] * curr, n[i - 1] * curr);
  }

  //console.log('+++++ p', p);
  //console.log('----- n', n);

  return Math.max(...p);
};

const ns = [2, 3, -2, 4];
const out = maxProduct(ns);
console.log(out);
