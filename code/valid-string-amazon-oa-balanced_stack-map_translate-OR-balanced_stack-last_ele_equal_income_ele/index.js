// // sm:
// // * balanced stack
// // * map translate (met again)
// const validString = (ns) => {
//   const s = [];
//   const m = new Map();

//   for (let i = 0; i < ns.length; ++i) {
//     const n = ns[i];

//     let flag = false;
//     if (m.get(n) === true) {
//       s.pop();
//       m.delete(n);
//       flag = true;
//     }

//     if (!flag) {
//       s.push(n);
//       m.set(n, true);
//     }
//   } // el

//   if (s.length <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// sm:
// * balanced stack (last_ele === income_ele)
const validString = (ns) => {
  const s = [];

  for (let i = 0; i < ns.length; ++i) {
    const n = ns[i];

    if (s.length === 0 || n !== s[s.length - 1]) {
      s.push(n);
    } else if (n === s[s.length - 1]) {
      s.pop();
    }
  } // el

  if (s.length <= 0) {
    return true;
  } else {
    return false;
  }
};

// const ns = "";
// const out = validString(ns);
// console.log(out);

// const ns = "vv";
// const out = validString(ns);
// console.log(out);

// const ns = "xbbx";
// const out = validString(ns);
// console.log(out);

// const ns = "bbccdd";
// const out = validString(ns);
// console.log(out);

// const ns = "bbkcdd";
// const out = validString(ns);
// console.log(out);

// const ns = "xyffyxdd";
// const out = validString(ns);
// console.log(out);

// const ns = "bbb";
// const out = validString(ns);
// console.log(out);
