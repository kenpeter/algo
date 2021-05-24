// sm: a bit slide window
const quack = (s) => {
  const match = "quack";
  const len = 5;
  let i = 0;
  let res = 0;
  while (i < s.length) {
    let sub = "";
    if (i + len <= s.length) {
      sub = s.substring(i, i + len);
      if (match === sub) {
        ++res;
      }
    }
    ++i;
  }

  return res;
};

const input = "abcquacksdquackzz";
const out = quack(input);
console.log("++", "out", out);
