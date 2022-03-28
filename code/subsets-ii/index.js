var recur = function (res, tmp, ns, ind) {
  res.push(tmp);

  for (let i = ind; i < ns.length; ++i) {
    if (i > ind && ns[i] === ns[i - 1]) continue;

    const tmp1 = tmp.slice(0);
    tmp1.push(ns[i]);
    recur(res, tmp1, ns, i + 1);
  } // el
};

var subsetsWithDup = function (ns) {
  const res = [];
  const tmp = [];
  ns.sort((a, b) => a - b);
  recur(res, tmp, ns, 0);
  return res;
};

const ns = [2, 1, 1];
const out = subsetsWithDup(ns);
console.log(out);
