var wordPattern = function (pattern, str) {
  // 1 to 1
  const words = str.split(/\s+/);
  const map = new Map();

  // same len
  if (words.length !== pattern.length) return false;

  // guarantee 1 to 1
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
  }
  return true;
};

const p = "ab";
const s = "dog dog";
const out = wordPattern(p, s);
console.log(out);
