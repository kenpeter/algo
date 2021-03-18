// const validWordAbbreviation = (w, a) => {};

// const w = "abbreviation";
// const a = "a010n";
// const out = validWordAbbreviation(w, a);
// const expect = false;
// if (expect === out) {
//   console.log("good");
// } else {
//   console.log("bad");
// }

// is letter
function isl(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function turnS(s, i, j) {
  const n = s.substring(i, j);
  // leading 0
  if (n[0] === "0") {
    return false;
  }
  const num = parseInt(n);
  let str = "";
  for (let i = 0; i < num; i++) {
    str = str + "#";
  }
  return str;
}

function convertNum(s) {
  let i = 0;
  let j = 0;
  let len = s.length;
  let res = "";
  while (j < len) {
    // skip char
    while (j < len && isl(s[j])) {
      res = res + s[j];
      ++j;
    }
    // start num
    i = j;
    // skip #
    while (j < len && !isl(s[j])) ++j;
    const symbol = turnS(s, i, j);
    if (symbol === false) {
      return false;
    } else {
      res = res + symbol;
    }

    // hit next letter or hit end
  } // end loop

  return res;
}

function compare(w, a) {
  const num = convertNum(input);
  if (num === false) return false;
  // loop at the same time
}

const input = "2b1z2a";
