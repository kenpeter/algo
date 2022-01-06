var moveZeroes = function (ns) {
  let last_0 = ns.length - 1;

  for (let i = ns.length - 1; i >= 0; --i) {
    if (ns[i] === 0) {
      const t = ns[last_0];
      ns[last_0] = ns[i];
      ns[i] = t;

      --last_0;
    }
  }
};

const ns = [];
moveZeroes(ns);
