/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s ? s.trim().split(' ').pop().length : 0;
};
