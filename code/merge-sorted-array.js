// method 2: backward, 2 read, 1 write; i over-run (ns2 left)
var merge = function (ns1, m, ns2, n) {
  let k = m + n - 1; // w
  let i = m - 1; // r
  let j = n - 1; // r

  // i over-run (ns2 left), j guard, k guard
  while (j >= 0 && k >= 0) {
    if (ns1[i] > ns2[j]) {
      ns1[k] = ns1[i];
      --k; // k guard
      --i; // i over-run (ns2 left)
    } else {
      ns1[k] = ns2[j];
      --k; // k guard
      --j; // i over-run (ns2 left)
    }
  }
};

const ns1 = [0];
const ns1_len = 0;
const ns2 = [1];
const ns2_len = 1;
const out = merge(ns1, ns1_len, ns2, ns2_len);

console.log("+++ ns1", ns1);
