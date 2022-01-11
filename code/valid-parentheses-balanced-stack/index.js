// https://leetcode.com/discuss/interview-question/1557009/amazon-online-coding-assessment-sde-2

// https://leetcode.com/problems/valid-parentheses/
// sm: balanced stack
var isValid = function (s) {
  const m = new Map();
  const st = [];

  // translate
  m.set("(", ")");
  m.set("{", "}");
  m.set("[", "]");

  for (let i = 0; i < s.length; ++i) {
    const n = s[i];
    let flag = false;

    if (st.length <= 0) {
      st.push(n);
    } else {
      if (m.get(st[st.length - 1]) === n) {
        st.pop();
        flag = true;
      }

      if (!flag) {
        st.push(n);
      }
    }
  } // el

  if (st.length > 0) {
    return false;
  } else {
    return true;
  }
};
