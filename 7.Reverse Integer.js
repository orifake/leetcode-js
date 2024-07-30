/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const minn = -(1 << 30) * 2
    const maxn = (1 << 30) * 2 - 1
    const array = (x).toString().split('')
    const isNegative = (array[0] === "-")

    let result
    if (isNegative) {
        array = array.reverse()
        array.pop()
        result = array.join('') * -1
    } else {
        result = array.reverse().join('') * 1
    }
    if (result < minn || result > maxn) {
        return 0
    } else {
        return result
    }
};
