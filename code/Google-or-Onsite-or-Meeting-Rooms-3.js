// // sm: inject, then refresh
// const getRooms = (cal) => {
//   const start = [];
//   const end = [];
//   for (let i = 0; i < cal.length; ++i) {
//     start[i] = cal[i][0];
//     end[i] = cal[i][1];
//   }
//   start.sort((a, b) => a - b);
//   end.sort((a, b) => a - b);

//   let count = 0;
//   let res = 0;
//   let i = 0;
//   let j = 0;

//   while (i < cal.length && j < cal.length) {
//     // overlap
//     if (start[i] < end[j]) {
//       ++count;
//       ++i;
//     } else {
//       // non-overlap
//       --count;
//       ++j;
//     }

//     res = Math.max(res, count);
//   }
//   return res;
// };

// const meetingRoom3 = (cal, room_num, q) => {
//   // [t, f, t, t]
//   const res = Array(q.length).fill(false);

//   // loop bool arr
//   for (let i = 0; i < res.length; ++i) {
//     const arr = [...cal, q[i]];
//     const min_room_num = getRooms(arr);
//     if (min_room_num <= room_num) res[i] = true;
//   }
//   return res;
// };

// const input = [
//   [1, 2],
//   [4, 5],
//   [8, 10],
// ];
// const room_num = 1;
// const q = [
//   [2, 3],
//   [3, 4],
// ];
// const out = meetingRoom3(input, room_num, q);
// console.log(out);

// const input = [
//   [1, 2],
//   [4, 5],
//   [8, 10],
// ];
// const room_num = 1;
// const q = [
//   [4, 5],
//   [5, 6],
// ];
// const out = meetingRoom3(input, room_num, q);
// console.log(out);

// const input = [
//   [1, 3],
//   [4, 6],
//   [6, 8],
//   [9, 11],
//   [6, 9],
//   [1, 3],
//   [4, 10],
// ];
// const room_num = 3;
// const q = [
//   [1, 9],
//   [2, 6],
//   [7, 9],
//   [3, 5],
//   [3, 9],
//   [2, 4],
//   [7, 10],
//   [5, 9],
//   [3, 10],
//   [9, 10],
// ];
// const out = meetingRoom3(input, room_num, q);
// const expect = [
//   false,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   false,
//   true,
// ];
// if (JSON.stringify(out) !== JSON.stringify(expect)) {
//   console.log("out", out);
//   console.log("exp", expect);
// } else {
//   console.log("good");
// }

// sm: prepare, then query; fill_time_block
const meetingRoom3 = (cal, room_num, q) => {
  // get max
  cal.sort((a, b) => a[1] - b[1]);
  const n = cal[cal.length - 1][1];

  // start_pt (asc)
  cal.sort((a, b) => a[0] - b[0]);

  // entire_time_block (natural_bottom_up)
  const dp = Array(n + 1).fill(0);

  // prepare, then query
  for (let i = 0; i < cal.length; i++) {
    // start time
    let start = cal[i][0];
    // end time
    let end = cal[i][1];

    // * each_cal fill_time_block (match up meeting room)
    // * start <= end?
    while (start < end) {
      dp[start]++;
      start++;
    }
  }

  const res = [];

  // each, fill_time_block
  for (let i = 0; i < q.length; ++i) {
    // start (fill_time_block)
    let start = q[i][0];
    // end (fill_time_block)
    let end = q[i][1];

    // fill_time_block
    while (start < end) {
      // * enough meeting room at this state?
      // * query === new_coming, but existing already oversize
      // * dp[new_coming]
      if (dp[start] >= room_num) {
        res[i] = false;
        break;
      }

      // * above is start < end (fill_time_block)
      if (start === end - 1) {
        res[i] = true;
        break;
      }

      start++;
    }
  }
  return res;
};

const input = [
  [1, 2],
  [4, 5],
  [8, 10],
];
const room_num = 1;
const q = [
  [2, 3],
  [3, 4],
];
const out = meetingRoom3(input, room_num, q);
console.log(out);

// const input = [
//   [1, 3],
//   [4, 6],
//   [6, 8],
//   [9, 11],
//   [6, 9],
//   [1, 3],
//   [4, 10],
// ];
// const room_num = 3;
// const q = [
//   [1, 9],
//   [2, 6],
//   [7, 9],
//   [3, 5],
//   [3, 9],
//   [2, 4],
//   [7, 10],
//   [5, 9],
//   [3, 10],
//   [9, 10],
// ];
// const out = meetingRoom3(input, room_num, q);
// const expect = [
//   false,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   false,
//   true,
// ];
// if (JSON.stringify(out) !== JSON.stringify(expect)) {
//   console.log("out", out);
//   console.log("exp", expect);
// } else {
//   console.log("good");
// }
