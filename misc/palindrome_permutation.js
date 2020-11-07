// https://medium.com/swlh/palindrome-permutations-9752d8e71c7f

const palin_per = (s) => {
  const set = new Set();

  // e.g. aaabbb; a(+)a(-)a(+) b(+)b(-)b(+)
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (set.has(c)) {
      set.delete(c);
    } else {
      set.add(c);
    }
  }

  return set.size === 1 || set.size === 0;
};

// const input = "aaabbb";
input = "aabbb";
const out = palin_per(input);
console.log("++ out", out);
