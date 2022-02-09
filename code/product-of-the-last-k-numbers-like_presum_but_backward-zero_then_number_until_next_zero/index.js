var ProductOfNumbers = function () {
  this.a = [1];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (n) {
  if (n > 0) {
    this.a.push(this.a[this.a.length - 1] * n);
  } else {
    this.a = [1];
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const p1 = this.a[this.a.length - 1];
  const p2 = this.a[this.a.length - 1 - k];

  //test
  //console.log('++ p1', p1, 'p2', p2, 'this.a.length', this.a.length, 'k', k)

  const val = k >= this.a.length ? 0 : p1 / p2;
  return val;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
