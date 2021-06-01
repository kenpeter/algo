const findElement = (a, n) => {
  const ls = Array(a.length).fill(0);
  const rs = Array(a.length).fill(0);

  ls[0] = a[0];
  for (let i = 1; i < a.length; ++i) {
    if (a[i] > ls[i - 1]) {
      ls[i] = a[i];
    } else {
      ls[i] = ls[i - 1];
    }
  }

  rs[a.length - 1] = a[a.length - 1];
  for (let i = a.length - 2; i >= 0; --i) {
    if (a[i] < rs[i + 1]) {
      rs[i] = a[i];
    } else {
      rs[i] = rs[i + 1];
    }
  }

  for (let i = 0; i < a.length; ++i) {
    if (a[i] === ls[i] && a[i] === rs[i]) {
      return a[i];
    }
  }

  return -1;
};

const out = findElement([10, 6, 3, 1, 5, 11, 6, 1, 11, 12], 3);
console.log(out);
