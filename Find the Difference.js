/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var sArray = s.split('').sort();
    var tArray = t.split('').sort();
    for (var i = 0, len = tArray.length; i < len; i++) {
        if (sArray[i] !== tArray[i]) {
            return tArray[i];
        }
    }
};