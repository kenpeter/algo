var insert = function (ex, income) {
  if (ex.length === 0) {
    return [income];
  }

  const res = [];

  // loop ex
  let i = 0;
  let j = 0;
  let mergeFlag = false;

  // find
  for (i = 0; i < ex.length; ++i) {
    // ex
    const s = ex[i][0];
    const e = ex[i][1];

    // income
    const i_s = income[0];
    const i_e = income[1];

    // inbetween
    if (i_s <= e && i_e >= s) {
      res.push([Math.min(i_s, s), Math.max(i_e, e)]);
      mergeFlag = true;
      break; // stop now
    } else {
      res.push(ex[i]);
    }
  } // el

  // merge later
  if (i === ex.length) {
    if (mergeFlag === false) {
      res.push(income);
    }
    res.sort((a, b) => a[0] - b[0]);
    return res;
  } else {
    const last = res.length - 1;
    for (j = i + 1; j < ex.length; ++j) {
      // ex
      const s = res[last][0];
      const e = res[last][1];

      // income
      const i_s = ex[j][0];
      const i_e = ex[j][1];

      // inter
      if (e >= i_s) {
        res[last][1] = Math.max(e, i_e);
      } else {
        // no inter
        break;
      }
    } // el

    while (j < ex.length) {
      res.push(ex[j++]);
    } // el
  }

  return res;
};

const ex = [[1, 5]];
const income = [6, 8];
const out = insert(ex, income);
console.log(out);

// const ex = [[1, 5]];
// const income = [0, 3];
// const out = insert(ex, income);
// console.log(out);
