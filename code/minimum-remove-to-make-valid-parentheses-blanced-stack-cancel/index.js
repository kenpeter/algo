var minRemoveToMakeValid = function (s) {
  const rm_a = [];
  const st = [];

  for (let i = 0; i < s.length; ++i) {
    const n = s[i];
    if (n === ")") {
      if (st.length === 0) {
        rm_a.push([n, i]);
      } else if (st[st.length - 1][0] === "(") {
        st.pop();
      }
    }

    if (n === "(") {
      st.push([n, i]);
    }
  } // el

  const arr = [...rm_a, ...st];
  const h = {};
  for (let i = 0; i < arr.length; ++i) {
    const ind = arr[i][1];
    h[ind] = true;
  } // el

  let out = "";
  for (let i = 0; i < s.length; ++i) {
    if (h[i] === true) {
    } else {
      out = out + s[i];
    }
  } // el

  return out;
};

// const s = "lee(t(c)o)de)";
// const out = minRemoveToMakeValid(s);
// console.log(out);

// const s = "a)b(c)d";
// const out = minRemoveToMakeValid(s);
// console.log(out);

// const s = "))((";
// const out = minRemoveToMakeValid(s);
// console.log(out);
