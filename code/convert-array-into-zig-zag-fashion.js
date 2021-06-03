// https://practice.geeksforgeeks.org/problems/convert-array-into-zig-zag-fashion1638/1#
const zigZag = (a) => {
  for (let i = 1; i < a.length; i = i + 2) {
    const prev = i - 1;
    const next = i + 1;
    if (a[i] < a[prev]) {
      const t = a[i];
      a[i] = a[prev];
      a[prev] = t;
    }
    if (a[i] < a[next]) {
      const t = a[i];
      a[i] = a[next];
      a[next] = t;
    }
  }

  return a;
};

const input = [4, 3, 7, 8, 6, 2, 1];
const out = zigZag(input);
console.log(out);
