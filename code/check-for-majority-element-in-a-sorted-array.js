// sm: i, i+len; i vs i+len; then slide
const isMajority = (arr, x) => {
  const full_len = arr.length;
  const len = Math.floor(arr.length / 2);

  let i = 0;
  let i1 = i + len >= full_len ? full_len - 1 : i + len;
  while (i < full_len) {
    if (arr[i] === x && x === arr[i1]) return true;
    ++i;
    i1 = i + len >= full_len ? full_len - 1 : i + len;
  }

  return false;
};

// len = 7
const input = [1, 2, 3, 4, 4, 4, 4];
const x = 4;
const out = isMajority(input, x);
console.log(out);
