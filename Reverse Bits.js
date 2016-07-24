/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bitArray = n.toString(2).split('').reverse();
    var length = bitArray.length;
    for (var i = 0; i < 32 - length; i++) {
        bitArray.push("0");
    }
    return parseInt(bitArray.join(''), 2);
};
