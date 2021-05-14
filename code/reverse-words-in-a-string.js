// sm: rev == start, end, swap; i<=j, swap_self; i<j, no_swap_self
const reverse = (a, i, j) => {
  while (i < j) {
    const t = a[i];
    a[i] = a[j];
    a[j] = t;
    ++i;
    --j;
  }

  return a;
};

const reverseWord = (a, i, j) => {
  while (j < a.length) {
    // i_skip_loop (consume_space, stop_at_char)
    while (i < a.length && a[i] === " ") ++i;
    j = i;
    // j_skip_loop (consume_char, stop_at_space)
    while (j < a.length && a[j] !== " ") ++j;
    // rev
    reverse(a, i, j - 1);
    i = j;
  }
  return a;
};

const cleanSpace = (a) => {
  let i = 0;
  let j = 0;

  while (j < a.length) {
    // skip_loop (consume_space; stop_at_char)
    while (j < a.length && a[j] === " ") ++j;
    // write_in_place(j posi >= i posi)
    while (j < a.length && a[j] !== " ") a[i++] = a[j++];
    // follow spaces -> 1 space
    while (j < a.length && a[j] == " ") j++;
    if (j < a.length) a[i++] = " ";
  }

  return a.join("").substring(0, i).split("");
};

var reverseWords = function (s) {
  if (s.length === 0) return "";

  let res = "";
  const a = s.split("");
  res = a;

  // rev whole (start, end, swap; i<=j, swap_self; i<j, no_swap_self)
  res = reverse(res, 0, s.length - 1);

  // rev each word (i_skip_loop, consume_space, stop_at_char; j_skip_loop, consume_char, stop_at_space)
  res = reverseWord(res, 0, 0);

  // clean space (skip_loop, consume_space, stop_at_char; write_in_place(j posi >= i posi); follow spaces -> 1 space)
  res = cleanSpace(res);

  return res.join("");
};

const input = "   a good   example  ";
const out = reverseWords(input);
console.log("++", "out", out);
