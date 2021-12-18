// https://www.techiedelight.com/count-strictly-increasing-sub-arrays/
// https://kalkicode.com/count-strictly-increasing-subarrays-using-dynamic-programming

const getCount = (ns) => {
  const a = [];
  for (let i = 0; i < ns.length; ++i) {
    const tmp = [];
    for (let j = i; j >= 0; --j) {
      if (i === j) {
        tmp.push(ns[j]);
        a.push(tmp.slice(0)); // push, not copy new obj
      } else if (ns[j] < ns[j + 1]) {
        tmp.unshift(ns[j]);
        a.push(tmp.slice(0)); // push, not copy new obj
      } else {
        break;
      }
    } // el
  } // el

  return a;
};

// const ns = [1, 2, 4, 4, 5];
// const out = getCount(ns);
// console.log(out);

// const ns = [5, 4, 3, 2, 1];
// const out = getCount(ns);
// console.log(out);

// const ns = [1, 2, 5, 7, 1, 3, 4];
// const out = getCount(ns);
// console.log(out);

// const ns = [1, 3, 2, 7, 7, 1, 4, 6];
// const out = getCount(ns);
// console.log(out);

const ns = [1, 3, 2];
const out = getCount(ns);
console.log(out);
