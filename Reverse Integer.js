/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var minn = -(1 << 30) * 2;
    var maxn = (1 << 30) * 2 - 1;
    var result;
    var array = (x).toString().split('');
    var isNegative = (array[0] === "-");
    if (isNegative) {
        array = array.reverse();
        array.pop();
        result = array.join('') * -1;
    } else {
        result = array.reverse().join('') * 1;
    }
    if (result < minn || result > maxn) {
        return 0;
    } else {
        return result;
    }
};
