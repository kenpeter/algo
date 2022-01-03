var dailyTemperatures = function (ns) {
  const res = Array(ns.length).fill(0);
  const s = [];

  for (let i = 0; i < ns.length; ++i) {
    while (s.length > 0 && ns[i] > s[s.length - 1][0]) {
      const ele = s.pop();
      const val = ele[0];
      const ind = ele[1];
      res[ind] = i - ind;
    } // el

    s.push([ns[i], i]);
  } // el

  return res;
};
