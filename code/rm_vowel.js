const rmVowel = (s) => {
  const arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const a = s.split("");
  // loop str
  for (let i = 0; i < a.length; ++i) {
    if (arr.includes(a[i])) {
      // rm_item; a.len reduce
      a.splice(i, 1);
      // rm_item, next_item_move_left; i stay, --i, ++i;
      --i;
    }
  }

  return cleanSpace(a);
};

const cleanSpace = (a) => {
  // same start
  let i = 0;
  // same start
  let j = 0;
  // len
  const len = a.length;
  //
  while (j < len) {
    // clean space
    while (j < len && a[j] === " ") ++j;
    // copy
    while (j < len && a[j] !== " ") {
      a[i++] = a[j++];
    }
    // clean space
    while (j < len && a[j] === " ") ++j;
    // 1 space
    if (j < len) a[i++] = " ";
  } // end_loop

  // only get copy on left
  return a.join("").substring(0, i);
};

const input = "GeeeksforGeeks - A Computer Science Portal for Geeks";
const expOutput = "GksfrGks - Cmptr Scnc Prtl fr Gks";
// const input = " a b c ";
// const expOutput = "b c";
const out = rmVowel(input);
if (out === expOutput) {
  console.log(expOutput);
  console.log(out);
  console.log("good");
} else {
  console.log(expOutput);
  console.log(out);
  console.log("bad");
}
