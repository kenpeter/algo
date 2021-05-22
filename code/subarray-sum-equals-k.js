// sm: hash (each_sum), future_sum - prev_sum = k
function subarraySum(ns, k) {
  let s = 0;
  let c = 0;
  const m = new Map();

  // met self
  m.set(0, 1);

  for (let i = 0; i < ns.length; ++i) {
    s = s + ns[i];

    // hash (check): (1) met_before (2) related_met_before
    if (m.has(s - k)) {
      c = c + m.get(s - k);
    }

    // hash (inject)
    if (m.has(s)) {
      m.set(s, m.get(s) + 1);
    } else {
      m.set(s, 1);
    }
  }

  return c;
}

const input = [1, 2, 3];
const k = 3;
const out = subarraySum(input, k);
console.log(out);
