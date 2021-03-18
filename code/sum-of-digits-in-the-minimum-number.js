const sumOfDigits = (a) => {
  let mi = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < a.length; ++i) {
    const n = a[i];
    if (n < mi) {
      mi = n;
    }
  }

  let res = 0;
  while (mi > 0) {
    lastD = mi % 10;
    res = res + lastD;
    mi = Math.floor(mi / 10);
  }

  //test
  console.log("++ mi", mi);

  if (res % 2 === 0) return 1;
  if (res % 2 !== 0) return 0;

  return res;
};

//const input = [99, 77, 33, 66, 55];
const input = [34, 23, 1, 24, 75, 33, 54, 8];
const out = sumOfDigits(input);
console.log("++ out", out);
