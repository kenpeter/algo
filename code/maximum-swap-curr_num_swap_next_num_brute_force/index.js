var maximumSwap = function (ns) {
  const len = ns.toString().split("").length;
  let ma = ns;
  let a = ns;
  let b = ns;

  // * brute force
  // * swap digit 1
  for (let i = 0; i < len; ++i) {
    // * swap digit 2
    for (let j = i + 1; j < len; ++j) {
      const bs = a.toString().split("");

      // fake swap
      const t = bs[i];
      bs[i] = bs[j];
      bs[j] = t;
      b = parseInt(bs.join(""));

      if (b > ma) {
        ma = b;
      }
    } // el
  } // el

  return ma;
};

const ns = 2736;
const out = maximumSwap(ns);
console.log(out);
