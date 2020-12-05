const getOut = (s, num) => {
  if (s === num) {
    return "" + s;
  } else {
    return s + "->" + num;
  }
};

const missRange = (arr, low, high) => {
  let s = low;
  const res = [];
  // loop each num
  for (let i = 0; i < arr.length; ++i) {
    const n = arr[i];
    // * s(potential_start, miss), curr_n(exist)
    // * potential_start > curr_n, e.g. 6 > 1; not form range, con
    if (s > n) {
      continue;
    } else if (s === n) {
      // * potential_start === curr_n, not form range, s moves 1
      s = s + 1;
      continue;
    } else {
      if (s > high) {
        continue;
      }
      // * s < curr_n, can form range
      res.push(getOut(s, n - 1));
      // * s moves to next_not_exist
      s = n + 1;
    }
  } // end loop

  // when high is bigger
  if (s <= high) {
    res.push(getOut(s, high));
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
