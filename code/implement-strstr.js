var strStr = function (h, n) {
  // empty
  if (h.length === 0 && n.length === 0) return 0;

  // empty
  if (n.length === 0) return 0;

  // needle too long
  if (h.length < n.length) return -1;

  let i = 0;

  // * brute_force; i_start (stable), j_start (j_extending)
  for (i = 0; i < h.length; i++) {
    let j = 0;

    // j_start (j_extending)
    while (h[i + j] === n[j]) {
      ++j;
      if (j === n.length) {
        return i;
      }
    }
  }

  return -1;
};

const needle = "ll";
const source = "hello";
const out = strStr(source, needle);
