// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/
var modifyString = function (s) {
  const a = s.split("");
  // loop char
  for (let i = 0; i < a.length; ++i) {
    // each char
    const c = a[i];
    if (c === "?") {
      // a+0 = a
      // a+1 = b
      // a+2 = c
      for (j = 0; j < 3; ++j) {
        // * i > 0, a[i-1] can, prev
        // * try a
        if (i > 0 && a[i - 1].charCodeAt(0) === "a".charCodeAt(0) + j) continue;
        // i+1 < len, a[i+1] can, next
        // * try b
        if (
          i + 1 < a.length &&
          a[i + 1].charCodeAt(0) === "a".charCodeAt(0) + j
        )
          continue;

        // a, b no good, c
        a[i] = String.fromCharCode("a".charCodeAt(0) + j);
      }
    }
  }

  return a.join("");
};
