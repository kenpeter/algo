// var findUnsortedSubarray = function (ns) {
//   let s = [];
//   let l = ns.length - 1;
//   let r = 0;

//   // inc
//   for (let i = 0; i < ns.length; ++i) {
//     if (s.length === 0 || ns[i] >= ns[s[s.length - 1]]) {
//       s.push(i);
//     } else {
//       l = Math.min(l, s.pop());
//       --i; // stay
//     }
//   } // el

//   s = [];

//   // desc
//   for (let i = ns.length - 1; i >= 0; --i) {
//     if (s.length === 0 || ns[i] <= ns[s[s.length - 1]]) {
//       s.push(i);
//     } else {
//       r = Math.max(r, s.pop());
//       ++i; // stay
//     }
//   } // el

//   let out = 0;
//   if (r - l <= 0) {
//     out = 0;
//   } else {
//     out = r - l + 1;
//   }

//   return out;
// };

// const ns = [2, 6, 4, 8, 10, 9, 15];
// const out = findUnsortedSubarray(ns);
// console.log(out);

var findUnsortedSubarray = function (ns) {
  let l = ns.length - 1;
  let r = 0;
  let s = [];

  for (let i = 0; i < ns.length; ++i) {
    if (s.length > 0 && ns[i] <= s[s.length - 1][0]) {
      l = Math.min(l, s.pop()[1]);
      --i;
    } else {
      s.push([ns[i], i]);
    }
  } // el

  s = [];

  for (let i = ns.length - 1; i >= 0; --i) {
    if (s.length > 0 && ns[i] >= s[s.length - 1][0]) {
      r = Math.max(r, s.pop()[1]);
      ++i;
    } else {
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

const ns = [1, 2, 2];
const out = findUnsortedSubarray(ns);
console.log(out);
