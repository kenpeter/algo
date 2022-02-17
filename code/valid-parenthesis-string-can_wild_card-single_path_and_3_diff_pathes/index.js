var recur = function (m, s, i, st) {
  const ind = i + "#" + st.toString();

  if (i >= s.length) {
    if (st.length > 0) return false;
    if (st.length === 0) return true;
  }

  if (m.get(ind) !== undefined) {
    return m.get(ind);
  }

  const n = s[i];

  // hit *
  if (n === "*") {
    // 1. ')'
    const st1 = st.slice(0);
    // balance or push
    if (st1[st1.length - 1] === "(") {
      st1.pop();
    } else {
      st1.push(")");
    }
    const c1 = recur(m, s, i + 1, st1);

    // 2. '('
    const st2 = st.slice(0);
    // push
    st2.push("(");
    const c2 = recur(m, s, i + 1, st2);

    // 3. ''
    const st3 = st.slice(0);
    const c3 = recur(m, s, i + 1, st3);

    const condi = c1 || c2 || c3;
    m.set(ind, condi);
    return condi;
  } else {
    const st4 = st.slice(0);
    if (st4[st4.length - 1] === "(" && n === ")") {
      st4.pop();
    } else {
      st4.push(n);
    }
    const c4 = recur(m, s, i + 1, st4);
    m.set(ind, c4);
    return c4;
  }
};

var checkValidString = function (s) {
  const m = new Map();
  return recur(m, s, 0, []);
};

// const s = "(";
// const out = checkValidString(s);
// console.log(out);

// const s = "()";
// const out = checkValidString(s);
// console.log(out);
