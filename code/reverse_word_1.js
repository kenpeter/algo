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
  // i < a.len
  while (i < a.length) {
    // i_start
    while (i < a.length && a[i] === " ") {
      ++i;
      //test
      console.log("### i", i);
    }
    // j_end
    j = i;
    while (j < a.length && a[j] !== " ") {
      ++j;
      //test
      console.log("*** j", j);
    }
    a = reverse(a, i, j - 1);
    // new cycle
    i = j;
  }

  return a;
};

const cleanSpace = (a) => {
  // i write
  let i = 0;
  // j read
  let j = 0;

  // j < a.len
  while (j < a.length) {
    // j read, skip start_space
    while (j < a.length && a[j] === " ") ++j;
    // i write
    while (j < a.length && a[j] !== " ") a[i++] = a[j++];
    // j read, skip end_space
    while (j < a.length && a[j] == " ") j++;
    // extra 1 space
    if (j < a.length) a[i++] = " ";
  }

  // left_good, right waste
  return a.join("").substring(0, i).split("");
};

var reverseWords = function (s) {
  if (s.length === 0) return "";

  // str to arr
  let res = "";
  const a = s.split("");
  res = a;

  // rev whole
  res = reverse(res, 0, s.length - 1);
  //test
  console.log("1. ++ res", res);

  // rev word
  res = reverseWord(res, 0, 0);
  //test
  console.log("2. ++ res", res);

  // clean space
  res = cleanSpace(res);
  //test
  console.log("3. ++ res", res);

  // arr to str
  return res.join("");
};

const input = "the sky is blue";
const out = reverseWords(input);
console.log("++++ out", out);
