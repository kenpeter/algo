var buildSpace = function (n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res = res + " ";
  }
  return res;
};

var reorderSpaces = function (t) {
  // words in arr
  const w_arr = t.match(/\b(\w+)\b/g);
  // how many word
  const w_len = w_arr.length;

  // how many space
  const s_len = t.split(" ").length - 1;

  //test
  let tmp = t.split(" ");
  console.log(tmp);

  // when 1 word, corner case
  if (w_len === 1) return w_arr.join("") + Array(s_len).fill(" ").join("");

  // space segment
  const sepa = Math.floor(s_len / (w_len - 1));

  // remain_space to end
  const remain = s_len % (w_len - 1);

  // connect word + remain_space
  return (
    w_arr.join(Array(sepa).fill(" ").join("")) +
    Array(remain).fill(" ").join("")
  );
};

const input = "  this   is  a sentence ";
const out = reorderSpaces(input);
console.log(out);
