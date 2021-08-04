// sm: slide (exhaust), extend (match)
var strStr = function (h, n) {
  // search nothing, then good
  if (n.length === 0) return 0;

  // the thing we search, too long
  if (h.length < n.length) return -1;

  let i = 0;

  // * slide (exhaust), extend (match)
  // * match good; !match, substr reset, next_char in sentense
  for (i = 0; i < h.length; i++) {
    let j = 0;
    while (j < n.length && h[i + j] === n[j]) {
      ++j;
    }

    if (j === n.length) {
      return i;
    }
  }

  return -1;
};
