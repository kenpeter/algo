const largestUniNum = (a) => {
  const h = {};
  for (let i = 0; i < a.length; ++i) {
    const n = a[i];
    if (h[n] === undefined) {
      h[n] = 1;
    } else {
      delete h[n];
    }
  }

  const arr = Object.keys(h);
  if (arr.length === 0) {
    return -1;
  } else {
    return Math.max(...arr);
  }
};

const input = [9, 9, 8, 8];
//const input = [5, 7, 3, 9, 4, 9, 8, 3, 1];
const out = largestUniNum(input);
console.log("+++ out", out);
