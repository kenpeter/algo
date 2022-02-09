var maximumProduct = function (ns) {
  const a = [];
  a.push(ns[0]);
  a.push(ns[1]);
  a.push(ns[2]);

  a.sort((x, y) => x - y);
  let n1 = a[0];
  let n2 = a[1];
  let n3 = a[2];

  let m1 = 1;
  for (let i = 3; i < ns.length; ++i) {
    const n = ns[i];

    if (n > n3) {
      n1 = n2;
      n2 = n3;
      n3 = n;
    } else if (n > n2) {
      n1 = n2;
      n2 = n;
    } else if (n > n1) {
      n1 = n;
    }
  } // el
  m1 = n1 * n2 * n3;

  n1 = a[0];
  n2 = a[1];
  n3 = a[2];
  let m2 = 1;
  for (let i = 3; i < ns.length; ++i) {
    const n = ns[i];

    if (n < n1) {
      n3 = n2;
      n2 = n1;
      n1 = n;
    } else if (n < n2) {
      n3 = n2;
      n2 = n;
    } else if (n < n3) {
      n3 = n;
    }
  } // el
  m2 = n1 * n2 * n3;

  return Math.max(m1, m2);
};

const ns = [1, 2, 3];
const out = maximumProduct(ns);
console.log(out);
