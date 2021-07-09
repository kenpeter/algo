// var removeDuplicates = function (s) {
//   for (let i = 0; i < s.length - 1; ++i) {
//     if (s[i] == s[i + 1]) {
//       // 2 at a time?
//       const newString = removeDuplicates(
//         s.substring(0, i) + s.substring(i + 2)
//       );
//       return newString;
//     }
//   }

//   // There were no duped chars, we return the String unchanged
//   return s;
// };

// // const input = "aabcdd";
// // const out = removeDuplicates(input);
// // console.log(out);

// const input = "abbbb";
// const out = removeDuplicates(input);
// console.log(out);

// =========================
// const removeDuplicates = (s) => {
//   const arr = s.split("");
//   let j = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     const condi = j === 0 || arr[i] !== arr[j - 1];
//     if (condi) {
//       arr[j++] = arr[i];
//     } else {
//       --j;
//     }
//   }
//   return arr.slice(0, j).join("");
// };

// const input = "abbba";
// const out = removeDuplicates(input);
// console.log(out);

// const removeDuplicates = (s) => {
//   const a = s.split("");
//   let end = -1;
//   for (let i = 0; i < a.length; ++i) {
//     const c = a[i];
//     if (end >= 0 && a[end] === c) {
//       --end;
//     } else {
//       a[++end] = c;
//     }
//   }

//   const res = a.join("").substring(0, end + 1);
//   return res;
// };

// const input = "abbbba";
// const out = removeDuplicates(input);
// console.log(out);

const removeDuplicates = (s) => {
  const st = [];
  const a = s.split("");

  st.push(a[0]);
  for (let i = 1; i < a.length; ++i) {
    const e = a[i];
    if (st[st.length - 1] === e) {
      st.pop();
    } else {
      st.push(e);
    }
  }

  return st.join("");
};

const input = "abbaca";
const out = removeDuplicates(input);
console.log(out);
