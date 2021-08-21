// https://www.geeksforgeeks.org/count-distinct-pairs-with-given-sum/

// // 2sum (no repeated) i_start, j_end; skip_loop
// const countDistinct = (a, tar) => {
//   let i = 0;
//   let j = a.length - 1;
//   a.sort();

//   let res = 0;
//   while (i < j) {
//     if (a[i] + a[j] === tar) {
//       while (i < j && a[i] === a[i + 1]) ++i; // no dup, no enter; dup move
//       while (j > i && a[j] === a[j - 1]) --j; // no dup, no enter; dup move
//       ++res;

//       // able to get out of dup
//       ++i;
//       --j;
//     } else if (a[i] + a[j] < tar) {
//       ++i; // want to cross
//     } else {
//       --j; // want to cross
//     }
//   }

//   return res;
// };

// const input = [5, 6, 5, 7, 7, 8];
// const tar = 13;
// const out = countDistinct(input, tar);

// https://hjweds.gitbooks.io/leetcode/content/two-pointers/2-sum-all-pair-ii.html
// sm: num + num == tar
const countDistinct = (a, tar) => {
  const m = new Map();
  const res = [];
  for (let i = 0; i < a.length; ++i) {
    const n = a[i];

    // hash (relate_prev)
    if (
      m.get(tar - n) !== undefined &&
      m.get(n) !== undefined &&
      m.get(tar - n) === 1 &&
      tar - n === n
    ) {
      // same_non_fresh + same_non_fresh == tar -> unique_pair
      res.push([n, n]);
    } else if (m.get(tar - n) !== undefined && m.get(n) === undefined) {
      // non_fresh + fresh -> unique_pair
      res.push([tar - n, n]);
    }

    if (m.get(n) !== undefined) {
      // hash (direct_prev)
      m.set(n, m.get(n) + 1);
    } else {
      m.set(n, 1);
    }
  }

  return res;
};

const input = [5, 5, 6, 6, 6, 7, 7, 8]; // [6, 6], [5, 7]
const tar = 12;
const out = countDistinct(input, tar);
console.log(out);
