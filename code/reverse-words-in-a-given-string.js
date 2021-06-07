// https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string5459/1

const swap = (a, i, j) => {
  while (i < j) {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
    ++i;
    --j;
  }
};

const reverseWords = (s) => {
  const len = s.length;
  const t = s.split("").reverse();

  let i = 0;
  let j = 0;
  while (i < len && j < len) {
    while (j < len && t[j] !== ".") {
      ++j;
    }

    swap(t, i, j - 1);

    i = j + 1;
    j = i;
  }

  return t.join("");
};

const input = "i.like.this.program.very.much";
//const input = "i.like";
const out = reverseWords(input);
console.log(out);
