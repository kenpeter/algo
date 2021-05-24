// there is a gap, there is missing_range
// https://goodtecher.com/leetcode-163-missing-ranges/
// https://medium.com/@rebeccahezhang/leetcode-163-missing-ranges-6ac21b477e96
// https://wentao-shao.gitbook.io/leetcode/array/163.missing-ranges
const getOut = (s, num) => {
  if (s === num) {
    return "" + s;
  } else {
    return s + "->" + num;
  }
};

const missRange = (arr, low, high) => {
  // c_res, lower bound
  let c_res = low;
  const res = [];

  for (let i = 0; i < arr.length; ++i) {
    const n = arr[i];
    // arr_ele too small, no gap
    if (c_res > n) {
      continue;
    } else if (c_res === n) {
      // arr_ele same, no gap
      c_res = c_res + 1;
      continue;
    } else {
      // guard
      if (c_res > high) {
        continue;
      }

      // c_res and arr_ele, has a gap
      res.push(getOut(c_res, n - 1));
      c_res = n + 1;
    }
  }

  // anything left
  if (c_res <= high) {
    res.push(getOut(c_res, high));
  }

  return res;
};

// // left out_bound; -10 -> 1 gap
// const low = -10;
// const high = -1;
// const arr = [1, 2, 3, 4, 5, 10, 100, 1000];
// const out = missRange(arr, low, high);
// console.log("+++ out", out);

// // left cross_bound; -10 -> 1 gap
// const low = -10;
// const high = 100;
// const arr = [1, 2, 3, 4, 5, 10, 100, 1000];
// const out = missRange(arr, low, high);
// console.log("+++ out", out);

// // within; orig 5-10 gap, 10->100 gap
// const low = 2;
// const high = 100;
// const arr = [1, 2, 3, 4, 5, 10, 100, 1000];
// const out = missRange(arr, low, high);
// console.log("+++ out", out);

// // right cross_bound; 100 -> 1000 gap; 1000 -> 2000 gap
// const low = 100;
// const high = 2000;
// const arr = [1, 2, 3, 4, 5, 10, 100, 1000];
// const out = missRange(arr, low, high);
// console.log("+++ out", out);

// right out_bound; 2000 -> 3000 gap
const low = 2000;
const high = 3000;
const arr = [1, 2, 3, 4, 5, 10, 100, 1000];
const out = missRange(arr, low, high);
console.log("+++ out", out);
