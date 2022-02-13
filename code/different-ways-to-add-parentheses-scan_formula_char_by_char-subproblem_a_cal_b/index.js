var diffWaysToCompute = function (s) {
  const m = new Map();
  return recur(m, s);
};

var recur = function (m, s) {
  const res = [];

  // loop all chars
  for (let i = 0; i < s.length; ++i) {
    const n = s[i];

    if (n === "+" || n === "-" || n === "*") {
      const left = s.substring(0, i);
      const right = s.substring(i + 1);
      let left_res;
      let right_res;

      if (m.get(left) !== undefined) {
        left_res = m.get(left);
      } else {
        left_res = recur(m, left);
      }

      if (m.get(right) !== undefined) {
        right_res = m.get(right);
      } else {
        right_res = recur(m, right);
      }

      let c;
      for (let j = 0; j < left_res.length; ++j) {
        for (let k = 0; k < right_res.length; ++k) {
          if (n === "+") {
            c = left_res[j] + right_res[k];
          } else if (n === "-") {
            c = left_res[j] - right_res[k];
          } else if (n === "*") {
            c = left_res[j] * right_res[k];
          }

          res.push(c);
        } // el
      } // el
    } // handle symbol
  } // el

  // not a symbol, so it is a num
  if (res.length === 0) {
    res.push(parseInt(s)); // acc
  }

  m.set(s, res);

  return res;
};

const out = diffWaysToCompute("2*3-4*5");
console.log(out);
