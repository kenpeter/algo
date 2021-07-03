/**
 * @param {string} s
 * @return {string}
 */

const isPal = (a, i, j) => {
  while (i <= j) {
    if (a[i] === a[j]) {
      ++i;
      --j;
    } else {
      return false;
    }
  }

  return true;
};

var longestPalindrome = function (s) {
  const a = s.split("");
  let max = 0;
  let res = "";

  // no-check-self, 2 loop
  for (let i = 0; i < a.length; ++i) {
    for (let j = i; j < a.length; ++j) {
      // efficency, no-met-skip
      if (j - i < max) continue;

      if (isPal(a, i, j)) {
        if (j - i >= max) {
          max = j - i;
          res = s.substring(i, j + 1);
        }
      }
    }
  }

  return res;
};
