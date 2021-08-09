// // sm:
// // * brute_force
// // * each_char == level_of_filter
// // * (1) no update pool (2) update pool (once outloop)*; (3) update pool (inner loop);
// // * 2D_arr[each_char][result]
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

// sm:
// * brute_force
// * (1) no update pool* (2) update pool (once outloop); (3) update pool (inner loop);
// * w.lastIndexOf(substr, 0) === 0
var suggestedProducts = function (ps, s) {
  const res = [];
  ps.sort();

  for (let i = 0; i < s.length; ++i) {
    const str = s.substring(0, i + 1);
    res.push([]);

    // no update pool
    for (let j = 0; j < ps.length; ++j) {
      const w = ps[j];

      if (res[i].length <= 2 && w.lastIndexOf(str, 0) === 0) {
        res[i].push(w);
      }
    }
  }

  return res;
};

// sort: mobile, moneypot, monitor, mouse, mousepad
const p = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const s = "mouse";
const out = suggestedProducts(p, s);
console.log(out);
