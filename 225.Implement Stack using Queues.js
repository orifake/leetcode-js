/**
 * @constructor
 */
const Stack = function () {
    this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function () {
    return this.stack.pop();
};

/**
 * @returns {number}
 */
Stack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function () {
    return !this.stack.length ? true : false;
};
