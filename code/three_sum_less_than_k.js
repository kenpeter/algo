// https://www.geeksforgeeks.org/count-triplets-with-sum-smaller-that-a-given-value/

const threeSumLessThanK = (a, s) => {
  // sort
  a.sort((a, b) => a - b);

  let res = 0;
  // outloop: 1_ele + 2sum
  for (let i = 0; i < a.length - 2; ++i) {
    let sec = i + 1;
    let thi = a.length - 1;
    while (sec < thi) {
      // inloop: 1_ele + 2sum
      if (a[i] + a[sec] + a[thi] >= s) {
        // sort, >= k, end--;
        --thi;
      } else {
        // e.g. [-2_i, 0_sec, 1, 3_thi]; [-2, 0, 3], [-2, 0, 1]; thi - sec == 2 == res
        res = res + (thi - sec);
        // sort, < k, start++;
        sec++;
      }
    }
  }

  return res;
};

// const input = [-2, 0, 1, 3];
// const sum = 2;
// const out = threeSumLessThanK(input, sum);
// console.log("++ out", out);

const input = [5, 1, 3, 4, 7];
const sum = 12;
const out = threeSumLessThanK(input, sum);
console.log("++ out", out);
