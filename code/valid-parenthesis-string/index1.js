const checkValidString = (s) => {
  const leftIDStack = [];
  const starIDStack = [];
  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];
    if (ch == "(") leftIDStack.push(i);
    else if (ch == "*") starIDStack.push(i);
    else {
      if (leftIDStack.length === 0 && starIDStack.length === 0) return false;
      if (leftIDStack.length !== 0) leftIDStack.pop();
      else starIDStack.pop();
    }
  } // el

  // while (leftIDStack.length !== 0 && starIDStack.length !== 0) {
  //   if (leftIDStack.pop() > starIDStack.pop()) return false;
  // } // el

  return leftIDStack.length === 0;
};

// "(**()*"

// const s = "(*))";
// const out = checkValidString(s);
// console.log(out);

const s = "(**()*";
const out = checkValidString(s);
console.log(out);
