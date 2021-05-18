// var MyCalendar = function () {
//   this.cal = [];
// };

// MyCalendar.prototype.book = function (start, end) {
//   let isConflict = false;
//   this.cal.forEach((d) => {
//     if (
//       (start >= d[0] && start >= d[1] && end >= d[0] && end >= d[1]) ||
//       (start <= d[0] && start <= d[1] && end <= d[0] && end <= d[1])
//     ) {
//       isConflict = false;
//     } else {
//       isConflict = true;
//     }
//     return;
//   });

//   if (isConflict) {
//     return false;
//   } else {
//     this.cal.push([start, end]);
//     return true;
//   }
// };

// const my_cal = (arr) => {
//   const obj = new MyCalendar();
//   const res = [];

//   for (let i = 0; i < arr.length; ++i) {
//     const start = arr[i];
//     const end = arr[i];
//     res.push(obj.book(start, end));
//   }

//   return res;
// };

// const input = [
//   [10, 20],
//   [15, 25],
//   [20, 30],
// ];
// const out = my_cal(input);
// console.log("===", out);

var MyCalendar = function () {
  this.cal = {};
};

MyCalendar.prototype.book = function (start, end) {
  this.cal[start] = (this.cal[start] || 0) + 1;
  this.cal[end] = (this.cal[end] || 0) - 1;

  let c = 0;
  for (let t in this.cal) {
    c = c + this.cal[t];
    if (c >= 2) {
      this.cal[start]--;
      this.cal[end]++;
      return false;
    }
  }

  return true;
};

const my_cal = (arr) => {
  const obj = new MyCalendar();
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
  [15, 25],
  [20, 30],
];
const out = my_cal(input);
console.log("===", out);
