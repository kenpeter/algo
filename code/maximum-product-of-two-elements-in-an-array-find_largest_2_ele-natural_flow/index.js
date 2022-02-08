/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (ns) {
  let n1 = Math.min(ns[0], ns[1]);
  let n2 = Math.max(ns[0], ns[1]);

  for (let i = 2; i < ns.length; ++i) {
    const n = ns[i];
    if (n > n2) {
      n1 = n2;
      n2 = n;
    } else if (n > n1) {
      n1 = n;
    }
  } // el

  return (n1 - 1) * (n2 - 1);
};
