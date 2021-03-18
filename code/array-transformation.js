const transformArray = (a) => {
  // < size 2
  if (a.length < 2) {
    return a;
  }

  while (true) {
    // a to compare, t to change, co-exit
    const t = a.slice();
    let flag = false;

    // i=1 -> a[i-1]; i<len-1 -> a[i+1]
    for (let i = 1; i < a.length - 1; ++i) {
      // big 2 side -> small
      if (a[i] > a[i - 1] && a[i] > a[i + 1]) {
        --t[i];
        flag = true;
      }

      // small 2 side -> big
      if (a[i] < a[i - 1] && a[i] < a[i + 1]) {
        ++t[i];
        flag = true;
      }

      //test
      console.log("====");
      console.log("++ a", a);
      console.log("++ t", t);
    }

    // a to compare, t to change, co-exit
    a = t;

    if (flag === false) {
      break;
    }
  }

  return a;
};

// const input = [6, 2, 3, 4];
// // [6,3,3,4]
// const out = transformArray(input);
// console.log("++ out", out);

const input = [1, 6, 3, 4, 3, 5];
// [1,4,4,4,4,5]
const out = transformArray(input);
console.log("++ out", out);
