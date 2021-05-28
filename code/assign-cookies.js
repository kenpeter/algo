var findContentChildren = function (child, cookie) {
  child.sort((a, b) => a - b);
  cookie.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  while (i < child.length && j < cookie.length) {
    if (cookie[j] >= child[i]) {
      ++i;
    }

    ++j;
  }

  return i;
};

const child = [2, 2];
const cookie = [1, 10];
const out = findContentChildren(child, cookie);
console.log(out);
