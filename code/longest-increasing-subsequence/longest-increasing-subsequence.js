// var lis = function (ns) {
//   if (ns.length === 0) return 0;
//   let t = [ns[0]];
//   let len = 1;
//   // start with 2nd num
//   for (let i = 1; i < ns.length; i++) {
//     let l = 0;
//     let r = len;
//     while (l < r) {
//       let ind = Math.floor((l + r) / 2);
//       const tar = ns[i]; // tar
//       const n = t[ind]; // ind
//       if (n < tar) {
//         l = ind + 1;
//       } else {
//         r = ind;
//       }
//     }

//     if (len === l) {
//       t.push(ns[i]);
//       len++;
//     } else {
//       t[l] = ns[i];
//     }
//   }
//   return t.length;
// };

// const ns = [0, 1, 0, 3, 2, 3];
// const out = lis(ns);

var lengthOfLIS = function (ns) {
  const t = [ns[0]];

  for (let i = 1; i < ns.length; ++i) {
    const tar = ns[i];

    let l = 0;
    let r = t.length;
    while (l < r) {
      const ind = Math.floor((l + r) / 2);
      if (t[ind] < tar) {
        l = ind + 1;
      } else {
        r = ind;
      }
    }

    if (l === t.length) {
      t.push(tar);
    } else {
      t[l] = tar;
    }
  } // end loop

  return t.length;
};

const ns = [10, 9, 2, 5, 3, 7, 101, 18];
const out = lengthOfLIS(ns);
console.log(out);
