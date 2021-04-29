//
var findMinArrowShots = function (ps) {
  if (ps.length === 0) return 0;

  // small on left
  ps.sort((a, b) => a[0] - b[0]);

  // one_start; backward
  let a_p = ps[ps.length - 1][0];
  let a_c = 1;

  // backward
  for (let i = ps.length - 2; i >= 0; --i) {
    // one_start vs one_end
    if (a_p <= ps[i][1]) {
      continue;
    }

    // next
    ++a_c;
    a_p = ps[i][0];
  }

  return a_c;
};

const input = [
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
];
const out = findMinArrowShots(input);
console.log("++ out", out);
