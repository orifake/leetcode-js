/**
 * @constructor
 */
const Queue = function () {
    this.queue = []
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function () {
    return this.queue.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function () {
    return this.queue[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
    return this.queue.length ? false : true;
};
