// var findUnsortedSubarray = function (ns) {
//   let l = ns.length - 1;
//   let r = 0;
//   let s = [];

//   for (let i = 0; i < ns.length; ++i) {
//     if (s.length > 0 && ns[i] < s[s.length - 1][0]) {
//       l = Math.min(l, s.pop()[1]);
//       --i;
//     } else {
//       s.push([ns[i], i]);
//     }
//   } // el

//   s = [];

//   for (let i = ns.length - 1; i >= 0; --i) {
//     if (s.length > 0 && ns[i] > s[s.length - 1][0]) {
//       r = Math.max(r, s.pop()[1]);
//       ++i;
//     } else {
//       s.push([ns[i], i]);
//     }
//   } // el

//   const len = r - l;
//   if (len > 0) {
//     return len + 1;
//   } else {
//     return 0;
//   }
// };

// const ns = [1, 2, 3, 3, 3];
// const out = findUnsortedSubarray(ns);
// console.log(out);

var findUnsortedSubarray = function (ns) {
  let l = ns.length - 1;
  let r = 0;
  let s = [];

  for (let i = 0; i < ns.length; ++i) {
    let flag = true;
    while (s.length > 0 && ns[i] < s[s.length - 1][0]) {
      l = Math.min(l, s.pop()[1]);
      --i;
      flag = false;
    } // el

    if (flag) {
      s.push([ns[i], i]);
    }
  } // el

  s = [];
  for (let i = ns.length - 1; i >= 0; --i) {
    flag = true;
    while (s.length > 0 && ns[i] > s[s.length - 1][0]) {
      r = Math.max(r, s.pop()[1]);
      ++i;
      flag = false;
    } // el

    if (flag) {
      s.push([ns[i], i]);
    }
  } // el

  const len = r - l;
  if (len > 0) {
    return len + 1;
  } else {
    return 0;
  }
};

const ns = [1, 2, 3, 3, 3];
const out = findUnsortedSubarray(ns);
console.log(out);
