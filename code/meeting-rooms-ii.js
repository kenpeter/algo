// https://github.com/Seanforfun/Algorithm-and-Leetcode/blob/master/leetcode/253.%20Meeting%20Rooms%20II.md
// https://osgoodgunawan.medium.com/meeting-room-ii-in-javascript-d478690dd432

const meetingRoom2 = (ins) => {
  const start = [];
  const end = [];
  for (let i = 0; i < ins.length; ++i) {
    start.push(ins[i][0]);
    end.push(ins[i][1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;
  while (i < ins.length && j < ins.length) {
    // overlap
    if (start[i] < end[j]) {
      ++count;
      ++i; // start closer end, to below code
    } else {
      // non-overlap
      --count;
      ++j; // start further end, to above code
    }
  }

  return count;
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
