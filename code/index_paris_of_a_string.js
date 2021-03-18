// https://xingxingpark.com/Leetcode-1065-Index-Pairs-of-a-String/
// https://medium.com/algorithm-and-datastructure/index-pairs-of-a-string-7b7c8306ead0

const compare = (a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
};

const indexPairs = (str, ws) => {
  const res = [];
  // loop each words
  for (let i = 0; i < ws.length; ++i) {
    const w = ws[i];

    // slide the word
    for (let j = 0; j <= str.length - w.length; ++j) {
      if (str.substring(j, j + w.length) === w) {
        res.push([j, j + w.length - 1]);
      }
    }
  }

  // sort
  res.sort(compare);

  return res;
};

// const text = "thestoryofleetcodeandme";
// const words = ["story", "fleet", "leetcode"];
// const out = indexPairs(text, words);
// console.log("++ out", out);

const text = "ababa";
const words = ["aba", "ab"];
const out = indexPairs(text, words);
console.log("++ out", out);
