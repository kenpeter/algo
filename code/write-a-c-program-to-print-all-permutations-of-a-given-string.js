// https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/

const permute = (s, ans) => {
  if (s.length === 0) {
    console.log(ans);
    return;
  }

  for (i = 0; i < s.length; ++i) {
    const ch = s[i];
    const left_substr = s.substring(0, i);
    const right_substr = s.substring(i + 1);
    const rest = left_substr + right_substr;
    permute(rest, ans + ch);
  }
};

const main = () => {
  const s = "ABC";
  const ans = "";
  permute(s, ans);
};

main();
