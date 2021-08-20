// https://coderbyte.com/algorithm/two-sum-problem
// sm: brute_force
// function twoSum(arr, tar) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === tar) {
//         res.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return res;
// }

// const input = [3, 5, 2, -4, 8, 11];
// const tar = 7;
// const out = twoSum(input, 7);
// console.log(out);

function twoSum(a, tar) {
  const m = new Map();

  const res = [];
  for (let i = 0; i < a.length; ++i) {
    if (m.get(tar - a[i]) !== undefined) {
      res.push([tar - a[i], a[i]]);
    }

    m.set(a[i], true);
  }

  return res;
}

const input = [3, 5, 2, -4, 8, 11];
const tar = 7;
const out = twoSum(input, 7);
console.log(out);
