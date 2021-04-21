// https://practice.geeksforgeeks.org/problems/-rearrange-array-alternately-1587115620/1

const rearr = (a) => {
  const res = [];
  let i = 0;
  let j = a.length - 1;
  while (i <= j) {
    if (i <= j) res.push(a[j]);
    --j;
    if (i <= j) res.push(a[i]);
    ++i;
  }

  return res;
};

// const input = [1, 2, 3, 4, 5, 6];
// const out = rearr(input);
// console.log("out", out);

// const input = [1, 2, 3];
// const out = rearr(input);
// console.log("out", out);

const input = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const out = rearr(input);
const exp = [110, 10, 100, 20, 90, 30, 80, 40, 70, 50, 60];
console.log("out", out);
