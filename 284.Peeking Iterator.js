/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function (iterator) {
  //peeked works like a buffer 
  this.peeked = null
  this.iterator = iterator
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function () {
  if (this.peeked !== null) {
    return this.peeked
  }
  if (this.iterator.hasNext() !== false) {
    this.peeked = this.iterator.next()
  }
  return this.peeked
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function () {
  if (this.peeked !== null) {
    let val = this.peeked
    this.peeked = null
    return val
  }
  return this.iterator.next()
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function () {
  if (this.peeked !== null) {
    return true
  }
  return this.iterator.hasNext()
};

/** 
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(arr)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/