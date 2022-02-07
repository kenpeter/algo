/**
 * @param {number[]} nums
 * @return {number}
 */
// sm: convert ele (arr) to +1, 1
var arraySign = function (ns) {
  let res = 1;

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    if (n > 0) {
      res = res * 1;
    } else if (n < 0) {
      res = res * -1;
    } else {
      return 0;
    }
  } // el

  return res;
};
