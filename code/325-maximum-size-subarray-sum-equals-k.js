const maxSubArrayLen = (ns, k) => {
  let s = 0;
  let max = 0;

  const m = new Map();
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = s + n;

    // (1) all the way
    if (s === k) {
      // * (1) all the way: tar_len = 1_ind - 0_ind + 1;
      // * (2) presum diff: tar_len = 3_ind - 1_ind;
      max = Math.max(max, i + 1);
    }

    // (2) presum diff
    let ind = s - k;
    if (m.has(ind)) {
      // * (1) all the way: ele_len = 1_ind - 0_ind + 1;
      // * (2) presum diff: ele_len = 3_ind - 1_ind;
      max = Math.max(max, i - m.get(s - k));
    }

    if (!m.has(s)) {
      m.set(s, i);
    }
  }

  return max;
};

// const ns = [-2, -1, 2, 1];
// const k = 1; // len 2
// const out = maxSubArrayLen(ns, k);
// console.log(out);

const ns = [1, -1, 5, -2, 3];
const k = 3; // len 4
const out = maxSubArrayLen(ns, k);
console.log(out);
