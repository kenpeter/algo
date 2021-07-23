var maxNumberOfBalloons = function (s) {
  const h = {};

  // hash
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    h[c] = (h[c] || 0) + 1;
  }

  // min is max strength
  let min = h["b"] || 0;
  min = Math.min(min, h["a"] || 0);
  min = Math.min(min, Math.floor((h["l"] || 0) / 2));
  min = Math.min(min, Math.floor((h["o"] || 0) / 2));
  min = Math.min(min, h["n"] || 0);

  return min;
};

const input = "leetcode";
const out = maxNumberOfBalloons(input);
console.log(out);
