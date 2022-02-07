/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (ns) {
  const l = Array(ns.length);
  const r = Array(ns.length);
  let prev = 1;

  // left to right
  for (let i = 0; i < ns.length; ++i) {
    l[i] = prev;
    prev = prev * ns[i];
  } // el

  // right to left
  prev = 1;
  for (let i = ns.length - 1; i >= 0; --i) {
    r[i] = prev;
    prev = prev * ns[i];
  } // el

  for (let i = 0; i < ns.length; ++i) {
    l[i] = l[i] * r[i];
  } // el

  return l;
};
