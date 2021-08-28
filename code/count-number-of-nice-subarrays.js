// var numberOfSubarrays = function (ns, k) {
//   const tns = [];
//   // prepare
//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     if (n % 2 === 0) {
//       tns.push(0);
//     } else {
//       tns.push(1);
//     }
//   }

//   // 2 pass
//   let bc = 0;
//   for (let i = 0; i < tns.length; ++i) {
//     let c = 0;
//     for (let j = i; j < tns.length; ++j) {
//       const n = tns[j];
//       if (n % 2 === 0) {
//       } else {
//         ++c;
//       }

//       if (c === k) {
//         ++bc;
//       }
//     }
//   }

//   return bc;
// };

// const ns = [1, 2, 1, 2];
// const k = 2;
// const out = numberOfSubarrays(ns, k); // out == 2
// console.log(out);

// var numberOfSubarrays = function (ns, k) {
//   const tns = [];
//   // prepare
//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];
//     if (n % 2 === 0) {
//       tns.push(0);
//     } else {
//       tns.push(1);
//     }
//   }

//   let c = 0;
//   for (let i = 0; i < tns.length; ++i) {
//     let s = 0;
//     for (let j = i; j < tns.length; ++j) {
//       const n = tns[j];
//       s = s + n;
//       // e.g. [2, 0, 0, 0, 0]
//       if (s === k) {
//         ++c;
//       }
//     }
//   }

//   return c;
// };

// const ns = [2, 4, 6];
// const k = 1;
// const out = numberOfSubarrays(ns, k);
// console.log(out);

var numberOfSubarrays = function (ns, k) {
  const tns = [];
  // prepare
  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];
    if (n % 2 === 0) {
      tns.push(0);
    } else {
      tns.push(1);
    }
  }

  let s = 0;
  let c = 0;
  const m = new Map();
  m.set(0, 1);

  for (let i = 0; i < tns.length; ++i) {
    const n = tns[i];
    s = s + n;
    const ind = s - k;

    if (m.get(ind) !== undefined) {
      c = c + m.get(ind);
    }

    if (m.get(s) !== undefined) {
      m.set(s, m.get(s) + 1);
    } else {
      m.set(s, 1);
    }
  }

  return c;
};

const ns = [1, 1, 2, 1, 1];
const k = 3;
const out = numberOfSubarrays(ns, k);
console.log(out);
