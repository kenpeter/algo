const recur = (ns, ind, prev, len) => {
  if (len === 3) return 1;
  if (ind >= ns.length) return 0;

  // !take ind (stay)
  const prev_0 = prev;
  const len_0 = len;

  // take ind
  const prev_1 = ns[ind];
  const len_1 = len + 1;

  const out_0 = recur(ns, ind + 1, prev_0, len_0);
  const out_1 = prev === ns[ind] ? 0 : recur(ns, ind + 1, prev_1, len_1);

  return out_0 + out_1;
};

const numberOfWays = (input) => {
  const ns = input.toString().split("");
  const ind = 0;
  const prev = "";
  const len = 0;
  return recur(ns, 0, prev, len);
};

// const ns = "01001";
// const out = numberOfWays(ns);
// console.log(out); // 4

// const ns = "0100110";
// const out = numberOfWays(ns);
// console.log(out); // 13

const ns = "10111";
const out = numberOfWays(ns);
console.log(out); // 3
