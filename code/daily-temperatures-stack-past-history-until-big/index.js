var dailyTemperatures = function (ns) {
  const res = Array(ns.length).fill(0); // res
  const s = []; // stack

  for (let i = ns.length - 1; i >= 0; --i) {
    while (s.length > 0 && ns[i] >= s[s.length - 1][0]) {
      s.pop();
    } // el

    if (s.length === 0) {
      res[i] = 0;
    } else {
      const d = s[s.length - 1][1] - i;
      res[i] = d;
    }

    s.push([ns[i], i]);
  } // el

  return res;
};
