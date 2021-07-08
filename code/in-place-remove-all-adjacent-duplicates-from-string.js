var removeDuplicates = function (s) {
  for (let i = 0; i < s.length - 1; ++i) {
    if (s[i] == s[i + 1]) {
      // 2 at a time?
      const newString = removeDuplicates(
        s.substring(0, i) + s.substring(i + 2)
      );
      return newString;
    }
  }

  // There were no duped chars, we return the String unchanged
  return s;
};

// const input = "aabcdd";
// const out = removeDuplicates(input);
// console.log(out);

const input = "abbbb";
const out = removeDuplicates(input);
console.log(out);
