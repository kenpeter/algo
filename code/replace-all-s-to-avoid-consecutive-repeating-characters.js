// var modifyString = function (s) {
//   const a = s.split("");
//   // loop char
//   for (let i = 0; i < a.length; ++i) {
//     // each char
//     const c = a[i];
//     if (c === "?") {
//       for (j = 0; j < 3; ++j) {
//         if (i > 0 && a[i - 1].charCodeAt(0) === "a".charCodeAt(0) + j) continue;

//         if (
//           i + 1 < a.length &&
//           a[i + 1].charCodeAt(0) === "a".charCodeAt(0) + j
//         )
//           continue;

//         a[i] = String.fromCharCode("a".charCodeAt(0) + j);
//       }
//     }
//   }

//   return a.join("");
// };

// //const input = "?a???f?b???c?kb??d?";
// //const input = "?????";
// const input = "?a?";
// const out = modifyString(input);
// console.log(out);

var conv = (i) => {
  return String.fromCharCode("a".charCodeAt(0) + i);
};

var modifyString = function (ins) {
  const s = ins.split("");
  for (let i = 0; i < s.length; ++i) {
    if (s[i] == "?") {
      for (let j = 0; j < 26; ++j) {
        if (i === 0) {
          // only look right
          if (s[i + 1] !== conv(j)) {
            s[i] = conv(j);
            continue;
          }
        } else {
          if (s[i - 1] !== conv(j) && s[i + 1] !== conv(j)) {
            s[i] = conv(j);
            continue;
          }
        }
      }
    }
  }
  return s.join("");
};

const input = "???";
const out = modifyString(input);
console.log(out);
