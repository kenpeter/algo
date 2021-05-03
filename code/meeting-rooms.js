const meetingRoom = (ins) => {
  ins.sort((a, b) => a[0] - b[0]);

  // * end = max, i=0, death loop
  // * end = 1st_num, i=1, can go
  let end = ins[0][1];
  for (let i = 1; i < ins.length; ++i) {
    if (end > ins[i][0]) {
      return false;
    }
  }

  return true;
};

// const input = [
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
// const out = meetingRoom(input);
// console.log("++", "out", out);

const input = [
  [7, 10],
  [2, 4],
];
const out = meetingRoom(input);
console.log("++", "out", out);
