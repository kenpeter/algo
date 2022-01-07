const recur = (ns, ind, prev, len, h) => {
  const c_ind = ind + "#" + prev + "#" + len;
  if (h[c_ind] !== undefined) {
    return h[c_ind];
  }

  if (len === 3) return 1;
  if (ind >= ns.length) return 0;

  // !take ind (stay)
  const prev_0 = prev;
  const len_0 = len;

  // take ind
  const prev_1 = ns[ind];
  const len_1 = len + 1;

  const out_0 = recur(ns, ind + 1, prev_0, len_0, h);
  const out_1 = prev === ns[ind] ? 0 : recur(ns, ind + 1, prev_1, len_1, h);
  const out = out_0 + out_1;
  h[c_ind] = out;

  return out;
};

const numberOfWays = (input) => {
  const ns = input.toString().split("");
  const ind = 0;
  const prev = "none";
  const len = 0;
  const h = {};
  return recur(ns, ind, prev, len, h);
};

const ns = "01001";
const out = numberOfWays(ns);
console.log(out); // 4

// const ns = "0100110";
// const out = numberOfWays(ns);
// console.log(out); // 13

// const ns = "10111";
// const out = numberOfWays(ns);
// console.log(out); // 3
