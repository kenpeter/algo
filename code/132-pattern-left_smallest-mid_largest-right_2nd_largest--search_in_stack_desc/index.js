var find132pattern = function (ns) {
  const s = [];
  let sec = Number.MIN_SAFE_INTEGER;

  for (let i = ns.length - 1; i >= 0; --i) {
    // 12 pattern
    if (ns[i] < sec) {
      return true;
    }

    // * 32 pattern
    // * stack desc, end is largest, small near you (2nd largest)
    while (s.length > 0 && ns[i] > s[s.length - 1]) {
      sec = s.pop();
    } // el

    // * stack desc, end is largest, small near you.
    s.push(ns[i]);
  } // el

  return false;
};

// const ns = [3, 5, 0, 3, 4];
// const out = find132pattern(ns);
// console.log(out);

// const ns = [3, 1, 4, 2];
// const out = find132pattern(ns);
// console.log(out);

const ns = [3, 1, 5, 4, 3];
const out = find132pattern(ns);
console.log(out);
