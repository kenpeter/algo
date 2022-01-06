const findMinSwaps = (ns) => {
  let s_1 = 0;
  let last_1 = ns.length;

  for (let i = ns.length - 1; i >= 0; --i) {
    if (ns[i] === 1) {
      s_1 = s_1 + last_1 - i - 1;
      --last_1;
    }
  } // el

  let s_0 = 0;
  let last_0 = ns.length;

  for (let i = ns.length - 1; i >= 0; --i) {
    if (ns[i] === 0) {
      s_0 = s_0 + last_0 - i - 1;
      --last_0;
    }
  } // el

  const mi = Math.min(s_1, s_0);

  return mi;
};

// const ns = [0, 0, 1, 0, 1, 0, 1, 1];
// const out = findMinSwaps(ns);
// console.log(out); // 3

// const ns = [0, 1, 0, 1];
// const out = findMinSwaps(ns);
// console.log(out); // 1

// const ns = [1, 1, 1, 0, 1];
// const out = findMinSwaps(ns);
// console.log(out); // 1

// const ns = [1, 1, 1, 0, 1];
// const out = findMinSwaps(ns);
// console.log(out); // 1

// const ns = [1, 1, 1, 0, 0];
// const out = findMinSwaps(ns);
// console.log(out); // 0

// const ns = [1, 0, 1, 0, 0, 0, 0, 1];
// const out = findMinSwaps(ns);
// console.log(out); // 6
