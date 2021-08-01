// https://leetcode.com/playground/gkNkp5nV
// https://leetcode.com/discuss/interview-question/1002811/Amazon-or-OA-2021-or-Fresh-Promotion

const freshPromotion = (codesIn, cart) => {
  const code = [];

  // * group order important
  // * item in 1 group important
  // * so 2d -> 1d
  for (let i = 0; i < codesIn.length; ++i) {
    for (let j = 0; j < codesIn[i].length; ++j) {
      code.push(codesIn[i][j]);
    }
  }

  // no code, always win
  if (code.length === 0) return 1;

  // too much code
  if (code.length > cart.length) return 0;

  // * 2pt
  let i = 0;
  let j = 0;
  while (i < code.length && j < cart.length) {
    // * vertical compare; anything, both_move
    // * continue or reset
    if (code[i] === cart[j] || code[i] === "anything") {
      ++i;
      ++j;
    } else {
      i = 0;
      ++j;
    }
  } // end loop

  // code done
  if (i === code.length) {
    return 1;
  } else {
    return 0;
  }
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

const codeList = [
  ["apple", "apple"],
  ["apple", "apple", "banana"],
];
const shoppingCart = ["apple", "apple", "apple", "banana"];
const out = freshPromotion(codeList, shoppingCart);
console.log(out);
