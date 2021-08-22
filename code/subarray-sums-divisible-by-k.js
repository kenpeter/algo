var subarraysDivByK = function (ns, tar) {
  // map
  const m = new Map();
  // equal
  m.set(0, 1);

  let c = 0;
  let s = 0;
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = (s + n) % tar;
    //if(s < 0) s = s + tar;

    if (m.get(s)) {
      c = c + m.get(s);
      m.set(s, m.get(s) + 1);
    } else {
      m.set(s, 1);
    }
  }

  return c;
};

// presum%k: [4, 4, 4, 2, -1, 0]
const ns = [4, 5, 0, -2, -3, 1];
const tar = 5;
const out = subarraysDivByK(ns, tar);
console.log(out);
