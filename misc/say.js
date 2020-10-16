var say = function (s) {
  let i = 0;
  let j = 0;
  let res = "";
  // bound
  while (j < s.length) {
    // consume same kind, bound
    while (j < s.length && s[i] === s[j]) {
      ++j;
    }
    // get num
    let num = (j - i).toString();
    // i stay, get def
    let def = s[i];
    // acc
    res = res + num + def;

    // i moves to next pattern
    i = j;
  }

  return res;
};

//const input = "1211";
//const input = "312211";
const out = say(input);
console.log("+++ out", out);
