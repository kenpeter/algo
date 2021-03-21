const countTriplet = (ns) => {
  let res = 0;
  for (i = 0; i < ns.length; ++i) {
    for (j = i + 1; j < ns.length; ++j) {
      const s = ns[i] + ns[j];
      if (ns.includes(s)) {
        ++res;
      }
    }
  }

  return res;
};

const input = [12, 8, 2, 11, 5, 14, 10];
const out = countTriplet(input);
console.log(out);
