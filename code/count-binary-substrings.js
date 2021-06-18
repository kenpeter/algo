// sm: i_stable, j_loop, exhaust; i_start, j_end
const countBinarySubstrings = (s) => {
  let res = 0;

  // i_stable, j_loop, exhaust
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j < s.length; ++j) {
      const sub = s.substring(i, j + 1);
      if (valid(sub)) res++;
    }
  }
  return res;
};

const valid = (s) => {
  // even, no
  if (s.length % 2 !== 0) return false;

  let lo = 0;
  let hi = s.length - 1;
  const ch1 = s[lo];
  const ch2 = s[hi];

  // start, end same, no
  if (s[lo] === s[hi]) return false;

  while (lo < hi) {
    if (s[lo] !== ch1) {
      // no con
      return false;
    } else if (s[hi] !== ch2) {
      // no con
      return false;
    } else {
      lo++;
      hi--;
    }
  }
  return true;
};

const input = "0011";
const out = countBinarySubstrings(input);
console.log("++", "out", out);
