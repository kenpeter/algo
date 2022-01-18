var minAddToMakeValid = function (s) {
  const st = [];

  let open_c = 0;

  for (let i = 0; i < s.length; ++i) {
    const n = s[i];

    if (st.length === 0 && n === ")") {
      // * when close, not add to stack
      ++open_c;
    } else if (st.length > 0 && st[st.length - 1] === "(" && n === ")") {
      // * can balance out
      st.pop();
    } else {
      // * else just push
      st.push(n);
    }
  } // el

  const c = open_c + st.length;

  return c;
};
