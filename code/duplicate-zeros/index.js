// https://leetcode.com/problems/duplicate-zeros/
var shift = function (ns, ind) {
  for (let i = ns.length - 1; i >= ind; --i) {
    ns[i] = ns[i - 1];
  } // el
};

var duplicateZeros = function (ns) {
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    if (n === 0) {
      shift(ns, i + 1);
      ++i;
      if (i === ns.length - 1) break;
    }
  } // el
};

const ns = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(ns);
console.log(ns);
