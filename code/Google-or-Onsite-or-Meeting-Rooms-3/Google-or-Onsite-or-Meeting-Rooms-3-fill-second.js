const meetingRoom3 = (cal, room_num, q) => {
  // sort end
  cal.sort((a, b) => {
    return a[1] - b[1];
  });
  const max = cal[cal.length - 1][1];
  const dp = Array(max + 1).fill(0);

  // dot dot dot
  for (let i = 0; i < cal.length; ++i) {
    let s = cal[i][0];
    let e = cal[i][1];
    while (s < e) {
      ++dp[s]; // hash
      ++s;
    }
  } // end loop

  // dot dot dot
  const res = [];
  for (let i = 0; i < q.length; ++i) {
    let i_s = q[i][0];
    let i_e = q[i][1];
    while (i_s < i_e) {
      if (dp[i_s] >= room_num) {
        res[i] = false;
        break;
      }

      if (i_s === i_e - 1) {
        res[i] = true;
        break;
      }

      ++i_s;
    } // end_loop
  } // end loop

  return res;
};

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

// const expect = [false, true];
// if (JSON.stringify(out) !== JSON.stringify(expect)) {
//   console.log("out", out);
//   console.log("exp", expect);
// } else {
//   console.log("good");
// }

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
