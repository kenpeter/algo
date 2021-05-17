var thirdMax = function (ns) {
  // set
  const set = new Set();
  let m1 = -Number.MAX_SAFE_INTEGER,
    m2 = -Number.MAX_SAFE_INTEGER,
    m3 = -Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    if (set.has(n)) {
      continue; // prepare on the fly
    } else {
      set.add(n);
    }

    // p-queue (find insert posi, shift left)
    if (n > m3) {
      m1 = m2;
      m2 = m3;
      m3 = n;
    } else if (n > m2) {
      m1 = m2;
      m2 = n;
    } else if (n > m1) {
      m1 = n;
    }
  } // end loop

  if (m1 === -Number.MAX_SAFE_INTEGER && m2 === -Number.MAX_SAFE_INTEGER)
    return m3;
  if (m1 === -Number.MAX_SAFE_INTEGER) return m3;
  return m1;
};

// no good
// var thirdMax = function (ns) {
//   if (ns.length === 1 || ns.length === 2) {
//     ns.sort((a, b) => a - b);
//     return ns[ns.length - 1];
//   }

//   const k = 3;
//   const q = Array(k).fill(false);
//   const set = new Set();

//   let i, j, z;
//   for (i = 0; i < ns.length; ++i) {
//     if (set.has(ns[i])) continue;
//     else set.add(ns[i]);

//     for (j = k - 1; j >= 0; --j) {
//       if (q[j] === false || ns[i] > q[j]) {
//         // find insert posi
//         for (z = 1; z <= j; ++z) {
//           // shift
//           q[z - 1] = q[z];
//         }

//         q[j] = ns[i];
//         break;
//       }
//     }
//   }

//   return q[0];
// };

// const input = [1, 2, -2147483648];
const input = [1, 1, 2];
const out = thirdMax(input);
console.log("++", out);
