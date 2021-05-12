// https://github.com/Seanforfun/Algorithm-and-Leetcode/blob/master/leetcode/253.%20Meeting%20Rooms%20II.md
// https://osgoodgunawan.medium.com/meeting-room-ii-in-javascript-d478690dd432

// // sm: start_arr, end_arr, travel_each;
// const meetingRoom2 = (ins) => {
//   const start = [];
//   const end = [];
//   for (let i = 0; i < ins.length; ++i) {
//     start.push(ins[i][0]);
//     end.push(ins[i][1]);
//   }

//   start.sort((a, b) => a - b);
//   end.sort((a, b) => a - b);

//   let i = 0;
//   let j = 0;
//   let count = 0;
//   while (i < ins.length && j < ins.length) {
//     // overlap
//     if (start[i] < end[j]) {
//       ++count;
//       ++i;
//     } else {
//       // non-overlap
//       --count;
//       ++j;
//     }
//   }

//   return count;
// };

// const input = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// // const input = [
// //   [7, 10],
// //   [2, 4],
// // ];
// const out = meetingRoom2(input);
// console.log(out);

// sm: treemap; sort, +1 / -1, state
const meetingRoom2 = (ins) => {
  const cal = {};
  for (let i = 0; i < ins.length; ++i) {
    const s = ins[i][0];
    const e = ins[i][1];

    cal[s] = (cal[s] || 0) + 1;
    cal[e] = (cal[e] || 0) - 1;
  }

  let c = 0;
  let ma = 0;
  for (let t in cal) {
    c = c + cal[t];
    ma = Math.max(ma, c);
  }

  return ma;
};

// const input = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
const input = [
  [7, 10],
  [2, 4],
];
const out = meetingRoom2(input);
console.log(out);
