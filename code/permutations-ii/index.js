var recur = function (ns, res, tmp, used) {
  if (tmp.length === ns.length) {
    res.push(tmp);
  } else {
    for (let i = 0; i < ns.length; ++i) {
      if (used[i] || (i > 0 && ns[i] === ns[i - 1] && !used[i - 1])) {
        continue;
      } else {
        used[i] = true;
        const tmp1 = tmp.slice(0);
        tmp1.push(ns[i]);
        recur(ns, res, tmp1, used);
        used[i] = false;
      }
    } // el
  }
};

var permuteUnique = function (ns) {
  const res = [];
  const tmp = [];
  const used = new Array(ns.length).fill(false);
  ns.sort((a, b) => a - b);
  recur(ns, res, tmp, used);
  return res;
};

const ns = [1, 1];
const out = permuteUnique(ns);
console.log(out);
