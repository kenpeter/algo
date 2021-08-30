// // sm: brute_force; tmp_str, income_char dup?
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   for (let i = 0; i < s.length; ++i) {
//     let s1 = "";
//     for (let j = i; j < s.length; ++j) {
//       const ind = s1.indexOf(s[j]);
//       if (ind === -1) {
//         s1 = s1 + s[j];
//       } else {
//         break;
//       }
//     } // end loop

//     max = Math.max(max, s1.length);
//   } // end loop

//   return max;
// };

// const s = "pwwkew";
// const out = lengthOfLongestSubstring(s);
// console.log(out);

// // sm: brute_force; hash, income_char dup?
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   const m = new Map();
//   for (let i = 0; i < s.length; ++i) {
//     let c = 0;
//     for (let j = i; j < s.length; ++j) {
//       const n = s[j];
//       if (m.get(n) !== undefined) {
//         m.clear();
//         break;
//       } else {
//         m.set(n, true);
//         ++c;
//       }
//     } // end loop

//     max = Math.max(max, c);
//   } // end loop

//   return max;
// };

// const s = "pwwkew";
// const out = lengthOfLongestSubstring(s);
// console.log(out);

// // sm: slide_win (tmp_str); left less, right more, move
// var lengthOfLongestSubstring = function (s) {
//   let max = 0;
//   let ts = "";
//   for (let i = 0; i < s.length; ++i) {
//     const n = s[i];
//     // not there
//     if (!ts.includes(n)) {
//       ts = ts + n;
//       max = Math.max(max, ts.length);
//     } else {
//       // there
//       ts = ts.substring(ts.indexOf(n) + 1) + n;
//     }
//   } // end loop

//   return max;
// };

// const s = "a";
// const out = lengthOfLongestSubstring(s);
// console.log(out);

// // sm: slide window, hash (posi) controls win left end, i controls win right end
// var lengthOfLongestSubstring = function (s) {
//   const m = new Map();
//   let start = 0;
//   let max = 0;

//   // win right end
//   for (let i = 0; i < s.length; i++) {
//     const n = s[i];

//     // hash (posi) controls win left end
//     if (m.has(n)) {
//       start = Math.max(m.get(n) + 1, start);
//     }

//     // potential to controls win left end
//     m.set(n, i);

//     // win len
//     max = Math.max(i - start + 1, max);
//   }

//   return max;
// };

// const s = "pwwkew";
// const out = lengthOfLongestSubstring(s);

// sm: slide window; hash (latest posi) controls win left end, i controls win right end
var lengthOfLongestSubstring = function (s) {
  const m = new Map();
  let l = 0;
  let max = 0;

  for (let i = 0; i < s.length; ++i) {
    const n = s[i];

    if (m.has(n)) {
      l = Math.max(l, m.get(n) + 1);
    }

    m.set(n, i);
    max = Math.max(max, i - l + 1);
  }

  return max;
};

const s = "abc";
const out = lengthOfLongestSubstring(s);
console.log(out);
