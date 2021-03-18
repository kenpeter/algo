const getOut = (s, num) => {
  if (s === num) {
    return "" + s;
  } else {
    return s + "->" + num;
  }
};

const missRange = (arr, low, high) => {
  // * input_range, low, high
  // * start with low
  let curr_print = low;
  const res = [];
  // loop arr
  for (let i = 0; i < arr.length; ++i) {
    const n = arr[i];
    // e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
    // * 1, 2, 3, 4, 5 skip;
    if (curr_print > n) {
      continue;
    } else if (curr_print === n) {
      // e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
      // * 10 already there, skip; curr_print + 1
      curr_print = curr_print + 1;
      continue;
    } else {
      // curr_print > input_range, skip
      if (curr_print > high) {
        continue;
      }

      // e.g. [1, 2, 3, 4, 5, 10, 100, 1000]; low=10, high=100 (input_range);
      // * curr_print == 11, n-1 (avoid_n), print
      res.push(getOut(curr_print, n - 1));

      // * curr_print = n + 1 (avoid_n)
      curr_print = n + 1;
    }
  } // end loop

  // end_loop, curr_print <= input_range, print rest
  if (curr_print <= high) {
    res.push(getOut(curr_print, high));
  }

  return res;
};

// const low = 10;
// const high = 100;
// const arr = [1, 10, 100, 1000];
// const out = missRange(arr, low, high);
// console.log("+++ out", out);

const low = -1;
const high = 1001;
const arr = [1, 10, 100, 1000];
const out = missRange(arr, low, high);
console.log("+++ out", out);
