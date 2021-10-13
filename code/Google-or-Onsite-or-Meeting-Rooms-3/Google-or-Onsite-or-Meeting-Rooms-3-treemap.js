const meetingRoom3 = (cal, room_num, q) => {
  const h = {};

  // treemap
  for (let i = 0; i < cal.length; ++i) {
    const s = cal[i][0];
    const e = cal[i][1];
    h[s] = (h[s] || 0) + 1;
    h[e] = (h[e] || 0) - 1;
  }

  // check
  const res = [];
  for (let i = 0; i < q.length; ++i) {
    const q_s = q[i][0];
    const q_e = q[i][1];

    h[q_s] = (h[q_s] || 0) + 1;
    h[q_e] = (h[q_e] || 0) - 1;

    let c = 0;
    for (let k in h) {
      c = c + h[k];
      if (c > room_num) {
        res[i] = false;
        break;
      }
    } // end loop

    h[q_s] = (h[q_s] || 0) - 1;
    h[q_e] = (h[q_e] || 0) + 1;

    if (res[i] !== false) {
      res[i] = true;
    }
  } // end loop

  return res;
};

// // 1.
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
// const expect = [true, true];
// if (JSON.stringify(out) !== JSON.stringify(expect)) {
//   console.log("out", out);
//   console.log("exp", expect);
// } else {
//   console.log("good");
// }

// // 2.
// const input = [
//   [1, 2],
//   [4, 5],
//   [8, 10],
// ];
// const room_num = 1;
// const q = [
//   [4, 5],
//   // [5, 6],
//   [8, 10],
// ];

// const out = meetingRoom3(input, room_num, q);
// const expect = [false, false];
// if (JSON.stringify(out) !== JSON.stringify(expect)) {
//   console.log("out", out);
//   console.log("exp", expect);
// } else {
//   console.log("good");
// }

// 3.
const input = [
  [1, 3],
  [4, 6],
  [6, 8],
  [9, 11],
  [6, 9],
  [1, 3],
  [4, 10],
];
const room_num = 3;
const q = [
  [1, 9],
  [2, 6],
  [7, 9],
  [3, 5],
  [3, 9],
  [2, 4],
  [7, 10],
  [5, 9],
  [3, 10],
  [9, 10],
];

const out = meetingRoom3(input, room_num, q);
const expect = [
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
];
if (JSON.stringify(out) !== JSON.stringify(expect)) {
  console.log("out", out);
  console.log("exp", expect);
} else {
  console.log("good");
}
