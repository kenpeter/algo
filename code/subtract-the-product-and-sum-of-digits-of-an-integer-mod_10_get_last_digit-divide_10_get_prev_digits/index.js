var subtractProductAndSum = function (n) {
  let s = 0;
  let p = 1;

  while (n > 0) {
    p = p * (n % 10);
    s = s + (n % 10);
    n = Math.floor(n / 10);
  } // el

  return p - s;
};
