// https://practice.geeksforgeeks.org/problems/remove-duplicates3034/1#
// sm: hash (memory)
const removeDups = (s) => {
  const h = {};
  const res = [];
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (h[c] === undefined) {
      res.push(c);
      h[c] = 1;
    }
  }

  return res.join("");
};

const input = "aaaaa";
const out = removeDups(input);
console.log(out);
