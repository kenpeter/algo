// https://www.programcreek.com/2014/07/leetcode-meeting-rooms-java/

// // method 1: 2 pass, mem, corss edge check
// const meetingRoom = (a) => {
//   // mem
//   const buf = [];

//   // 1st pass
//   for (let i = 0; i < a.length; ++i) {
//     // income
//     const i_s = a[i][0];
//     const i_e = a[i][1];

//     // 2nd pass
//     for (let j = 0; j < buf.length; ++j) {
//       const s = buf[j][0];
//       const e = buf[j][1];
//       // cross edge check
//       if (i_s < e && i_e > s) {
//         return false;
//       }
//     } // el

//     buf.push([i_s, i_e]);
//   } // el

//   return true;
// };

// const a = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// const out = meetingRoom(a);
// console.log(out);

// // method 2: 1 pass, sort, corss edge check
// const meetingRoom = (a) => {
//   // sort
//   a.sort((a, b) => {
//     return a[0] - b[1];
//   });

//   // 1 pass
//   for (let i = 1; i < a.length; ++i) {
//     const prev = a[i - 1];
//     const curr = a[i];

//     // cross edge check
//     if (curr[0] < prev[1] && curr[1] > prev[0]) {
//       return false;
//     }
//   } // el

//   return true;
// };

// const a = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// const out = meetingRoom(a);
// console.log(out);

// method 3: treemap
const meetingRoom = (a) => {
  const h = {};

  for (let i = 0; i < a.length; ++i) {
    const i_s = a[i][0];
    const i_e = a[i][1];

    // assume
    h[i_s] = (h[i_s] || 0) + 1;
    h[i_e] = (h[i_e] || 0) - 1;

    // check
    let c = 0;
    for (let k in h) {
      c = c + h[k];
      if (c > 1) {
        return false;
      }
    } // el

    // no need to revert, as assume it is fact
  } // el

  return true;
};

const a = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const out = meetingRoom(a);
console.log(out);
