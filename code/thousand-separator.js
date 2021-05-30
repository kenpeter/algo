var thousandSeparator = function (n) {
  const s = n.toString();
  const len = s.length;

  let i = 0;
  let str = "";
  while (i < s.length) {
    const rest_len = len - i;
    if (rest_len % 3 === 0) {
      if (i === 0) {
        str = str + s[i];
      } else {
        str = str + "." + s[i];
      }
    } else {
      str = str + s[i];
    }

    ++i;
  }

  return str;
};

const input = 1234;
const out = thousandSeparator(input);
console.log(out);
