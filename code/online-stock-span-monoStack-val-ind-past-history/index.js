const mynext = (p, s) => {
  let b_ind;

  if (s.length <= 0) {
    b_ind = 0 + 1;
  } else {
    b_ind = s[s.length - 1][1] + 1;
  }

  while (s.length > 0 && p >= s[s.length - 1][0]) {
    s.pop();
  } // el

  let ind;
  if (s.length > 0) {
    ind = b_ind - s[s.length - 1][1];
  } else {
    ind = b_ind;
  }

  s.push([p, b_ind]);

  return ind;
};

const main = (ns) => {
  const a = [];
  const s = [];
  for (let i = 0; i < ns.length; ++i) {
    // 10, 20. 5
    const n = ns[i];
    const out = mynext(n, s);
    a.push(out);
  } // el

  return a;
};

const ns = [100, 80, 60, 70];
const out = main(ns);
console.log(out);
