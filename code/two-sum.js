var twoSum = function (ns, tar) {
  const m = new Map();
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    // check
    if (m.has(tar - n)) {
      return [m.get(tar - n), i];
    }

    // inject
    m.set(n, i);
  }
};

const input = [2, 7, 11, 15];
const tar = 9;
const out = twoSum(input, 9);
console.log(out);
