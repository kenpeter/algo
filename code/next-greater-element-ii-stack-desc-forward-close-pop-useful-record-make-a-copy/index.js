var nextGreaterElements = function (ns) {
  const s = []; // stack
  const len = ns.length; // len
  const r = Array(len).fill(-1); // res

  // loop ele (double)
  for (let i = 0; i < ns.length * 2; ++i) {
    while (s.length > 0 && s[s.length - 1][0] < ns[i % len]) {
      const ele = s.pop();
      r[ele[1]] = ns[i % len];
    } // el

    s.push([ns[i % len], i % len]);
  } // el

  return r;
};

const ns = [100, 1, 11, 1];
const out = nextGreaterElements(ns);
console.log(out);
