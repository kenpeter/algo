// sm: start, end as whole; sort, keep_extending (not inject yet)
var merge = function (ins) {
  // start_pt (asc)
  ins.sort((a, b) => a[0] - b[0]);

  const res = [];
  // start, end as whole
  let prev_in = ins[0];
  res.push(prev_in);

  for (let i = 0; i < ins.length; ++i) {
    // able_to_cover
    if (prev_in[1] >= ins[i][0]) {
      // sort, keep extending (not inject yet), until not_able_to_cover
      prev_in[1] = Math.max(prev_in[1], ins[i][1]);
    } else {
      // not_able_to_cover
      res.push(ins[i]);
      prev_in = ins[i];
    }
  }

  return res;
};

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const out = merge(input);
console.log(out);
