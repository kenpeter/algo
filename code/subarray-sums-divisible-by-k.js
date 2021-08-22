// var subarraysDivByK = function (ns, tar) {
//   // map
//   const m = new Map();
//   // equal
//   m.set(0, 1);

//   let c = 0;
//   let s = 0;
//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     s = (s + n) % tar;
//     //if(s < 0) s = s + tar;

//     if (m.get(s)) {
//       c = c + m.get(s);
//       m.set(s, m.get(s) + 1);
//     } else {
//       m.set(s, 1);
//     }
//   }

//   return c;
// };

// // presum%k: [4, 4, 4, 2, -1, 0]
// const ns = [4, 5, 0, -2, -3, 1];
// const tar = 5;
// const out = subarraysDivByK(ns, tar);
// console.log(out);

var subarraysDivByK = function (ns, tar) {
  const m = new Map();
  m.set(0, 1);

  let s = 0;
  let c = 0;

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    s = s + n;
    let ind = s % tar;
    if (ind < 0) ind = ind + tar;

    if (m.get(ind) !== undefined) {
      c = c + m.get(ind);
      m.set(ind, m.get(ind) + 1);
    } else {
      m.set(ind, 1);
    }
  }

  return c;
};

const ns = [-1, 2, 9];
const tar = 2;
const out = subarraysDivByK(ns, tar);
console.log(out);
