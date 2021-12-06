var recur = function (dp, obj, ns1, ns2, m, n, c) {
  if (m <= -1 || n <= -1) {
    return c;
  }

  if (dp[m][n][c] !== -1) {
    return dp[m][n][c];
  }

  let c1 = c;
  let c2 = -1;
  let c3 = -1;
  let c4 = -1;

  if (ns1[m] === ns2[n]) {
    c2 = recur(dp, obj, ns1, ns2, m - 1, n - 1, 1 + c);
  }
  c3 = recur(dp, obj, ns1, ns2, m - 1, n, 0);
  c4 = recur(dp, obj, ns1, ns2, m, n - 1, 0);
  const r_c = Math.max(c1, c2, c3, c4);
  obj.max = r_c;

  dp[m][n][c] = r_c;
  return r_c;
};

var findLength = function (ns1, ns2) {
  const max_len = Math.max(ns1.length, ns2.length);
  const dp = new Array(ns1.length).fill(-1).map((_, i) => {
    return new Array(ns2.length).fill(-1).map((_, j) => {
      return new Array(max_len).fill(-1);
    });
  });

  const obj = { max: -1 };
  recur(dp, obj, ns1, ns2, ns1.length - 1, ns2.length - 1, 0);
  return obj.max;
};

const ns1 = [0, 1, 0];
const ns2 = [1, 0, 0];

const out = findLength(ns1, ns2);
console.log(out);
