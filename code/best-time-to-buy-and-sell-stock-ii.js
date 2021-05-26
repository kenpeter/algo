var maxProfit = function (ps) {
  let i = 0;
  let j = 0;
  let res = 0;

  while (i < ps.length - 1 && j < ps.length - 1) {
    // low
    while (i < ps.length - 1 && ps[i] >= ps[i + 1]) ++i;

    j = i + 1;

    // high
    while (j < ps.length - 1 && ps[j] <= ps[j + 1]) ++j;

    if (i < ps.length && j < ps.length)
      res = Math.max(res, res + (ps[j] - ps[i]));

    i = j + 1;
  }

  return res;
};

const input = [7, 6, 4, 3, 1];
const out = maxProfit(input);
console.log(out);
