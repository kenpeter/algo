// // sm: brute_force, rem overlap; overlap_problem -> merge or intersect
// const MyCalendarTwo = function () {
//   this.cal = [];
//   this.overlap = [];
// };

// MyCalendarTwo.prototype.book = function (incomeStart, incomeEnd) {
//   for (let i = 0; i < this.overlap.length; ++i) {
//     const overStart = this.overlap[i][0];
//     const overEnd = this.overlap[i][1];
//     if (incomeStart < overEnd && incomeEnd > overStart) return false;
//   }

//   // rem overlap
//   for (let i = 0; i < this.cal.length; ++i) {
//     const calStart = this.cal[i][0];
//     const calEnd = this.cal[i][1];
//     // rem overlap
//     if (incomeStart < calEnd && incomeEnd > calStart) {
//       // overlap_problem -> merge or intersect
//       this.overlap.push([
//         Math.max(incomeStart, calStart),
//         Math.min(incomeEnd, calEnd),
//       ]);
//     }
//   }

//   this.cal.push([incomeStart, incomeEnd]);
//   return true;
// };

// const my_cal = (arr) => {
//   const obj = new MyCalendarTwo();
//   const res = [];

//   for (let i = 0; i < arr.length; ++i) {
//     const start = arr[i][0];
//     const end = arr[i][1];
//     res.push(obj.book(start, end));
//   }

//   return res;
// };

// const input = [
//   [10, 20],
//   [50, 60],
//   [10, 40],
//   [5, 15],
//   [5, 10],
//   [25, 55],
// ];
// const out = my_cal(input);
// const expect = [true, true, true, false, true, true];
// if (JSON.stringify(out) === JSON.stringify(expect)) {
//   console.log("good");
// } else {
//   console.log("out", out, "expect", expect);
// }

// sm: treeMap; sort, +1 / -1, state
const MyCalendarTwo = function () {
  this.cal = {};
};

MyCalendarTwo.prototype.book = function (start, end) {
  this.cal[start] = (this.cal[start] || 0) + 1; // +1 / -1
  this.cal[end] = (this.cal[end] || 0) - 1; // +1 / -1

  // state
  let c = 0;

  // sort
  for (let t in this.cal) {
    // state
    c = c + this.cal[t];
    if (c >= 3) {
      // e.g. need to take it back, become 0
      this.cal[start]--;
      this.cal[end]++;
      return false;
    }
  }

  return true;
};

const my_cal = (arr) => {
  const obj = new MyCalendarTwo();
  const res = [];

  for (let i = 0; i < arr.length; ++i) {
    const start = arr[i][0];
    const end = arr[i][1];
    res.push(obj.book(start, end));
  }

  return res;
};

const input = [
  [10, 20],
  [50, 60],
  [10, 40],
  [5, 15],
  [5, 10],
  [25, 55],
];
const out = my_cal(input);
const expect = [true, true, true, false, true, true];
if (JSON.stringify(out) === JSON.stringify(expect)) {
  console.log("good");
} else {
  console.log("out", out, "expect", expect);
}
