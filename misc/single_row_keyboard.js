const singleRow = (ks, ws) => {
  const h = {};
  for (let i = 0; i < ks.length; ++i) {
    h[ks[i]] = i;
  }

  // e.g. cba -> acba
  const w = ks[0] + ws;
  const a = w.split("");
  let res = 0;
  for (let i = 1; i < a.length; ++i) {
    const l2 = a[i];
    const l1 = a[i - 1];
    const dist = Math.abs(h[l1] - h[l2]);
    console.log("++ dist", dist);
    res = res + dist;
  }

  return res;
};

let keyboard = "abcdefghijklmnopqrstuvwxyz";
let word = "cba";
let out = singleRow(keyboard, word);
console.log("++ out", out);

keyboard = "pqrstuvwxyzabcdefghijklmno";
word = "hello";
out = singleRow(keyboard, word);
console.log("++ out", out);
