// rev
const reverse = (a, i, j) => {
  // i, j will cross over
  while (i <= j) {
    // swap
    let t = a[i];
    a[i] = a[j];
    // move right
    ++i;
    a[j] = t;
    // move left
    --j;
  }

  return a;
};

// // input
// const str = "ab";
// const i = 0;
// const j = str.length - 1;
// const out = reverse(str.split(""), i, j);
// console.log("+++ out", out);

// NOTE 1
// * SUMMA => rev whole str
// * i, j will cross over
// * swap

const reverseWord = (a, i, j) => {
  // i w_start, j w_end

  // j until str_end
  while (j < a.length) {
    // * 2 portion: (1) i < j, i find start_posi; (2) skip space
    while (i < j || (i < a.length && a[i] === " ")) ++i;

    // * 2 portion: (1) j < j, j find end_posi; (2) skip char
    while (j < i || (j < a.length && a[j] !== " ")) ++j;

    // rev; j hit space to stop, so j-1
    reverse(a, i, j - 1);
  }

  // ref
  return a;
};

// const str = "eulb si yks eht";
// const i = 0;
// const j = 0;
// const out = reverseWord(str.split(""), i, j);
// console.log("+++ out", out);

// NOTE 2
// * SUMMA => rev each word in rev_str
// * i w_start, j w_end
// * j until str_end
// * 2 portion: (1) i < j, i find start_posi; (2) skip space
// * 2 portion: (1) j < j, j find end_posi; (2) skip char
// * rev; j hit space to stop, so j-1

const cleanSpace = (a) => {
  // i to res arr (short, write); j to orig_arr (long, read)
  let i = 0;
  let j = 0;

  // j until str_end
  while (j < a.length) {
    // j skip front_space
    while (j < a.length && a[j] === " ") ++j;
    // copy j to i
    while (j < a.length && a[j] !== " ") a[i++] = a[j++];
    // j skip end_space
    while (j < a.length && a[j] == " ") j++;
    // above skip all, add 1 space
    if (j < a.length) a[i++] = " ";
  }

  // substring(0, i), i stop
  return a.join("").substring(0, i);
};

// const str = "abc   d";
// const out = cleanSpace(str.split(""));
// console.log("+++ out", out);

// NOTE 3
// * SUMMA => i to res arr (short, write); j to orig_arr (long, read)
// * i to res arr (short, write); j to orig_arr (long, read)
// * j until str_end
// * j skip front_space
// * copy j to i
// * j skip end_space
// * above skip all, add 1 space

const finalRev = (s) => {
  if (s.length === 0) return "";

  let res = "";
  const a = s.split("");

  // rev whole str (group stay)
  res = reverse(a, 0, s.length - 1);
  // rev each word (group stay)
  res = reverseWord(res, 0, 0);
  // clean space
  return (res = cleanSpace(res));
};

const s = "the sky is blue";
const out = finalRev(s);
console.log("+++ out", out);

// NOTE 4
// * SUMMA => rev whole str (group stay); rev each word (group stay); clean_space
