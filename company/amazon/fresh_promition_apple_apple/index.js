// https://leetcode.com/playground/gkNkp5nV
// https://leetcode.com/discuss/interview-question/1002811/Amazon-or-OA-2021-or-Fresh-Promotion

// function freshPromotion(codeList, shoppingCart) {
//   // code list
//   let listLen = codeList.length;
//   // card list
//   let cartLen = shoppingCart.length;
//   let result = [];

//   let checkCurrentGroup = (listCode, cart, i, j) => {
//     if (
//       (j == cart.length - 1 || i == listCode.length - 1) &&
//       (listCode[i] == cart[j] || listCode[i + 1] == "anything")
//     )
//       return 1;

//     if (
//       listCode[i + 1] &&
//       cart[j + 1] &&
//       (listCode[i + 1] == cart[j + 1] || listCode[i + 1] == "anything") &&
//       checkCurrentGroup(listCode, cart, i + 1, j + 1)
//     )
//       return 1;

//     return 0;
//   };

//   for (let i = 0; i < listLen; i++) {
//     let currentListLen = codeList[i].length;
//     cartLen = shoppingCart.length;
//     if (currentListLen <= cartLen) {
//       for (let j = 0; j < cartLen; j++) {
//         if (
//           cartLen - j >= currentListLen &&
//           (codeList[i][0] == shoppingCart[j] || codeList[i][0] == "anything")
//         ) {
//           let codeResult = checkCurrentGroup(codeList[i], shoppingCart, 0, j);
//           result.push(codeResult);
//           if (codeResult == 1) shoppingCart.splice(j, j + currentListLen);
//           break;
//         }
//       }
//     }
//   }

//   if (result.length < codeList.length) {
//     return 0;
//   } else {
//     return result.includes(0) ? 0 : 1;
//   }
// }

// const freshPromotion = (codesIn, cart) => {
//   const code = [];

//   // * ele order, group order; 2D -> 1D
//   for (let i = 0; i < codesIn.length; ++i) {
//     for (let j = 0; j < codesIn[i].length; ++j) {
//       code.push(codesIn[i][j]);
//     }
//   }

//   // no code, always win
//   if (code.length === 0) return 1;

//   // too much code
//   if (code.length > cart.length) return 0;

//   // * 2pt
//   let i = 0;
//   let j = 0;
//   while (i < code.length && j < cart.length) {
//     // * vertical compare; anything, both_move
//     if (code[i] === cart[j] || code[i] === "anything") {
//       ++i;
//       ++j;
//     } else {
//       ++j; // keep going
//     }
//   } // end loop

//   // code done
//   if (i === code.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// sm
// * chars in substr (order); substrs in sentense (order, gap)
// * vertical_match or !match, reset substr
const freshPromotion = (codes, cart) => {
  let j = 0;
  // substrs
  for (const code of codes) {
    // single substr
    let i = 0;
    while (i < code.length && j < cart.length) {
      // vertical match
      if (code[i] === cart[j] || code[i] === "anything") {
        ++i;
        ++j;
      } else {
        // !match, reset substr
        i = 0;
        // skip the gap
        ++j;
      }
    } // end loop

    // substr
    if (i !== code.length) return 0;
  }

  return 1;
};

// const codeList = [
//   ["apple", "apple"],
//   ["banana", "anything", "banana"],
// ];
// const shoppingCart = ["orange", "apple", "apple", "banana", "orange", "banana"];
// const out = freshPromotion(codeList, shoppingCart);
// console.log(out);

// const codeList = [
//   ["apple", "apple"],
//   ["banana", "anything", "banana"],
// ];
// const shoppingCart = ["banana", "orange", "banana", "apple", "apple"];

// const out = freshPromotion(codeList, shoppingCart);
// console.log(out);

// const codeList = [
//   ["apple", "apple"],
//   ["banana", "anything", "banana"],
// ];
// const shoppingCart = ["apple", "banana", "apple", "banana", "orange", "banana"];
// const out = freshPromotion(codeList, shoppingCart);
// console.log(out);

// const codeList = [
//   ["apple", "apple"],
//   ["apple", "apple", "banana"],
// ];
// const shoppingCart = ["apple", "apple", "apple", "banana"];
// const out = freshPromotion(codeList, shoppingCart);
// console.log(out);

const codeList = [
  ["apple", "apple"],
  ["banana", "anything", "banana"],
];
const shoppingCart = [
  "apple",
  "apple",
  "orange",
  "orange",
  "banana",
  "apple",
  "banana",
  "banana",
];
const out = freshPromotion(codeList, shoppingCart);
console.log(out);
