var MyCalendar = function () {
  this.cal = [];
};

MyCalendar.prototype.book = function (start, end) {
  let isConflict = false;
  this.cal.forEach((d) => {
    if (
      (start >= d[0] && start >= d[1] && end >= d[0] && end >= d[1]) ||
      (start <= d[0] && start <= d[1] && end <= d[0] && end <= d[1])
    ) {
      isConflict = false;
    } else {
      isConflict = true;
    }
    return;
  });

  //test
  // console.log("++", this.cal);

  if (isConflict) {
    return false;
  } else {
    this.cal.push([start, end]);
    return true;
  }
};

const my_cal = (arr) => {
  const obj = new MyCalendar();
  const res = [];

  for (let i = 0; i < arr.length; ++i) {
    const start = arr[i];
    const end = arr[i];
    res.push(obj.book(start, end));
  }

  return res;
};

const input = [
  [47, 50],
  [33, 41],
  [39, 45],
  [33, 42],
  [25, 32],
  [26, 35],
  [19, 25],
  [3, 8],
  [8, 13],
  [18, 27],
];
const out = my_cal(input);
console.log("===", out);
