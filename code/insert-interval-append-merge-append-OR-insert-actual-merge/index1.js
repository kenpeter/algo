var insert = function (ex, income) {
  let i = 0;
  for (i = 0; i < ex.length; ++i) {
    // ex
    const s = ex[i][0];
    const e = ex[i][1];

    // income
    const i_s = income[0];
    const i_e = income[1];

    // inter
    if (i_s <= e && i_e >= s) {
      break;
    }
  }

  // insert location
  ex.splice(i + 1, 0, income);
  ex.sort((a, b) => a[0] - b[0]);

  // merge each
  const res = [ex[0]];
  for (let i = 1; i < ex.length; ++i) {
    // income
    const i_s = ex[i][0];
    const i_e = ex[i][1];

    // ex
    const ele = res.pop();
    const s = ele[0];
    const e = ele[1];

    // inter
    if (i_s <= e && i_e >= s) {
      // merge
      res.push([Math.min(i_s, s), Math.max(i_e, e)]);
    } else {
      // no inter
      res.push(ele);
      res.push(ex[i]);
    }
  } // el

  return res;
};

const ex = [[1, 5]];
const income = [0, 0];
const out = insert(ex, income);
console.log(out);
