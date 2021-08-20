function subarraySum(ns, k) {
  let s = 0;
  let c = 0;
  const m = new Map();

  // e.g. ns[i] == 4, k == 4
  //m.set(0, 1);

  for (let i = 0; i < ns.length; ++i) {
    // pre-sum VS ele
    s = s + ns[i];

    // related_met_before
    if (m.has(s - k)) {
      c = c + m.get(s - k);
    }

    // direct_met_before
    if (m.has(s)) {
      m.set(s, m.get(s) + 1);
    } else {
      m.set(s, 1);
    }

    if (s === k) {
      ++c;
    }
  }

  return c;
}

// const input = [1, 2, 3];
// const k = 3;
// const out = subarraySum(input, k);
// console.log(out);

const input = [3, 4, 3, 8];
const k = 7;
const out = subarraySum(input, k);
console.log(out);
