// sm: arr rem overlap, come_again; overlap_problem -> merge or intersect
const MyCalendarTwo = function () {
  // obj attr
  this.cal = [];
  this.overlap = [];
};

MyCalendarTwo.prototype.book = function (incomeStart, incomeEnd) {
  // use obj attr

  // overlap?
  for (let i = 0; i < this.overlap.length; ++i) {
    const overStart = this.overlap[i][0];
    const overEnd = this.overlap[i][1];
    if (incomeStart < overEnd && incomeEnd > overStart) return false;
  }

  // remember overlap
  for (let i = 0; i < this.cal.length; ++i) {
    const calStart = this.cal[i][0];
    const calEnd = this.cal[i][1];
    // remember overlap
    if (incomeStart < calEnd && incomeEnd > calStart) {
      // overlap_problem -> merge or intersect
      this.overlap.push([
        Math.max(incomeStart, calStart),
        Math.min(incomeEnd, calEnd),
      ]);
    }
  }

  this.cal.push([incomeStart, incomeEnd]);
  return true;
};

const my_cal = (arr) => {
  const obj = new MyCalendarTwo();
  const res = [];

  for (let i = 0; i < arr.length; ++i) {
    // start, end
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
