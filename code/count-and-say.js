var say = function (s) {
  if (s === "0") return "1";

  let mychar = s[0];
  let c = 0;
  let res = "";

  for (let i = 0; i <= s.length; ++i) {
    if (mychar === s[i]) {
      ++c;
    } else {
      res = res + c + s[i - 1];
      c = 1;
      mychar = s[i];
    }
  }

  return res;
};

var countAndSay = function (n) {
  if (n === 1) return "1";

  let res = "0";
  for (let i = 0; i < n; i++) {
    res = say(res);
  }

  return res;
};

const input = 6;
const out = countAndSay(input);
console.log(out);
