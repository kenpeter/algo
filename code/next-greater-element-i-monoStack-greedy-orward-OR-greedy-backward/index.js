// var nextGreaterElement = function (ns1, ns2) {
//   // ns2 hash
//   const m = new Map();
//   for (let i = 0; i < ns2.length; ++i) {
//     m.set(ns2[i], i);
//   } // el

//   const res = Array(ns2.length).fill(-1);
//   const s = [];
//   for (let i = ns2.length - 1; i >= 0; --i) {
//     while (s.length > 0 && ns2[i] >= s[s.length - 1]) {
//       s.pop();
//     } // el

//     if (s[s.length - 1] !== undefined) {
//       res[i] = s[s.length - 1];
//     }

//     s.push(ns2[i]);
//   } // el

//   // loop ns1
//   const a = [];
//   for (let i = 0; i < ns1.length; ++i) {
//     const ind = m.get(ns1[i]);
//     const val = res[ind];
//     a[i] = val;
//   } // el

//   return a;
// };

// const ns1 = [3, 4];
// const ns2 = [4, 3, 7];
// const out = nextGreaterElement(ns1, ns2);
// console.log(out);

var nextGreaterElement = function (ns1, ns2) {
  // ns2 hash
  const m = new Map();
  for (let i = 0; i < ns2.length; ++i) {
    m.set(ns2[i], i);
  } // el

  const res = Array(ns2.length).fill(-1);
  const s = [];

  // forward
  for (let i = 0; i < ns2.length; ++i) {
    while (s.length > 0 && ns2[i] >= s[s.length - 1][0]) {
      const ele = s.pop();
      const val = ns2[i];
      const ind = ele[1];
      res[ind] = val;
      break;
    } // el

    s.push([ns2[i], i]);
  } // el

  // loop ns1
  const a = [];
  for (let i = 0; i < ns1.length; ++i) {
    const ind = m.get(ns1[i]);
    const val = res[ind];
    a[i] = val;
  } // el

  return a;
};

const ns1 = [4, 3];
const ns2 = [4, 3, 7]; // good: [7, 7]; bad: [-1, 7]
const out = nextGreaterElement(ns1, ns2);
console.log(out);
