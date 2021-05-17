// // sm: priority queue (find insert posi, shift_left)
// var findKthLargest = function (ns, k) {
//   const q = Array(k).fill(false);

//   for (let i = 0; i < ns.length; i++) {
//     const n = ns[i];

//     for (let j = q.length - 1; j >= 0; j--) {
//       if (q[j] === false || n > q[j]) {
//         // k = 1, k-1; k<=j, j insert posi, ending
//         for (k = 1; k <= j; k++) {
//           q[k - 1] = q[k];
//         }

//          q[j] = ns[i];
//         break;
//       }
//     }
//   }

//   return q[0];
// };

// sm: priority queue (find insert posi, shift left)
var findKthLargest = function (ns, k) {
  const q = Array(k).fill(false);
  let i, j, z;

  // loop ele
  for (i = 0; i < ns.length; ++i) {
    // loop q
    for (j = k - 1; j >= 0; --j) {
      // find insert posi
      if (q[j] === false || ns[i] > q[j]) {
        for (z = 1; z <= j; ++z) {
          q[z - 1] = q[z];
        }

        // insert
        q[j] = ns[i];
        break;
      }
    }
  }

  return q[0];
};

const input = [3, 2, 1, 5, 6, 4];
const k = 2;
const out = findKthLargest(input, k);
console.log("++", out);
