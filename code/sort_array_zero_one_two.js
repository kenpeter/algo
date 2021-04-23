// sm: build_from_ground
const sort012 = (ns) => {
  const res = [];
  let c_zero = 0;
  let c_one = 0;
  let c_two = 0;

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    if (n === 0) ++c_zero;
    if (n === 1) ++c_one;
    if (n === 2) ++c_two;
  }

  while (c_zero > 0) {
    res.push(0);
    --c_zero;
  }

  while (c_one > 0) {
    res.push(1);
    --c_one;
  }

  while (c_two > 0) {
    res.push(2);
    --c_two;
  }

  for (let i = 0; i < res.length; ++i) {
    ns[i] = res[i];
  }

  return ns;
};

const input = [2, 2, 2, 0, 0, 1, 1];
const output = sort012(input);
console.log("++", output);
