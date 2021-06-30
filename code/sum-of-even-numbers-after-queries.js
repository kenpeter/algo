// // sm: maintain 2 states; maintain extra state (derive from arr); maintain exist state (arr);
// // (1) acc; odd do nothing; even add
// // (2) exist_arr; odd add; even add
// var sumEvenAfterQueries = function (a, qs) {
//   const res = [];
//   let s = 0;

//   s = a.reduce((acc, t) => {
//     return acc + (t % 2 === 0 ? t : 0);
//   }, 0);

//   for (let i = 0; i < qs.length; ++i) {
//     const val = qs[i][0];
//     const ind = qs[i][1];

//     // if curr num
//     if (a[ind] % 2 === 0) {
//       s = s - a[ind];
//     }

//     a[ind] = a[ind] + val;

//     // if curr num
//     if (a[ind] % 2 === 0) {
//       s = s + a[ind];
//     }

//     res.push(s);
//   }

//   return res;
// };

var sumEvenAfterQueries = function (ns, qs) {
  const res = [];
  // extra_state (even_sum)
  let s = ns.reduce((acc, t) => {
    if (t % 2 === 0) {
      return acc + t;
    } else {
      return acc;
    }
  }, 0);

  for (let i = 0; i < qs.length; ++i) {
    const val = qs[i][0];
    const ind = qs[i][1];

    if (ns[ind] % 2 === 0) {
      // even (ele) + even (val)
      if (val % 2 === 0) {
        s = s + val;
      } else {
        // even (ele) + odd (val), nothing
        s = s - ns[ind];
      }
    } else {
      if (val % 2 !== 0) {
        // odd (ele) + odd (val)
        s = s + ns[ind] + val;
      } else {
        // odd (ele) + even (val), nothing
      }
    }

    ns[ind] = ns[ind] + val;
    res.push(s);
  }

  return res;
};

const ns = [1, 2, 3, 4];
const qs = [
  [1, 0],
  [-3, 1],
];
const out = sumEvenAfterQueries(ns, qs);
console.log(out);
