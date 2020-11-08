// https://gist.github.com/yitonghe00/76a5f3034c9c81ebf8be3433e6865eae
// https://leetcode.com/problems/two-sum-less-than-k/

/*
// SUMMA: i=0, i+1<a.len; j=i+1, j<a.len; update_max + sum < k
const lessk = (a) => {
    // * use max
  let ma = -Number.MAX_SAFE_INTEGER;
  // * outloop, i=0, i+1<a.len; save_for_another_var
  for (let i = 0; i + 1 < a.length; ++i) {
    // * inloop, j=i+1, j < a.length; start behind
    for (let j = i + 1; j < a.length; ++j) {
      const sum = a[i] + a[j];

      // * update_max + sum < k
      if (sum > ma && sum < k) {
        ma = sum;
      }
    }
  }

  // * not update ma, -1; else ma
  return ma === -Number.MAX_SAFE_INTEGER ? -1 : ma;
};
const a = [2, 7, 3, 4];
const k = 6;
const out = lessk(a, k);
console.log("++ out", out);
*/

// SUMMA: sort; i_start, j_end; a[i_start] + a[j_end] < k, ++i, look_for_bigger; --j, look_for_smaller
const lessk = (a, k) => {
  res = -1;
  // sort
  a.sort((a, b) => a - b);
  let i = 0;
  let j = a.length - 1;
  // * i_start, j_end
  // * a[i_start] + a[j_end] < k; ++i, look_for_bigger; update_max
  // * a[i_start] + a[j_end] >= k; --j, look_for_smaller;
  while (i < j) {
    if (a[i] + a[j] < k) {
      res = Math.max(res, a[i] + a[j]);
      ++i;
    } else {
      --j;
    }
  }

  return res;
};
const a = [2, 7, 3, 4];
const k = 6;
const out = lessk(a, k);
console.log("++ out", out);
