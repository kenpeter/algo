const subarraySum = (ns, k) => {
  let s = 0;
  const m = new Map();

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = s + n;
    const ind = s - k;

    if (m.get(ind) !== undefined) {
      if (ind === 0) {
        return [1, i + 1];
      } else {
        return [m.get(ind) + 2, i + 1];
      }
    }

    m.set(s, i);
  }

  return -1;
};

const ns = [
  142, 112, 54, 69, 148, 45, 63, 158, 38, 60, 124, 142, 130, 179, 117, 36, 191,
  43, 89, 107, 41, 143, 65, 49, 47, 6, 91, 130, 171, 151, 7, 102, 194, 149, 30,
  24, 85, 155, 157, 41, 167, 177, 132, 109, 145, 40, 27, 124, 138, 139, 119, 83,
  130, 142, 34, 116, 40, 59, 105, 131, 178, 107, 74, 187, 22, 146, 125, 73, 71,
  30, 178, 174, 98, 113,
];
const k = 665;
const out = subarraySum(ns, k);
console.log(out);
