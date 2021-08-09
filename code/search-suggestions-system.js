// // sm:
// // * brute_force
// // * each_char == level_of_filter
// // * (1) no update pool (2) update pool (once outloop)*; (3) update pool (inner loop);
// // * 2D_arr[each_char][result]
// // * e.g. ["abc", "def"] -> 2D_arr
// var suggestedProducts = function (ps, s) {
//   const res = [];
//   ps.sort();

//   // each_char == level_of_filter
//   for (let i = 0; i < s.length; ++i) {
//     const next = [];
//     res.push([]);

//     // update pool (once outloop)
//     for (let j = 0; j < ps.length; ++j) {
//       // each_char == level_of_filter
//       if (s[i] === ps[j][i]) {
//         // 2D_arr[each_char][result]
//         res[i].length <= 2 && res[i].push(ps[j]);

//         // update pool (once outloop)
//         next.push(ps[j]);
//       }
//     } // end_loop

//     // update pool (once outloop)
//     ps = next;
//   } // end_loop

//   return res;
// };

// // sm:
// // * brute_force
// // * prefix: w.lastIndexOf(substr, 0) === 0
// // * (1) no update pool* (2) update pool (once outloop); (3) update pool (inner loop);
// // * 2D_arr[each_char][result]
// // * e.g. ["abc", "def"] -> 2D_arr
// var suggestedProducts = function (ps, s) {
//   const res = [];
//   ps.sort();

//   for (let i = 0; i < s.length; ++i) {
//     const str = s.substring(0, i + 1);
//     res.push([]);

//     // no update pool
//     for (let j = 0; j < ps.length; ++j) {
//       const w = ps[j];

//       if (res[i].length <= 2 && w.lastIndexOf(str, 0) === 0) {
//         res[i].push(w);
//       }
//     }
//   }

//   return res;
// };

// var suggestedProducts = function (products, searchWord) {
//   const res = [];
//   products.sort();

//   for (let i = 0; i < searchWord.length; i++) {
//     const prefix = searchWord.substring(0, i + 1);

//     let left = 0;
//     let right = products.length;

//     while (left < right) {
//       // mid is what, seach_ind === why
//       const ind = Math.floor((left + right) / 2);

//       if (prefix <= products[ind]) right = ind;
//       else left = ind + 1;
//     }

//     const suggestions = [];

//     for (let i = 0; i < 3; i++) {
//       const product = products[left + i];

//       if (!product || !product.startsWith(prefix)) break;
//       else suggestions.push(product);
//     }

//     res.push(suggestions);
//   }

//   return res;
// };

// sm: ind causes l, r to bound; use l
var suggestedProducts = function (ps, s) {
  // sort
  ps.sort();
  const res = [];

  // each char in search
  for (let i = 0; i < s.length; ++i) {
    const str = s.substring(0, i + 1);

    let l = 0;
    let r = ps.length - 1;

    // ind causes l, r to bound; use l
    while (l < r) {
      const ind = Math.floor((l + r) / 2);

      if (ps[ind] < str) {
        l = ind + 1;
      } else {
        r = ind;
      }
    } // end loop

    //
    const sug = [];
    for (let j = 0; j < 3; ++j) {
      if (l + j < ps.length && ps[l + j].startsWith(str)) {
        sug.push(ps[l + j]);
      }
    } // end loop

    res.push(sug);
  } // end loop

  return res;
};

const p = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const s = "mouse";
const out = suggestedProducts(p, s);
console.log(out);
