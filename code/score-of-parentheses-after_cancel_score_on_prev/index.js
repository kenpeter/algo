// https://leetcode.com/problems/score-of-parentheses/discuss/141975/c%2B%2B-solution-using-stack-(5ms)-detail-explained
var scoreOfParentheses = function (s) {
  const st = [0]; // will acc last

  for (let i = 0; i < s.length; ++i) {
    const n = s[i];

    if (n === "(") {
      st.push(0);
    } else {
      // ')' is coming

      // backup
      const tmp = st[st.length - 1];

      // balance (full_complete)
      let val = 0;
      if (tmp === 0) {
        val = 1;
      } else {
        val = 2 * tmp;
      }

      // pop (clean_up)
      st.pop();

      // half_complete
      st[st.length - 1] = st[st.length - 1] + val;
    }
  } // el

  return st[st.length - 1];
};

const ns = "()()";
const out = scoreOfParentheses(ns);
console.log(out);
