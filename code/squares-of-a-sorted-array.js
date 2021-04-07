var sortedSquares = function (ns) {
  const res = [];

  if (ns.length === 1) {
    return [ns[0] ** 2];
  } else if (ns[0] >= 0 && ns[ns.length - 1] > 0) {
    // small -> big
    for (let i = 0; i < ns.length; ++i) {
      res[i] = ns[i] ** 2;
    }
  } else if (ns[0] < 0 && ns[ns.length - 1] <= 0) {
    // big -> small
    ns.sort((a, b) => b - a);
    for (let i = 0; i < ns.length; ++i) {
      res[i] = ns[i] ** 2;
    }
  } else {
    let ne = 0;
    let po;
    let w = 0;
    while (ne < ns.length - 1 && ns[ne] < 0 && ns[ne + 1] < 0) {
      ++ne;
    }
    // end_loop

    // ne backward; po forward
    po = ne + 1;

    //test
    //console.log("ne", ne, "po", po);

    // together
    while (ne >= 0 && po <= ns.length - 1) {
      res[w++] = ns[ne] ** 2 < ns[po] ** 2 ? ns[ne--] ** 2 : ns[po++] ** 2;
    }

    // anything left
    while (ne >= 0) {
      res[w++] = ns[ne--] ** 2;
    }

    // anything left
    while (po <= ns.length - 1) {
      res[w++] = ns[po++] ** 2;
    }
  }

  return res;
};

// const input = [-4, -1, 0, 3, 10];
// const out = sortedSquares(input);
// console.log("+++", "out", out);

// const input = [-1];
// const out = sortedSquares(input);
// console.log("+++", "out", out);

const input = [-4, -3, -2, -1, 0, 0, 2];
const out = sortedSquares(input);
const expect = [0, 0, 1, 4, 4, 9, 16];
if (out === expect) {
  console.log("good");
} else {
  console.log("bad");
}
