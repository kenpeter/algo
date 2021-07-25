var say = function (s, ind) {
  if (ind === 0) return "1"; // follow loop len

  // leading_char (reset part)
  let ch = s[0];
  let c = 1;
  let res = "";

  //
  for (let i = 1; i < s.length; ++i) {
    // continue (leading_char vs new_char)
    if (ch === s[i]) {
      ++c;
    } else {
      // reset (finish past; reset_curr; curr_tobe_past)
      res = res + c.toString() + ch;

      ch = s[i].toString();
      c = 1;
    }
  }

  // reset missing for last char
  res = res + c.toString() + ch;

  return res;
};

var countAndSay = function (n) {
  let input;
  // input -> output -> input
  for (let i = 0; i < n; ++i) {
    input = say(input, i);
  }

  return input;
};

const input = "5";
const out = countAndSay(input);
console.log(out);
