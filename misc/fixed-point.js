// https://code.dennyzhang.com/fixed-point

const fixedPoint = (a) => {
  for (let i = 0; i < a.length; ++i) {
    const n = a[i];
    if (n === i) {
      return i;
    }
  }

  return -1;
};

// const input = [-10, -5, 0, 3, 7];
// const input = [0, 2, 5, 8, 17];
const input = [-10, -5, 3, 4, 7, 9];
const out = fixedPoint(input);
console.log("++ out", out);
