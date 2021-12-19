// https://leetcode.com/discuss/interview-question/967207/twitter-phone-screen-number-of-continuous-increasing-count-in-array

const getCount = (ns) => {
  const a = [];
  for (let i = 0; i < ns.length; ++i) {
    let c = 0;
    let flag = false;
    for (let j = i; j >= 0; --j) {
      if (i === j || ns[j] < ns[i]) {
        ++c;
      } else {
        break;
      }
    } // el

    a.push(c);
  } // el

  return a;
};

const ns = [100, 10, 50, 60, 20, 90, 110];
const out = getCount(ns);

//  [1, 1, 2, 3, 1, 5, 7]
console.log(out);
