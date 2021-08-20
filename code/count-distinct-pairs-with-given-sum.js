// https://www.geeksforgeeks.org/count-distinct-pairs-with-given-sum/

// 2sum (no repeated) i_start, j_end; skip_loop
const countDistinct = (a, tar) => {
  let i = 0;
  let j = a.length - 1;
  a.sort();

  let res = 0;
  while (i < j) {
    if (a[i] + a[j] === tar) {
      while (i < j && a[i] === a[i + 1]) ++i; // no dup, no enter; dup move
      while (j > i && a[j] === a[j - 1]) --j; // no dup, no enter; dup move
      ++res;

      // able to get out of dup
      ++i;
      --j;
    } else if (a[i] + a[j] < tar) {
      ++i; // want to cross
    } else {
      --j; // want to cross
    }
  }

  return res;
};

const input = [5, 6, 5, 7, 7, 8];
const tar = 13;
const out = countDistinct(input, tar);
