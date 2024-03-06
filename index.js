/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  var res = -1;
  var nLen = this.length;
  if (nLen > 0) {
    res = this.at(nLen - 1);
  }
  return res;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

module.exports = Array;
