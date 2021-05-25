var rev = function (s, i, j) {
  while (i < j) {
    const t = s[i];
    s[i] = s[j];
    s[j] = t;
    ++i;
    --j;
  }
};

// sm: 0->k rev; k->2k no; 2k->3k rev; j_end, abstract
var reverseStr = function (s, k) {
  let i = 0;
  let j = 0;
  const a = s.split("");

  while (i < a.length) {
    // j_end, abstract
    j = Math.min(i + k, a.length) - 1;
    rev(a, i, j);

    i = i + 2 * k;
  }

  return a.join("");
};

const input = "abcdefg";
const k = 2;
const out = reverseStr(input, k);
console.log(out);
