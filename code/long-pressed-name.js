// // sm: EITHER 1 by 1 (can long press), OR long press ( look_back(same type) ); look_back (same_type)
// var isLongPressedName = function (na, ty) {
//   if (ty.length < na.length) return false;

//   let i = 0;
//   let j = 0;
//   let f1 = false;
//   let f2 = false;

//   while (i < na.length && j < ty.length) {
//     // * 1 by 1 (afterward, long press)
//     while (i < na.length && j < ty.length && na[i] === ty[j]) {
//       ++i;
//       ++j;
//       f1 = true;
//       continue;
//     }

//     // * look_back (same type)
//     while (j < ty.length && ty[j - 1] === ty[j]) {
//       ++j;
//       f2 = true;
//       continue;
//     }

//     // either 1 by 1 OR look_back (same type)
//     if (f1 === false && f2 === false) return false;

//     // if 1 side not done, false; they should finish same time
//     if (i >= na.length && j < ty.length) return false;
//     if (i < na.length && j >= ty.length) return false;

//     // reset
//     f1 = false;
//     f2 = false;
//   }

//   return true;
// };

// // true
// const in1 = "vtkgn";
// const in2 = "vttkgnn";

// // false
// // const in1 = "alex";
// // const in2 = "aaleexa";

// // false
// // const in1 = "pyplrz";
// // const in2 = "ppyypllr";

// const out = isLongPressedName(in1, in2);
// console.log(out);

//
//
// var isLongPressedName = function (na, ty) {
//   let i = 0;
//   let j = 0;

//   // * all_char_equal: (1) use_leading_char (2) use_prev_char
//   // * i exhaust 1st, j exhaust later
//   while (j < ty.length) {
//     if (na[i] === ty[j]) {
//       ++i;
//       ++j;
//     } else if (ty[j] === ty[j - 1]) {
//       ++j;
//     } else {
//       return false;
//     }
//   }

//   // at the end, both of them exhaust
//   return na.length === i && ty.length === j;
// };

// const in1 = "vtkgn";
// const in2 = "vttkgnn";

// const out = isLongPressedName(in1, in2);
// console.log(out);

var isLongPressedName = function (na, ty) {
  let i = 0;
  let j = 0;
  let c1 = false;
  let c2 = false;

  while (i < na.length && j < ty.length) {
    // * 1 by 1
    while (i < na.length && j < ty.length && na[i] === ty[j]) {
      ++i;
      ++j;
      c1 = true;
      continue;
    }

    // * prev (long press)
    while (j < ty.length && ty[j - 1] === ty[j]) {
      ++j;
      c2 = true;
      continue;
    }

    if (c1 === false && c2 === false) return false;

    // reset
    c1 = false;
    c2 = false;
  }

  return i === na.length && j === ty.length;
};

const in1 = "saeed";
const in2 = "ssaaedd";

const out = isLongPressedName(in1, in2);
console.log(out);
