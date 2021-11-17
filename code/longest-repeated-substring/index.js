// sm: brute force, all substr, hash (appear at least twice)
const longestRepeatedSubstring = (s) => {
  const m = new Map();
  let max = 0;

  for (let i = 0; i < s.length; ++i) {
    for (let j = 0; j <= i; ++j) {
      const sub = s.substring(j, i + 1);
      const condi = m.get(sub);

      if (condi !== undefined) {
        max = Math.max(max, sub.length);
      } else {
        m.set(sub, true);
      }
    } // el
  } // el

  return max;
};

// const s = "abc";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "aa";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "abbaba";
// const out = longestRepeatedSubstring(s);
// console.log(out);

// const s = "aaaaa";
// const out = longestRepeatedSubstring(s);
// console.log(out);

const s = "aabcaabdaac";
const out = longestRepeatedSubstring(s);
console.log(out);
