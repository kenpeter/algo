const recur = (arr, str, open, close, max) => {
  if (str.length === max * 2) {
    arr.push(str);
    return;
  }

  if (open < max) recur(arr, str + "(", open + 1, close, max);
  if (close < open) recur(arr, str + ")", open, close + 1, max);
};

const generateParenthesis = (n) => {
  const arr = [];
  recur(arr, "", 0, 0, n);
  return arr;
};

const n = 3;
const out = generateParenthesis(n);
console.log(out);
