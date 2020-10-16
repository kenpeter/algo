// https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

// build_mem (mind_map), do_stuff
const bold_str = (s, d) => {
  let res = "";
  const b = new Array(s.length).fill(false);
  // loop each word
  for (let i = 0; i < d.length; i++) {
    const w = d[i];
    // * "aabc" (s.l == 4), [ab] (w.l == 2), i(0)<=(4-2=2); 3 times, aa == ab(x), ab == ab(*), bc == ab(x)
    // * loop_len changed by parent_len
    for (j = 0; j <= s.length - w.length; j++) {
      if (s.substring(j, j + w.length) === w) {
        // mark bold arr
        for (let k = j; k < j + w.length; k++) {
          b[k] = true;
        }
      }
    }
  } // end loop

  // loop bold arr
  for (let i = 0; i < b.length; ) {
    if (b[i]) {
      // start_loop
      res = res + "<b>";
      // loop: loop 1 bold or loop >= 1 bold
      while (i < s.length && b[i]) {
        // append and ++
        res = res + s[i++];
      }
      // end_llop
      res = res + "</b>";
    } else {
      res = res + s[i++];
    }
  }

  return res;
};

// const s = "aabc";
// const d = ["ab", "bc"];
// const expect = "a<b>abc</b>";
// const out = bold_str(s, d);
// if (out === expect) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// const s = "abcxyz123";
// const d = ["abc", "123"];
// const expect = "<b>abc</b>xyz<b>123</b>";
// const out = bold_str(s, d);
// if (out === expect) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

const s = "aaabbcc";
const d = ["aaa", "aab", "bc"];
const expect = "<b>aaabbc</b>c";
const out = bold_str(s, d);
if (out === expect) {
  console.log("good");
} else {
  console.log("bad");
}
