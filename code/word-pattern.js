// https://leetcode.com/problems/word-pattern/
var wordPattern = function (p, s) {
  const s1 = s.split(" ");
  if (p.length !== s1.length) return false;

  const h_key = {};
  const h_val = {};
  for (let i = 0; i < p.length; ++i) {
    const key = p[i];
    const val = s1[i];
    if (h_key[key] === undefined && h_val[val] === undefined) {
      h_key[key] = val;
      h_val[val] = key;
    } else {
      if (h_key[key] !== val || h_val[val] !== key) {
        return false;
      }
    }
  }

  return true;
};

// const p = "abba";
// const s = "dog cat cat dog";
// const out = wordPattern(p, s);
// console.log(out);

// const p = "abba";
// const s = "dog cat cat fish";
// const out = wordPattern(p, s);
// console.log(out);

// const p = "aaaa";
// const s = "dog cat cat dog";
// const out = wordPattern(p, s);
// console.log(out);

// const p = "abba";
// const s = "dog dog dog dog";
// const out = wordPattern(p, s);
// console.log(out);
