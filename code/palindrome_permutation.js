// https://medium.com/swlh/palindrome-permutations-9752d8e71c7f

const palin_per = (s) => {
  const m = new Map();
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (m.has(c)) {
      m.delete(c);
    } else {
      m.set(c, true);
    }
  }

  const a = Array.from(m);
  if (a.length === 1 || a.length === 0) {
    return true;
  } else {
    return false;
  }
};

//const input = "aaabbb";
//const input = "aabbb";
const input = "aabb";
const out = palin_per(input);
console.log("++ out", out);
