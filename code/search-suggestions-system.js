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
// // * w.lastIndexOf(substr, 0) === 0
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

const suggestedProducts = (products, searchWord) => {
  // 2D arr
  const result = Array.from({ length: searchWord.length }, () => []);
  // left
  let left = 0;
  // right
  let right = products.length - 1;
  // sort
  products.sort();

  // loop char in search_word
  for (let idx = 0; idx < searchWord.length; ++idx) {
    // target char
    const targetChar = searchWord[idx];

    //
    for (let low = left, high = right; low < high; ) {
      // mid
      const mid = Math.floor((high + low) / 2);

      products[mid][idx] === undefined || products[mid][idx] < targetChar
        ? (low = mid + 1)
        : (high = mid);

      //
      left = low;
    }
    for (let low = left, high = right; low < high; ) {
      const mid = Math.ceil((high + low) / 2);
      products[mid][idx] > targetChar ? (high = mid - 1) : (low = mid);
      right = high;
    }
    for (let i = 0; i < 3; ++i) {
      if (left + i > right || products[left + i][idx] !== targetChar) break;
      result[idx].push(products[left + i]);
    }
    if (result[idx].length === 0) break;
  }
  return result;
};

// sort: mobile, moneypot, monitor, mouse, mousepad
const p = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const s = "mouse";
const out = suggestedProducts(p, s);
console.log(out);
