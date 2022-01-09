//https://stackoverflow.com/questions/24546740/longest-common-substring-recursive-solution

const lcs = (ns1, ns2, i, j, res) => {
  if (i <= -1 || j <= -1) {
    return res;
  }

  return Math.max(
    ns1[i] === ns2[j] ? lcs(ns1, ns2, i - 1, j - 1, res + 1) : res,
    lcs(ns1, ns2, i, j - 1, 0),
    lcs(ns1, ns2, i - 1, j, 0)
  );
};

const longestCommonSubString = (n1, n2) => {
  const ns1 = n1.toString().split("");
  const ns2 = n2.toString().split("");
  return lcs(ns1, ns2, ns1.length - 1, ns2.length - 1, 0);
};

const ns1 = "abc";
const ns2 = "dabk";
const out = longestCommonSubString(ns1, ns2);
console.log(out);

// const ns1 = "LABFQDB";
// const ns2 = "LABDB";
// const out = longestCommonSubString(ns1, ns2);
// console.log(out);
