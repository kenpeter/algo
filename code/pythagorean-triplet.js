const checkTriplet = (a, n) => {
  if (a.length <= 2) return false;

  a.sort((a, b) => a - b);

  for (let k = a.length - 1; k >= 2; --k) {
    let i = 0;
    let j = k - 1;
    while (i < j) {
      const s = a[i] ** 2 + a[j] ** 2;
      const s1 = a[k] ** 2;
      if (s < s1) {
        ++i;
      } else if (s > s1) {
        --j;
      } else {
        return true;
      }
    }
  }

  return false;
};

const input = [3, 2, 4, 6, 5];
const out = checkTriplet(input);
console.log(out);
