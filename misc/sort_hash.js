const orderHash = (s) => {
  let sh = {};
  let rev_sh = {};
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    // 1st time 1, later +1
    rev_sh[c] = rev_sh[c] === undefined ? 1 : rev_sh[c] + 1;
  }

  // get obj key; sort key; loop key_order, sh[key] = h[key]

  let res = "";
  let arr = [];
  while (res.length < s.length) {
    // 1. assending
    // before use clean up
    sh = {};
    arr = Object.keys(rev_sh);
    arr
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .forEach((key) => {
        // copy
        sh[key] = rev_sh[key];
      });

    // build str, rm key
    for (let key in sh) {
      res = res + key; // at least 1
      --sh[key];
      if (sh[key] === 0) {
        delete sh[key];
      }
    }

    //test
    console.log("1 +++ ", "sh", sh, "rev_sh", rev_sh);

    // 2. descending
    // before use, clean up
    rev_sh = {};
    arr = Object.keys(sh);
    arr
      .sort((a, b) => {
        return b.localeCompare(a);
      })
      .forEach((key) => {
        // copy
        rev_sh[key] = sh[key];
      });

    // build str, rm key
    for (let key in rev_sh) {
      res = res + key; // at least 1
      --rev_sh[key];
      if (rev_sh[key] === 0) {
        delete rev_sh[key];
      }
    }

    //test
    console.log("2 +++ ", "sh", sh, "rev_sh", rev_sh);
  }

  return res;
};

// const s = "leetcode";
// const out = orderHash(s);
// console.log("++ out", out);

const s = "gtqxozxzrssrzxzoxqtg";
const out = orderHash(s);
const expect = "goqrstxzzxtsrqogxzzx";
if (expect !== out) {
  console.log(expect);
  console.log(out);
}
