const allSub = (s) => {
  const a = [];
  // i_start small
  for (let i = 0; i < s.length; i++) {
    // i_start stay; j big; i, j cross over
    for (j = s.length - 1; j - i >= 0; j--) {
      const t = s.substring(i, j + 1);
      a.push(t);
    }
  }

  return a;
};

const out = allSub("abc");
console.log("+++ out", out);
