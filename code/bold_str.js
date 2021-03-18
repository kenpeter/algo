// https://massivealgorithms.blogspot.com/2017/06/leetcode-616-add-bold-tag-in-string.html

// build_mind_map, easier_do_stuff
const bold_str = (s, d) => {
  let res = "";
  // build_mind_map
  const b = new Array(s.length).fill(false);
  // loop ele
  for (let i = 0; i < d.length; i++) {
    const w = d[i];
    // * loop tar
    // * dynamic loop_len
    for (j = 0; j <= s.length - w.length; j++) {
      // slide word sub(j, j+w.len) in str (s.len - w.len), find its match
      if (s.substring(j, j + w.length) === w) {
        // fill substring
        for (let k = j; k < j + w.length; k++) {
          b[k] = true;
        }
      }
    }
  } // end loop

  // loop mind_map
  for (let i = 0; i < b.length; ) {
    if (b[i]) {
      // start_loop, tag
      res = res + "<b>";
      // mid_loop: greedy
      while (i < s.length && b[i]) {
        res = res + s[i++];
      }
      // end_loop, tag
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
