var numberOfBeams = function (ns) {
  const a = [];
  for (let i = 0; i < ns.length; ++i) {
    let c = 0;

    for (let j = 0; j < ns[i].length; ++j) {
      if (ns[i][j] === "1") {
        ++c;
      }
    } // el

    if (c !== 0) {
      a.push(c);
    }
  } // el

  let res = 0;
  for (let i = 0; i < a.length - 1; ++i) {
    res = res + a[i] * a[i + 1];
  } // el

  return res;
};

const ns = ["011001", "000000", "010100", "001000"];
const out = numberOfBeams(ns);
console.log(out);
