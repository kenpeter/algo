// https://codenuclear.com/leetcode-counting-elements-30days-challenge/

const countEle = (a) => {
  let res = 0;
  for (let i = 0; i < a.length; ++i) {
    const e = a[i];
    if (a.includes(e + 1)) {
      ++res;
    }
  }

  return res;
};

// const a = [1, 3, 2, 3, 5, 0];
// const out = countEle(a);
// console.log("++ out", out);

// const a = [1, 2, 3];
// const out = countEle(a);
// console.log("++ out", out);

// const a = [1, 1, 3, 3, 5, 5, 7, 7];
// const out = countEle(a);
// console.log("++ out", out);

const a = [1, 1, 2, 2];
const out = countEle(a);
console.log("++ out", out);
