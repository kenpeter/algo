// https://leetcode.com/problems/search-in-rotated-sorted-array/discuss/14436/Revised-Binary-Search

var search = function (ns, tar) {
  let l = 0;
  let r = ns.length - 1;
  while (l < r) {
    const ind = Math.floor((l + r) / 2);
    if (ns[ind] === tar) {
      return ind;
    }

    // bs (left, can be single num)
    if (ns[l] <= ns[ind]) {
      // bs (left)
      if (tar >= ns[l] && tar < ns[ind]) {
        r = ind - 1;
      } else {
        l = ind + 1; // tar >= ns[ind]
      }
    } else {
      // ns[l] > ns[ind]
      if (tar > ns[ind] && tar < ns[r]) {
        l = ind + 1;
      } else {
        r = ind - 1; // tar >= ns[r]
      }
    }
  }

  return ns[l] === tar ? l : -1;
};
