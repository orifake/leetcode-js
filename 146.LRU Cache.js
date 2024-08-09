/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cap = capacity
  this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1
  }
  this.makeRecently(key)
  return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.set(key, value)
    this.makeRecently(key)
    return
  }
  if (this.cache.size >= this.cap) {
    const oldestKey = this.cache.keys().next().value
    this.cache.delete(oldestKey)
  }
  this.cache.set(key, value)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

LRUCache.prototype.makeRecently = function (key) {
  const val = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, val)
}